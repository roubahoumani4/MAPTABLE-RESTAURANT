import { db } from './db';
import { users, restaurantManagers, reservations, reviews, offers, tableHolds, redemptions, restaurants, tables, floorMaps } from '@shared/schema';
import { eq, and, gte, lte, desc, asc, sql, like, inArray } from 'drizzle-orm';
import { mockRestaurants, mockTables, mockFloorMaps } from './mockData';
import type { 
  User, 
  UpsertUser, 
  Restaurant, 
  InsertRestaurant, 
  Table, 
  InsertTable, 
  Reservation, 
  InsertReservation, 
  Review, 
  InsertReview, 
  Offer, 
  FloorMap, 
  TableHold 
} from '@shared/schema';

export class HybridStorage {
  // User operations - Use real database
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

  // Restaurant operations - Use real database
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
    
    if (filters?.cuisine) {
      whereConditions.push(sql`${restaurants.cuisines} @> ${JSON.stringify([filters.cuisine])}`);
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

  // Table operations - Use real database
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

  // Reservation operations - Use real database
  async createReservation(reservation: InsertReservation): Promise<Reservation> {
    const [newReservation] = await db.insert(reservations).values(reservation).returning();
    return newReservation;
  }

  async getReservation(id: string): Promise<Reservation | undefined> {
    const [reservation] = await db.select().from(reservations).where(eq(reservations.id, id));
    return reservation;
  }

  async getUserReservations(userId: string): Promise<Reservation[]> {
    return db.select().from(reservations).where(eq(reservations.userId, userId));
  }

  async getRestaurantReservations(restaurantId: string, date?: string): Promise<Reservation[]> {
    let query = db.select().from(reservations).where(eq(reservations.restaurantId, restaurantId));
    if (date) {
      query = query.where(eq(reservations.date, date));
    }
    return query;
  }

  async updateReservationStatus(id: string, status: string): Promise<Reservation | undefined> {
    const [updatedReservation] = await db
      .update(reservations)
      .set({ status: status as any, updatedAt: new Date() })
      .where(eq(reservations.id, id))
      .returning();
    return updatedReservation;
  }

  async cancelReservation(id: string): Promise<boolean> {
    const result = await db
      .update(reservations)
      .set({ status: 'CANCELLED', updatedAt: new Date() })
      .where(eq(reservations.id, id));
    return true;
  }

  // Table availability - Use real database for holds
  async checkTableAvailability(tableId: string, date: string, startTime: string, endTime: string): Promise<boolean> {
    // Check for conflicting reservations
    const conflictingReservations = await db
      .select()
      .from(reservations)
      .where(
        and(
          eq(reservations.tableId, tableId),
          eq(reservations.date, date),
          eq(reservations.status, 'CONFIRMED'),
          sql`${reservations.startTime} < ${endTime} AND ${reservations.endTime} > ${startTime}`
        )
      );
    
    // Check for conflicting holds
    const conflictingHolds = await db
      .select()
      .from(tableHolds)
      .where(
        and(
          eq(tableHolds.tableId, tableId),
          eq(tableHolds.date, date),
          sql`${tableHolds.startTime} < ${endTime} AND ${tableHolds.endTime} > ${startTime}`,
          sql`${tableHolds.expiresAt} > NOW()`
        )
      );
    
    return conflictingReservations.length === 0 && conflictingHolds.length === 0;
  }

  async createTableHold(hold: Omit<TableHold, 'id' | 'createdAt'>): Promise<TableHold> {
    const [newHold] = await db.insert(tableHolds).values(hold).returning();
    return newHold;
  }

  async releaseTableHold(id: string): Promise<boolean> {
    await db.delete(tableHolds).where(eq(tableHolds.id, id));
    return true;
  }

  async releaseExpiredHolds(): Promise<number> {
    const result = await db
      .delete(tableHolds)
      .where(sql`${tableHolds.expiresAt} < NOW()`);
    return 1; // Drizzle doesn't return count for delete
  }

  // Reviews - Use real database
  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db.insert(reviews).values(review).returning();
    return newReview;
  }

  async getRestaurantReviews(restaurantId: string): Promise<Review[]> {
    return db.select().from(reviews).where(eq(reviews.restaurantId, restaurantId));
  }

  async updateRestaurantRating(restaurantId: string): Promise<void> {
    // This would update the mock restaurant rating based on real reviews
    const reviews = await this.getRestaurantReviews(restaurantId);
    if (reviews.length > 0) {
      const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
      const restaurant = mockRestaurants.find(r => r.id === restaurantId);
      if (restaurant) {
        restaurant.ratingAvg = avgRating.toFixed(2);
        restaurant.ratingCount = reviews.length;
      }
    }
  }

  // Offers - Use mock data for now
  async getActiveOffers(restaurantId: string): Promise<Offer[]> {
    return [];
  }

  async getAvailableOffers(userId: string): Promise<Offer[]> {
    return [];
  }

  // Floor maps - Use real database
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

  // Manager operations - Use real database
  async isRestaurantManager(userId: string, restaurantId: string): Promise<boolean> {
    const [manager] = await db
      .select()
      .from(restaurantManagers)
      .where(
        and(
          eq(restaurantManagers.userId, userId),
          eq(restaurantManagers.restaurantId, restaurantId)
        )
      );
    return !!manager;
  }

  async getUserManagedRestaurants(userId: string): Promise<Restaurant[]> {
    const managerEntries = await db
      .select({ restaurantId: restaurantManagers.restaurantId })
      .from(restaurantManagers)
      .where(eq(restaurantManagers.userId, userId));
    
    const restaurantIds = managerEntries.map(m => m.restaurantId);
    return mockRestaurants.filter(r => restaurantIds.includes(r.id));
  }
}
