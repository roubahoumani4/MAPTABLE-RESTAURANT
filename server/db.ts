import { Pool as PgPool } from 'pg';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import { Pool as NeonPool, neonConfig } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Always require DATABASE_URL for database operations
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Please create a .env.local file with your database configuration.",
  );
}

let db: ReturnType<typeof drizzlePg> | ReturnType<typeof drizzleNeon>;

if (process.env.NODE_ENV === 'development') {
  // Use local PostgreSQL in development
  const pool = new PgPool({ connectionString: process.env.DATABASE_URL });
  db = drizzlePg(pool, { schema });
  
  // Test connection
  pool.query('SELECT NOW()', (err) => {
    if (err) {
      console.error('❌ Database connection failed:', err.message);
      console.error('Please make sure PostgreSQL is running and DATABASE_URL is correct');
    } else {
      console.log('✅ Connected to PostgreSQL database');
    }
  });
} else {
  // Use Neon in production
  neonConfig.webSocketConstructor = ws;
  const pool = new NeonPool({ connectionString: process.env.DATABASE_URL });
  db = drizzleNeon({ client: pool, schema });
}

export { db };