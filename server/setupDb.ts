import { db } from './db';
import { sql } from 'drizzle-orm';
// Mock data imports removed - no more mock restaurants
import { restaurants, floorMaps, tables, users } from '../shared/schema';
import { hashPassword } from './auth/utils';

async function setupDatabase() {
  try {
    console.log('Setting up database...');

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

    // Mock data insertion removed - no more mock restaurants
    
    console.log('Database setup completed successfully');
    console.log('\nTest Accounts:');
    console.log('Admin: admin@tablemap.com / admin123');
    console.log('User: test@example.com / test123');
    console.log('Manager: manager@restaurant.com / manager123');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();
