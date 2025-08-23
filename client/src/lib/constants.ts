export const LEBANESE_CITIES = [
  "Beirut",
  "Byblos", 
  "Jounieh",
  "Tripoli",
  "Sidon",
  "Tyre",
  "Baalbek",
  "Zahle",
  "Aley",
  "Anjar"
] as const;

export const CUISINE_TYPES = [
  "Lebanese",
  "Mediterranean", 
  "Middle Eastern",
  "Arabic",
  "French",
  "Italian",
  "Asian",
  "International",
  "Seafood",
  "Grill"
] as const;

export const PRICE_LEVELS = {
  1: { symbol: "$", description: "Budget" },
  2: { symbol: "$$", description: "Moderate" }, 
  3: { symbol: "$$$", description: "Upscale" },
  4: { symbol: "$$$$", description: "Fine Dining" }
} as const;

export const RESERVATION_STATUSES = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed", 
  SEATED: "Seated",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  NO_SHOW: "No Show"
} as const;

export const USER_TIERS = {
  BRONZE: { name: "Bronze", minPoints: 0, color: "bg-amber-600" },
  SILVER: { name: "Silver", minPoints: 1000, color: "bg-gray-400" },
  GOLD: { name: "Gold", minPoints: 3000, color: "bg-yellow-500" },
  PLATINUM: { name: "Platinum", minPoints: 5000, color: "bg-purple-600" }
} as const;

export const COLORS = {
  primary: {
    50: "hsl(180, 100%, 97%)",
    500: "hsl(180, 78%, 22%)", // #0F766E
    600: "hsl(180, 84%, 27%)", // #0D9488
    700: "hsl(180, 78%, 22%)" // #0F766E
  },
  accent: {
    500: "hsl(27, 96%, 42%)", // #D97706  
    600: "hsl(45, 93%, 47%)" // #F59E0B
  },
  sage: {
    500: "hsl(151, 83%, 34%)" // #10B981
  }
} as const;

export const BUSINESS_HOURS = {
  MONDAY: { open: "11:00", close: "23:00" },
  TUESDAY: { open: "11:00", close: "23:00" },
  WEDNESDAY: { open: "11:00", close: "23:00" },
  THURSDAY: { open: "11:00", close: "23:00" },
  FRIDAY: { open: "11:00", close: "24:00" },
  SATURDAY: { open: "11:00", close: "24:00" },
  SUNDAY: { open: "12:00", close: "23:00" }
} as const;

export const TIMEZONE = "Asia/Beirut";

export const CONTACT_INFO = {
  whatsapp: "+961 1 234 567",
  email: "support@tablemap.lb",
  address: "Beirut, Lebanon"
} as const;
