import type { Express, Request, Response, NextFunction, RequestHandler } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth as setupReplitAuth, isAuthenticated as replitIsAuthenticated } from "./replitAuth";
import { setupAuth as setupLocalAuth, isAuthenticated as localIsAuthenticated } from "./localAuth";
import { 
  insertRestaurantSchema, 
  insertTableSchema, 
  insertReservationSchema, 
  insertReviewSchema,
  type UserRole
} from "@shared/schema";
import { z } from "zod";

interface UserClaims {
  sub: string;
  name?: string;
  email?: string;
}

interface AuthUser {
  claims: UserClaims;
}

interface AuthRequest extends Request {
  user: AuthUser;
}

  // Basic type for authenticated requests
interface AuthenticatedRequest extends Request {
  user: {
    claims: {
      sub: string;
    };
    id?: string; // For local auth compatibility
  };
}

// Authentication middleware
function withAuth(handler: (req: AuthenticatedRequest, res: Response) => Promise<void>): RequestHandler {
  return async (req, res, next) => {
    const user = req.user as any;
    if (!user?.claims?.sub) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    try {
      await handler(req as AuthenticatedRequest, res);
    } catch (error) {
      next(error);
    }
  };
}

// Helper to wrap route handlers
function wrapHandler(handler: (req: Request, res: Response) => Promise<void>): RequestHandler {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

interface RestaurantQueryParams {
  query?: string;
  cuisine?: string;
  priceLevel?: string;
  rating?: string;
}

interface AuthQueryParams {
  id?: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Determine auth setup based on environment
  const isDev = app.get("env") === "development";
  const setupAuth = isDev ? setupLocalAuth : setupReplitAuth;
  const isAuthenticated = isDev ? localIsAuthenticated : replitIsAuthenticated;

  // Setup auth middleware
  await setupAuth(app);

  // Auth routes
  const getUserHandler = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = isDev ? req.user.id : req.user.claims?.sub;
      if (!userId) {
        res.status(401).json({ message: "User not found" });
        return;
      }
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  };

  app.get('/api/auth/user', isAuthenticated, withAuth(getUserHandler));

  // Restaurant routes
  const getRestaurantsHandler = async (req: Request, res: Response) => {
    try {
      const { query, cuisine, priceLevel, rating } = req.query;
      const filters = {
        query: query as string,
        cuisine: cuisine as string,
        priceLevel: priceLevel ? parseInt(priceLevel as string) : undefined,
        ratingMin: rating ? parseFloat(rating as string) : undefined,
      };
      
      const restaurants = await storage.getRestaurants(filters);
      res.json(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ message: "Failed to fetch restaurants" });
    }
  };

  app.get('/api/restaurants', wrapHandler(getRestaurantsHandler));

  app.get('/api/restaurants/:slug', async (req, res) => {
    try {
      const restaurant = await storage.getRestaurantBySlug(req.params.slug);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      res.json(restaurant);
    } catch (error) {
      console.error("Error fetching restaurant:", error);
      res.status(500).json({ message: "Failed to fetch restaurant" });
    }
  });

  app.get('/api/restaurants/:id/tables', isAuthenticated, async (req, res) => {
    try {
      const tables = await storage.getRestaurantTables(req.params.id);
      res.json(tables);
    } catch (error) {
      console.error("Error fetching tables:", error);
      res.status(500).json({ message: "Failed to fetch tables" });
    }
  });

  app.get('/api/restaurants/:id/availability', isAuthenticated, async (req, res) => {
    try {
      const { date, startTime, endTime, tableId } = req.query;
      
      if (!date || !startTime || !endTime || !tableId) {
        return res.status(400).json({ message: "Missing required parameters" });
      }
      
      const isAvailable = await storage.checkTableAvailability(
        tableId as string,
        date as string,
        startTime as string,
        endTime as string
      );
      
      res.json({ available: isAvailable });
    } catch (error) {
      console.error("Error checking availability:", error);
      res.status(500).json({ message: "Failed to check availability" });
    }
  });

  // Table hold routes
  app.post('/api/holds', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { tableId, date, startTime, endTime } = req.body;
      
      // Check if table is available
      const isAvailable = await storage.checkTableAvailability(tableId, date, startTime, endTime);
      if (!isAvailable) {
        return res.status(409).json({ message: "Table is not available for the selected time" });
      }
      
      // Create hold that expires in 5 minutes
      const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
      const hold = await storage.createTableHold({
        tableId,
        userId,
        date,
        startTime,
        endTime,
        expiresAt,
      });
      
      res.json(hold);
    } catch (error) {
      console.error("Error creating hold:", error);
      res.status(500).json({ message: "Failed to create table hold" });
    }
  });

  app.delete('/api/holds/:id', isAuthenticated, async (req: any, res) => {
    try {
      const success = await storage.releaseTableHold(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Hold not found" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error releasing hold:", error);
      res.status(500).json({ message: "Failed to release hold" });
    }
  });

  // Reservation routes
  app.post('/api/reservations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const reservationData = insertReservationSchema.parse({
        ...req.body,
        userId,
      });
      
      // Check availability again before creating reservation
      const isAvailable = await storage.checkTableAvailability(
        reservationData.tableId,
        reservationData.date,
        reservationData.startTime,
        reservationData.endTime
      );
      
      if (!isAvailable) {
        return res.status(409).json({ message: "Table is no longer available" });
      }
      
      const reservation = await storage.createReservation(reservationData);
      res.json(reservation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid reservation data", errors: error.errors });
      }
      console.error("Error creating reservation:", error);
      res.status(500).json({ message: "Failed to create reservation" });
    }
  });

  app.get('/api/reservations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const reservations = await storage.getUserReservations(userId);
      res.json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ message: "Failed to fetch reservations" });
    }
  });

  app.patch('/api/reservations/:id/cancel', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const reservation = await storage.getReservation(req.params.id);
      
      if (!reservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      
      if (reservation.userId !== userId) {
        return res.status(403).json({ message: "Not authorized to cancel this reservation" });
      }
      
      const success = await storage.cancelReservation(req.params.id);
      if (!success) {
        return res.status(400).json({ message: "Failed to cancel reservation" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error cancelling reservation:", error);
      res.status(500).json({ message: "Failed to cancel reservation" });
    }
  });

  // Review routes
  app.post('/api/reviews', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const reviewData = insertReviewSchema.parse({
        ...req.body,
        userId,
      });
      
      const review = await storage.createReview(reviewData);
      res.json(review);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid review data", errors: error.errors });
      }
      console.error("Error creating review:", error);
      res.status(500).json({ message: "Failed to create review" });
    }
  });

  app.get('/api/restaurants/:id/reviews', async (req, res) => {
    try {
      const reviews = await storage.getRestaurantReviews(req.params.id);
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  // Manager routes
  app.get('/api/manager/restaurants', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const restaurants = await storage.getUserManagedRestaurants(userId);
      res.json(restaurants);
    } catch (error) {
      console.error("Error fetching managed restaurants:", error);
      res.status(500).json({ message: "Failed to fetch managed restaurants" });
    }
  });

  app.get('/api/manager/restaurants/:id/reservations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const restaurantId = req.params.id;
      const { date } = req.query;
      
      // Check if user is manager of this restaurant
      const isManager = await storage.isRestaurantManager(userId, restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to view this restaurant's reservations" });
      }
      
      const reservations = await storage.getRestaurantReservations(restaurantId, date as string);
      res.json(reservations);
    } catch (error) {
      console.error("Error fetching restaurant reservations:", error);
      res.status(500).json({ message: "Failed to fetch reservations" });
    }
  });

  app.patch('/api/manager/reservations/:id/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { status } = req.body;
      
      const reservation = await storage.getReservation(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      
      // Check if user is manager of the restaurant
      const isManager = await storage.isRestaurantManager(userId, reservation.restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to update this reservation" });
      }
      
      const updatedReservation = await storage.updateReservationStatus(req.params.id, status);
      res.json(updatedReservation);
    } catch (error) {
      console.error("Error updating reservation status:", error);
      res.status(500).json({ message: "Failed to update reservation status" });
    }
  });

  // Table management routes
  app.post('/api/manager/restaurants/:id/tables', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const restaurantId = req.params.id;
      
      // Check if user is manager
      const isManager = await storage.isRestaurantManager(userId, restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to manage this restaurant" });
      }
      
      const tableData = insertTableSchema.parse({
        ...req.body,
        restaurantId,
      });
      
      const table = await storage.createTable(tableData);
      res.json(table);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid table data", errors: error.errors });
      }
      console.error("Error creating table:", error);
      res.status(500).json({ message: "Failed to create table" });
    }
  });

  app.put('/api/manager/tables/:id', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const table = await storage.getTable(req.params.id);
      
      if (!table) {
        return res.status(404).json({ message: "Table not found" });
      }
      
      // Check if user is manager
      const isManager = await storage.isRestaurantManager(userId, table.restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to update this table" });
      }
      
      const updatedTable = await storage.updateTable(req.params.id, req.body);
      res.json(updatedTable);
    } catch (error) {
      console.error("Error updating table:", error);
      res.status(500).json({ message: "Failed to update table" });
    }
  });

  app.delete('/api/manager/tables/:id', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const table = await storage.getTable(req.params.id);
      
      if (!table) {
        return res.status(404).json({ message: "Table not found" });
      }
      
      // Check if user is manager
      const isManager = await storage.isRestaurantManager(userId, table.restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to delete this table" });
      }
      
      const success = await storage.deleteTable(req.params.id);
      if (!success) {
        return res.status(400).json({ message: "Failed to delete table" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting table:", error);
      res.status(500).json({ message: "Failed to delete table" });
    }
  });

  // Floor map routes
  app.get('/api/restaurants/:id/floor-map', async (req, res) => {
    try {
      const floorMap = await storage.getRestaurantFloorMap(req.params.id);
      res.json(floorMap);
    } catch (error) {
      console.error("Error fetching floor map:", error);
      res.status(500).json({ message: "Failed to fetch floor map" });
    }
  });

  app.post('/api/manager/restaurants/:id/floor-map', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const restaurantId = req.params.id;
      
      // Check if user is manager
      const isManager = await storage.isRestaurantManager(userId, restaurantId);
      if (!isManager) {
        return res.status(403).json({ message: "Not authorized to update floor map" });
      }
      
      const floorMap = await storage.saveFloorMap(restaurantId, req.body.svgData);
      res.json(floorMap);
    } catch (error) {
      console.error("Error saving floor map:", error);
      res.status(500).json({ message: "Failed to save floor map" });
    }
  });

  // Cleanup expired holds periodically
  setInterval(async () => {
    try {
      await storage.releaseExpiredHolds();
    } catch (error) {
      console.error("Error releasing expired holds:", error);
    }
  }, 60000); // Every minute

  // Create the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
