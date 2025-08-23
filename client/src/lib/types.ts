export interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profileImageUrl?: string;
  role: "USER" | "RESTAURANT_MANAGER" | "ADMIN";
  points: number;
  tier: "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";
  createdAt?: string;
  updatedAt?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description?: string;
  address: string;
  latitude?: string;
  longitude?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  cuisines: string[];
  priceLevel: number;
  currency: string;
  images: string[];
  ratingAvg: string;
  ratingCount: number;
  openingHours: Record<string, { open: string; close: string; closed?: boolean }>;
  ownerId?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Table {
  id: string;
  restaurantId: string;
  mapId?: string;
  label: string;
  capacity: number;
  zone: string;
  smoking: boolean;
  accessible: boolean;
  minSpend: string;
  x: string;
  y: string;
  shape: string;
  isActive: boolean;
  createdAt?: string;
}

export interface Reservation {
  id: string;
  userId: string;
  restaurantId: string;
  tableId: string;
  date: string;
  startTime: string;
  endTime: string;
  partySize: number;
  status: "PENDING" | "CONFIRMED" | "SEATED" | "COMPLETED" | "CANCELLED" | "NO_SHOW";
  specialRequests?: string;
  confirmationCode: string;
  qrCode?: string;
  pointsEarned: number;
  discountApplied: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  reservationId?: string;
  rating: number;
  title?: string;
  comment?: string;
  photos: string[];
  isVisible: boolean;
  response?: string;
  responseAt?: string;
  createdAt?: string;
}

export interface Offer {
  id: string;
  restaurantId: string;
  title: string;
  description?: string;
  pointsRequired: number;
  discountType: "PERCENTAGE" | "FIXED";
  discountValue: string;
  validFrom: string;
  validTo: string;
  isActive: boolean;
  maxRedemptions?: number;
  currentRedemptions: number;
  createdAt?: string;
}

export interface FloorMap {
  id: string;
  restaurantId: string;
  version: number;
  svgData: any;
  isActive: boolean;
  createdAt?: string;
}

export interface TableHold {
  id: string;
  tableId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  expiresAt: string;
  createdAt?: string;
}

export interface SearchFilters {
  query?: string;
  cuisine?: string;
  priceLevel?: number;
  ratingMin?: number;
  location?: string;
}

export interface BookingData {
  date: string;
  startTime: string;
  endTime: string;
  partySize: number;
  specialRequests?: string;
  useDiscount?: boolean;
}

export interface ApiError {
  message: string;
  errors?: any[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
