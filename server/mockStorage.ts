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

export class MockStorage {
  private users: Map<string, User> = new Map();
  private restaurants: Restaurant[] = mockRestaurants;
  private tables: Table[] = mockTables;
  private floorMaps: FloorMap[] = mockFloorMaps;
  private reservations: Reservation[] = [];
  private reviews: Review[] = [];
  private offers: Offer[] = [];
  private tableHolds: TableHold[] = [];

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const user: User = {
      id: userData.id || `user-${Date.now()}`,
      email: userData.email,
      name: userData.name,
      phone: userData.phone || null,
      role: userData.role || 'USER',
      points: userData.points || 0,
      tier: userData.tier || 'BRONZE',
      profileImageUrl: userData.profileImageUrl || null,
      phoneVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      password: userData.password || '',
    };
    this.users.set(user.id, user);
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
    let filtered = [...this.restaurants];

    if (filters?.query) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.description?.toLowerCase().includes(query) ||
        r.cuisines.some(c => c.toLowerCase().includes(query))
      );
    }

    if (filters?.cuisine) {
      filtered = filtered.filter(r => 
        r.cuisines.some(c => c.toLowerCase().includes(filters.cuisine!.toLowerCase()))
      );
    }

    if (filters?.priceLevel) {
      filtered = filtered.filter(r => r.priceLevel === filters.priceLevel);
    }

    if (filters?.ratingMin) {
      filtered = filtered.filter(r => parseFloat(r.ratingAvg || '0') >= filters.ratingMin!);
    }

    return filtered;
  }

  async getRestaurant(id: string): Promise<Restaurant | undefined> {
    return this.restaurants.find(r => r.id === id);
  }

  async getRestaurantBySlug(slug: string): Promise<Restaurant | undefined> {
    return this.restaurants.find(r => r.slug === slug);
  }

  async createRestaurant(restaurant: InsertRestaurant): Promise<Restaurant> {
    const newRestaurant: Restaurant = {
      ...restaurant,
      id: `rest-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.restaurants.push(newRestaurant);
    return newRestaurant;
  }

  // Table operations
  async getRestaurantTables(restaurantId: string): Promise<Table[]> {
    return this.tables.filter(t => t.restaurantId === restaurantId);
  }

  async getTable(id: string): Promise<Table | undefined> {
    return this.tables.find(t => t.id === id);
  }

  async createTable(table: InsertTable): Promise<Table> {
    const newTable: Table = {
      ...table,
      id: `table-${Date.now()}`,
      createdAt: new Date(),
    };
    this.tables.push(newTable);
    return newTable;
  }

  async updateTable(id: string, updates: Partial<InsertTable>): Promise<Table | undefined> {
    const index = this.tables.findIndex(t => t.id === id);
    if (index === -1) return undefined;
    
    this.tables[index] = { ...this.tables[index], ...updates };
    return this.tables[index];
  }

  async deleteTable(id: string): Promise<boolean> {
    const index = this.tables.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    this.tables.splice(index, 1);
    return true;
  }

  // Reservation operations
  async createReservation(reservation: InsertReservation): Promise<Reservation> {
    const newReservation: Reservation = {
      ...reservation,
      id: `res-${Date.now()}`,
      status: 'PENDING',
      confirmationCode: `CONF-${Date.now()}`,
      qrCode: `QR-${Date.now()}`,
      pointsEarned: 0,
      discountApplied: '0.00',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.reservations.push(newReservation);
    return newReservation;
  }

  async getReservation(id: string): Promise<Reservation | undefined> {
    return this.reservations.find(r => r.id === id);
  }

  async getUserReservations(userId: string): Promise<Reservation[]> {
    return this.reservations.filter(r => r.userId === userId);
  }

  async getRestaurantReservations(restaurantId: string, date?: string): Promise<Reservation[]> {
    return this.reservations.filter(r => r.restaurantId === restaurantId);
  }

  async updateReservationStatus(id: string, status: string): Promise<Reservation | undefined> {
    const reservation = this.reservations.find(r => r.id === id);
    if (!reservation) return undefined;
    
    reservation.status = status as any;
    reservation.updatedAt = new Date();
    return reservation;
  }

  async cancelReservation(id: string): Promise<boolean> {
    const index = this.reservations.findIndex(r => r.id === id);
    if (index === -1) return false;
    
    this.reservations[index].status = 'CANCELLED';
    this.reservations[index].updatedAt = new Date();
    return true;
  }

  // Table availability
  async checkTableAvailability(tableId: string, date: string, startTime: string, endTime: string): Promise<boolean> {
    // Mock implementation - always return true for local development
    return true;
  }

  async createTableHold(hold: Omit<TableHold, 'id' | 'createdAt'>): Promise<TableHold> {
    const newHold: TableHold = {
      ...hold,
      id: `hold-${Date.now()}`,
      createdAt: new Date(),
    };
    this.tableHolds.push(newHold);
    return newHold;
  }

  async releaseTableHold(id: string): Promise<boolean> {
    const index = this.tableHolds.findIndex(h => h.id === id);
    if (index === -1) return false;
    
    this.tableHolds.splice(index, 1);
    return true;
  }

  async releaseExpiredHolds(): Promise<number> {
    const now = new Date();
    const expired = this.tableHolds.filter(h => h.expiresAt < now);
    expired.forEach(h => this.tableHolds = this.tableHolds.filter(th => th.id !== h.id));
    return expired.length;
  }

  // Reviews
  async createReview(review: InsertReview): Promise<Review> {
    const newReview: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      photos: review.photos || [],
      isVisible: true,
      createdAt: new Date(),
    };
    this.reviews.push(newReview);
    return newReview;
  }

  async getRestaurantReviews(restaurantId: string): Promise<Review[]> {
    return this.reviews.filter(r => r.restaurantId === restaurantId);
  }

  async updateRestaurantRating(restaurantId: string): Promise<void> {
    // Mock implementation
  }

  // Offers
  async getActiveOffers(restaurantId: string): Promise<Offer[]> {
    return this.offers.filter(o => o.restaurantId === restaurantId && o.isActive);
  }

  async getAvailableOffers(userId: string): Promise<Offer[]> {
    const user = await this.getUser(userId);
    if (!user) return [];
    
    return this.offers.filter(o => o.isActive && o.pointsRequired <= user.points);
  }

  // Floor maps
  async getRestaurantFloorMap(restaurantId: string): Promise<FloorMap | undefined> {
    return this.floorMaps.find(fm => fm.restaurantId === restaurantId);
  }

  async saveFloorMap(restaurantId: string, svgData: any): Promise<FloorMap> {
    const newFloorMap: FloorMap = {
      id: `fm-${Date.now()}`,
      restaurantId,
      version: 1,
      svgData,
      isActive: true,
      createdAt: new Date(),
    };
    this.floorMaps.push(newFloorMap);
    return newFloorMap;
  }

  // Manager operations
  async isRestaurantManager(userId: string, restaurantId: string): Promise<boolean> {
    // Mock implementation - return true for local development
    return true;
  }

  async getUserManagedRestaurants(userId: string): Promise<Restaurant[]> {
    // Mock implementation - return all restaurants for local development
    return this.restaurants;
  }
}
