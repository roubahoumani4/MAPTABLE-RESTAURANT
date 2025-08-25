import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm';
import { mockRestaurants, mockFloorMaps, mockTables } from './mockData';
import * as schema from '../shared/schema';
import { restaurants, floorMaps, tables, users } from '../shared/schema';
import { hashPassword } from './auth/utils';

// Direct connection to local PostgreSQL
const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@127.0.0.1:5432/tablemap'
});

const db = drizzle(pool, { schema });

async function setupLocalDatabase() {
  try {
    console.log('Setting up local PostgreSQL database...');

    // Test connection
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL database');

    // Create enums
    await db.execute(sql`
      DO $$ BEGIN
        CREATE TYPE user_role AS ENUM ('USER', 'RESTAURANT_MANAGER', 'ADMIN');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;

      DO $$ BEGIN
        CREATE TYPE user_tier AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;

      DO $$ BEGIN
        CREATE TYPE reservation_status AS ENUM ('PENDING', 'CONFIRMED', 'SEATED', 'COMPLETED', 'CANCELLED', 'NO_SHOW');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    console.log('Enums created successfully');

    // Create admin user
    const adminPassword = await hashPassword('admin123');
    await db.execute(sql`
      INSERT INTO users (id, email, password, name, role, tier, points)
      VALUES (
        'admin',
        'admin@tablemap.com',
        ${adminPassword},
        'Admin User',
        'ADMIN',
        'PLATINUM',
        1000
      )
      ON CONFLICT (id) DO UPDATE SET
        password = EXCLUDED.password,
        name = EXCLUDED.name,
        role = EXCLUDED.role,
        tier = EXCLUDED.tier,
        points = EXCLUDED.points;
    `);

    console.log('Admin user created/updated');

    // Create a test user
    const testPassword = await hashPassword('test123');
    await db.execute(sql`
      INSERT INTO users (id, email, password, name, role, tier, points)
      VALUES (
        'test-user',
        'test@example.com',
        ${testPassword},
        'Test User',
        'USER',
        'SILVER',
        250
      )
      ON CONFLICT (id) DO UPDATE SET
        password = EXCLUDED.password,
        name = EXCLUDED.name,
        role = EXCLUDED.role,
        tier = EXCLUDED.tier,
        points = EXCLUDED.points;
    `);

    console.log('Test user created/updated');

    // Create a restaurant manager
    const managerPassword = await hashPassword('manager123');
    await db.execute(sql`
      INSERT INTO users (id, email, password, name, role, tier, points)
      VALUES (
        'restaurant-manager',
        'manager@restaurant.com',
        ${managerPassword},
        'Restaurant Manager',
        'RESTAURANT_MANAGER',
        'GOLD',
        500
      )
      ON CONFLICT (id) DO UPDATE SET
        password = EXCLUDED.password,
        name = EXCLUDED.name,
        role = EXCLUDED.role,
        tier = EXCLUDED.tier,
        points = EXCLUDED.points;
    `);

    console.log('Restaurant manager created/updated');

    // Insert mock data
    try {
      await db.insert(restaurants).values(mockRestaurants);
      console.log('Mock restaurants added');
    } catch (error) {
      console.log('Restaurants already exist or error occurred:', error);
    }

    try {
      await db.insert(floorMaps).values(mockFloorMaps);
      console.log('Mock floor maps added');
    } catch (error) {
      console.log('Floor maps already exist or error occurred:', error);
    }

    try {
      await db.insert(tables).values(mockTables);
      console.log('Mock tables added');
    } catch (error) {
      console.log('Tables already exist or error occurred:', error);
    }

    console.log('Database setup completed successfully');
    console.log('\nTest Accounts:');
    console.log('Admin: admin@tablemap.com / admin123');
    console.log('User: test@example.com / test123');
    console.log('Manager: manager@restaurant.com / manager123');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupLocalDatabase();
