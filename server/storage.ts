import {
  users,
  restaurants,
  tables,
  reservations,
  reviews,
  offers,
  floorMaps,
  tableHolds,
  redemptions,
  restaurantManagers,
  type User,
  type UpsertUser,
  type Restaurant,
  type InsertRestaurant,
  type Table,
  type InsertTable,
  type Reservation,
  type InsertReservation,
  type Review,
  type InsertReview,
  type Offer,
  type FloorMap,
  type TableHold,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, gte, lte, desc, asc, sql, like, inArray } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Restaurant operations
  getRestaurants(filters?: {
    query?: string;
    cuisine?: string;
    priceLevel?: number;
    ratingMin?: number;
    location?: string;
  }): Promise<Restaurant[]>;
  getRestaurant(id: string): Promise<Restaurant | undefined>;
  getRestaurantBySlug(slug: string): Promise<Restaurant | undefined>;
  createRestaurant(restaurant: InsertRestaurant): Promise<Restaurant>;
  
  // Table operations
  getRestaurantTables(restaurantId: string): Promise<Table[]>;
  getTable(id: string): Promise<Table | undefined>;
  createTable(table: InsertTable): Promise<Table>;
  updateTable(id: string, updates: Partial<InsertTable>): Promise<Table | undefined>;
  deleteTable(id: string): Promise<boolean>;
  
  // Reservation operations
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservation(id: string): Promise<Reservation | undefined>;
  getUserReservations(userId: string): Promise<Reservation[]>;
  getRestaurantReservations(restaurantId: string, date?: string): Promise<Reservation[]>;
  updateReservationStatus(id: string, status: string): Promise<Reservation | undefined>;
  cancelReservation(id: string): Promise<boolean>;
  
  // Table availability
  checkTableAvailability(tableId: string, date: string, startTime: string, endTime: string): Promise<boolean>;
  createTableHold(hold: Omit<TableHold, 'id' | 'createdAt'>): Promise<TableHold>;
  releaseTableHold(id: string): Promise<boolean>;
  releaseExpiredHolds(): Promise<number>;
  
  // Reviews
  createReview(review: InsertReview): Promise<Review>;
  getRestaurantReviews(restaurantId: string): Promise<Review[]>;
  updateRestaurantRating(restaurantId: string): Promise<void>;
  
  // Offers
  getActiveOffers(restaurantId: string): Promise<Offer[]>;
  getAvailableOffers(userId: string): Promise<Offer[]>;
  
  // Floor maps
  getRestaurantFloorMap(restaurantId: string): Promise<FloorMap | undefined>;
  saveFloorMap(restaurantId: string, svgData: any): Promise<FloorMap>;
  
  // Manager operations
  isRestaurantManager(userId: string, restaurantId: string): Promise<boolean>;
  getUserManagedRestaurants(userId: string): Promise<Restaurant[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Restaurant operations
  async getRestaurants(filters?: {
    query?: string;
    cuisine?: string;
    priceLevel?: number;
    ratingMin?: number;
    location?: string;
  }): Promise<Restaurant[]> {
    let whereConditions = [eq(restaurants.isActive, true)];
    
    if (filters?.query) {
      whereConditions.push(
        sql`${restaurants.name} ILIKE ${'%' + filters.query + '%'} OR ${restaurants.description} ILIKE ${'%' + filters.query + '%'}`
      );
    }
    
    if (filters?.priceLevel) {
      whereConditions.push(eq(restaurants.priceLevel, filters.priceLevel));
    }
    
    if (filters?.ratingMin) {
      whereConditions.push(gte(restaurants.ratingAvg, filters.ratingMin.toString()));
    }
    
    return db.select().from(restaurants)
      .where(and(...whereConditions))
      .orderBy(desc(restaurants.ratingAvg));
  }

  async getRestaurant(id: string): Promise<Restaurant | undefined> {
    const [restaurant] = await db.select().from(restaurants).where(eq(restaurants.id, id));
    return restaurant;
  }

  async getRestaurantBySlug(slug: string): Promise<Restaurant | undefined> {
    const [restaurant] = await db.select().from(restaurants).where(eq(restaurants.slug, slug));
    return restaurant;
  }

  async createRestaurant(restaurant: InsertRestaurant): Promise<Restaurant> {
    const [newRestaurant] = await db.insert(restaurants).values(restaurant).returning();
    return newRestaurant;
  }

  // Table operations
  async getRestaurantTables(restaurantId: string): Promise<Table[]> {
    return db.select().from(tables)
      .where(and(eq(tables.restaurantId, restaurantId), eq(tables.isActive, true)))
      .orderBy(asc(tables.label));
  }

  async getTable(id: string): Promise<Table | undefined> {
    const [table] = await db.select().from(tables).where(eq(tables.id, id));
    return table;
  }

  async createTable(table: InsertTable): Promise<Table> {
    const [newTable] = await db.insert(tables).values(table).returning();
    return newTable;
  }

  async updateTable(id: string, updates: Partial<InsertTable>): Promise<Table | undefined> {
    const [updatedTable] = await db.update(tables)
      .set(updates)
      .where(eq(tables.id, id))
      .returning();
    return updatedTable;
  }

  async deleteTable(id: string): Promise<boolean> {
    const result = await db.update(tables)
      .set({ isActive: false })
      .where(eq(tables.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Reservation operations
  async createReservation(reservation: InsertReservation): Promise<Reservation> {
    const confirmationCode = `RES-${randomUUID().substring(0, 8).toUpperCase()}`;
    const pointsEarned = Math.floor(reservation.partySize * 50); // 50 points per person
    
    const [newReservation] = await db.insert(reservations).values({
      ...reservation,
      confirmationCode,
      pointsEarned,
      status: "CONFIRMED",
    }).returning();
    
    // Update user points
    await db.update(users)
      .set({ 
        points: sql`${users.points} + ${pointsEarned}`,
        updatedAt: new Date()
      })
      .where(eq(users.id, reservation.userId));
    
    return newReservation;
  }

  async getReservation(id: string): Promise<Reservation | undefined> {
    const [reservation] = await db.select().from(reservations).where(eq(reservations.id, id));
    return reservation;
  }

  async getUserReservations(userId: string): Promise<Reservation[]> {
    return db.select().from(reservations)
      .where(eq(reservations.userId, userId))
      .orderBy(desc(reservations.createdAt));
  }

  async getRestaurantReservations(restaurantId: string, date?: string): Promise<Reservation[]> {
    let whereConditions = [eq(reservations.restaurantId, restaurantId)];
    
    if (date) {
      whereConditions.push(eq(reservations.date, date));
    }
    
    return db.select().from(reservations)
      .where(and(...whereConditions))
      .orderBy(asc(reservations.startTime));
  }

  async updateReservationStatus(id: string, status: string): Promise<Reservation | undefined> {
    const [updatedReservation] = await db.update(reservations)
      .set({ status: status as any, updatedAt: new Date() })
      .where(eq(reservations.id, id))
      .returning();
    return updatedReservation;
  }

  async cancelReservation(id: string): Promise<boolean> {
    const result = await db.update(reservations)
      .set({ status: "CANCELLED", updatedAt: new Date() })
      .where(eq(reservations.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Table availability
  async checkTableAvailability(tableId: string, date: string, startTime: string, endTime: string): Promise<boolean> {
    const conflicts = await db.select().from(reservations)
      .where(and(
        eq(reservations.tableId, tableId),
        eq(reservations.date, date),
        sql`${reservations.startTime} < ${endTime}`,
        sql`${reservations.endTime} > ${startTime}`,
        inArray(reservations.status, ["CONFIRMED", "SEATED"])
      ));
    
    return conflicts.length === 0;
  }

  async createTableHold(hold: Omit<TableHold, 'id' | 'createdAt'>): Promise<TableHold> {
    const [newHold] = await db.insert(tableHolds).values(hold).returning();
    return newHold;
  }

  async releaseTableHold(id: string): Promise<boolean> {
    const result = await db.delete(tableHolds).where(eq(tableHolds.id, id));
    return (result.rowCount || 0) > 0;
  }

  async releaseExpiredHolds(): Promise<number> {
    const result = await db.delete(tableHolds)
      .where(lte(tableHolds.expiresAt, new Date()));
    return result.rowCount || 0;
  }

  // Reviews
  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    
    // Update restaurant rating
    await this.updateRestaurantRating(review.restaurantId);
    
    return newReview;
  }

  async getRestaurantReviews(restaurantId: string): Promise<Review[]> {
    return db.select().from(reviews)
      .where(and(eq(reviews.restaurantId, restaurantId), eq(reviews.isVisible, true)))
      .orderBy(desc(reviews.createdAt));
  }

  async updateRestaurantRating(restaurantId: string): Promise<void> {
    const result = await db.select({
      avgRating: sql<number>`AVG(${reviews.rating})`,
      count: sql<number>`COUNT(*)`,
    }).from(reviews)
      .where(and(eq(reviews.restaurantId, restaurantId), eq(reviews.isVisible, true)));
    
    const { avgRating, count } = result[0];
    
    await db.update(restaurants)
      .set({
        ratingAvg: avgRating?.toFixed(2) || "0.00",
        ratingCount: count || 0,
        updatedAt: new Date(),
      })
      .where(eq(restaurants.id, restaurantId));
  }

  // Offers
  async getActiveOffers(restaurantId: string): Promise<Offer[]> {
    return db.select().from(offers)
      .where(and(
        eq(offers.restaurantId, restaurantId),
        eq(offers.isActive, true),
        lte(offers.validFrom, new Date()),
        gte(offers.validTo, new Date())
      ));
  }

  async getAvailableOffers(userId: string): Promise<Offer[]> {
    const user = await this.getUser(userId);
    if (!user) return [];
    
    return db.select().from(offers)
      .where(and(
        eq(offers.isActive, true),
        lte(offers.pointsRequired, user.points),
        lte(offers.validFrom, new Date()),
        gte(offers.validTo, new Date())
      ));
  }

  // Floor maps
  async getRestaurantFloorMap(restaurantId: string): Promise<FloorMap | undefined> {
    const [floorMap] = await db.select().from(floorMaps)
      .where(and(eq(floorMaps.restaurantId, restaurantId), eq(floorMaps.isActive, true)))
      .orderBy(desc(floorMaps.version));
    return floorMap;
  }

  async saveFloorMap(restaurantId: string, svgData: any): Promise<FloorMap> {
    // Deactivate existing maps
    await db.update(floorMaps)
      .set({ isActive: false })
      .where(eq(floorMaps.restaurantId, restaurantId));
    
    // Create new map
    const [newMap] = await db.insert(floorMaps).values({
      restaurantId,
      svgData,
      version: 1,
      isActive: true,
    }).returning();
    
    return newMap;
  }

  // Manager operations
  async isRestaurantManager(userId: string, restaurantId: string): Promise<boolean> {
    const [manager] = await db.select().from(restaurantManagers)
      .where(and(
        eq(restaurantManagers.userId, userId),
        eq(restaurantManagers.restaurantId, restaurantId)
      ));
    return !!manager;
  }

  async getUserManagedRestaurants(userId: string): Promise<Restaurant[]> {
    return db.select({
      id: restaurants.id,
      name: restaurants.name,
      slug: restaurants.slug,
      description: restaurants.description,
      address: restaurants.address,
      latitude: restaurants.latitude,
      longitude: restaurants.longitude,
      phone: restaurants.phone,
      whatsapp: restaurants.whatsapp,
      email: restaurants.email,
      website: restaurants.website,
      cuisines: restaurants.cuisines,
      priceLevel: restaurants.priceLevel,
      currency: restaurants.currency,
      images: restaurants.images,
      ratingAvg: restaurants.ratingAvg,
      ratingCount: restaurants.ratingCount,
      openingHours: restaurants.openingHours,
      ownerId: restaurants.ownerId,
      isActive: restaurants.isActive,
      createdAt: restaurants.createdAt,
      updatedAt: restaurants.updatedAt,
    })
    .from(restaurants)
    .innerJoin(restaurantManagers, eq(restaurants.id, restaurantManagers.restaurantId))
    .where(eq(restaurantManagers.userId, userId));
  }
}

export const storage = new DatabaseStorage();
