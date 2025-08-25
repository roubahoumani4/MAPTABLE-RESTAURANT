import { sql } from 'drizzle-orm';
import { relations } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  integer,
  decimal,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Enums
export const userRoleEnum = pgEnum('user_role', ['USER', 'RESTAURANT_MANAGER', 'ADMIN']);
export const userTierEnum = pgEnum('user_tier', ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM']);

// User storage table.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  name: varchar("name").notNull(),
  phone: varchar("phone"),
  role: userRoleEnum("role").default("USER").notNull(),
  points: integer("points").default(0).notNull(),
  tier: userTierEnum("tier").default("BRONZE").notNull(),
  profileImageUrl: varchar("profile_image_url"),
  phoneVerified: boolean("phone_verified").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Restaurants
export const restaurants = pgTable("restaurants", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: varchar("name").notNull(),
  slug: varchar("slug").unique().notNull(),
  description: text("description"),
  address: text("address").notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  phone: varchar("phone"),
  whatsapp: varchar("whatsapp"),
  email: varchar("email"),
  website: varchar("website"),
  cuisines: jsonb("cuisines").$type<string[]>().default([]).notNull(),
  priceLevel: integer("price_level").default(2).notNull(), // 1-4 ($-$$$$)
  currency: varchar("currency").default("LBP").notNull(),
  images: jsonb("images").$type<string[]>().default([]).notNull(),
  ratingAvg: decimal("rating_avg", { precision: 3, scale: 2 }).default("0.00"),
  ratingCount: integer("rating_count").default(0).notNull(),
  openingHours: jsonb("opening_hours").$type<Record<string, { open: string; close: string; closed?: boolean }>>().default({}),
  ownerId: varchar("owner_id").references(() => users.id),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Restaurant managers
export const restaurantManagers = pgTable("restaurant_managers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  role: varchar("role").default("MANAGER").notNull(), // MANAGER, ADMIN
  createdAt: timestamp("created_at").defaultNow(),
});

// Floor maps
export const floorMaps = pgTable("floor_maps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  version: integer("version").default(1).notNull(),
  svgData: jsonb("svg_data").$type<any>().default({}).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Tables
export const tables = pgTable("tables", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  mapId: varchar("map_id").references(() => floorMaps.id),
  label: varchar("label").notNull(),
  capacity: integer("capacity").notNull(),
  zone: varchar("zone").default("Main").notNull(),
  smoking: boolean("smoking").default(false).notNull(),
  accessible: boolean("accessible").default(false).notNull(),
  minSpend: decimal("min_spend", { precision: 10, scale: 2 }).default("0.00"),
  x: decimal("x", { precision: 10, scale: 2 }).default("0.00"),
  y: decimal("y", { precision: 10, scale: 2 }).default("0.00"),
  shape: varchar("shape").default("rectangle").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Time slots (for managing availability)
export const timeSlots = pgTable("time_slots", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  date: varchar("date").notNull(), // YYYY-MM-DD
  startTime: varchar("start_time").notNull(), // HH:MM
  endTime: varchar("end_time").notNull(), // HH:MM
  capacityMeta: jsonb("capacity_meta").$type<any>().default({}).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Reservations
export const reservationStatusEnum = pgEnum("reservation_status", [
  "PENDING", "CONFIRMED", "SEATED", "COMPLETED", "CANCELLED", "NO_SHOW"
]);

export const reservations = pgTable("reservations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  tableId: varchar("table_id").references(() => tables.id).notNull(),
  date: varchar("date").notNull(), // YYYY-MM-DD
  startTime: varchar("start_time").notNull(), // HH:MM
  endTime: varchar("end_time").notNull(), // HH:MM
  partySize: integer("party_size").notNull(),
  status: reservationStatusEnum("status").default("PENDING").notNull(),
  specialRequests: text("special_requests"),
  confirmationCode: varchar("confirmation_code").unique().notNull(),
  qrCode: text("qr_code"),
  pointsEarned: integer("points_earned").default(0).notNull(),
  discountApplied: decimal("discount_applied", { precision: 5, scale: 2 }).default("0.00"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Table holds (temporary locks during booking)
export const tableHolds = pgTable("table_holds", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  tableId: varchar("table_id").references(() => tables.id).notNull(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  date: varchar("date").notNull(),
  startTime: varchar("start_time").notNull(),
  endTime: varchar("end_time").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Reviews
export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  reservationId: varchar("reservation_id").references(() => reservations.id),
  rating: integer("rating").notNull(), // 1-5
  title: varchar("title"),
  comment: text("comment"),
  photos: jsonb("photos").$type<string[]>().default([]).notNull(),
  isVisible: boolean("is_visible").default(true).notNull(),
  response: text("response"), // Restaurant response
  responseAt: timestamp("response_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Offers and discounts
export const offers = pgTable("offers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  restaurantId: varchar("restaurant_id").references(() => restaurants.id).notNull(),
  title: varchar("title").notNull(),
  description: text("description"),
  pointsRequired: integer("points_required").notNull(),
  discountType: varchar("discount_type").notNull(), // PERCENTAGE, FIXED
  discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
  validFrom: timestamp("valid_from").notNull(),
  validTo: timestamp("valid_to").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  maxRedemptions: integer("max_redemptions"),
  currentRedemptions: integer("current_redemptions").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Offer redemptions
export const redemptions = pgTable("redemptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  offerId: varchar("offer_id").references(() => offers.id).notNull(),
  reservationId: varchar("reservation_id").references(() => reservations.id),
  pointsUsed: integer("points_used").notNull(),
  discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }).notNull(),
  redeemedAt: timestamp("redeemed_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  reservations: many(reservations),
  reviews: many(reviews),
  managedRestaurants: many(restaurantManagers),
  redemptions: many(redemptions),
}));

export const restaurantsRelations = relations(restaurants, ({ one, many }) => ({
  owner: one(users, { fields: [restaurants.ownerId], references: [users.id] }),
  managers: many(restaurantManagers),
  tables: many(tables),
  reservations: many(reservations),
  reviews: many(reviews),
  offers: many(offers),
  floorMaps: many(floorMaps),
  timeSlots: many(timeSlots),
}));

export const tablesRelations = relations(tables, ({ one, many }) => ({
  restaurant: one(restaurants, { fields: [tables.restaurantId], references: [restaurants.id] }),
  reservations: many(reservations),
  holds: many(tableHolds),
}));

export const reservationsRelations = relations(reservations, ({ one, many }) => ({
  user: one(users, { fields: [reservations.userId], references: [users.id] }),
  restaurant: one(restaurants, { fields: [reservations.restaurantId], references: [restaurants.id] }),
  table: one(tables, { fields: [reservations.tableId], references: [tables.id] }),
  review: many(reviews),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertRestaurantSchema = createInsertSchema(restaurants).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTableSchema = createInsertSchema(tables).omit({
  id: true,
  createdAt: true,
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  confirmationCode: true,
  pointsEarned: true,
  createdAt: true,
  updatedAt: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
});

export const insertOfferSchema = createInsertSchema(offers).omit({
  id: true,
  currentRedemptions: true,
  createdAt: true,
});

// Types
export type UserRole = typeof userRoleEnum.enumValues[number];
export type UserTier = typeof userTierEnum.enumValues[number];
export type UpsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Restaurant = typeof restaurants.$inferSelect;
export type InsertRestaurant = z.infer<typeof insertRestaurantSchema>;
export type Table = typeof tables.$inferSelect;
export type InsertTable = z.infer<typeof insertTableSchema>;
export type Reservation = typeof reservations.$inferSelect;
export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Offer = typeof offers.$inferSelect;
export type InsertOffer = z.infer<typeof insertOfferSchema>;
export type FloorMap = typeof floorMaps.$inferSelect;
export type TableHold = typeof tableHolds.$inferSelect;
export type Redemption = typeof redemptions.$inferSelect;
