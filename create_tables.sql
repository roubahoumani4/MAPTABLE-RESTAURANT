-- Create enums first
CREATE TYPE user_role AS ENUM ('USER', 'RESTAURANT_MANAGER', 'ADMIN');
CREATE TYPE user_tier AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM');
CREATE TYPE reservation_status AS ENUM ('PENDING', 'CONFIRMED', 'SEATED', 'COMPLETED', 'CANCELLED', 'NO_SHOW');

-- Create sessions table
CREATE TABLE sessions (
    sid VARCHAR PRIMARY KEY,
    sess JSONB NOT NULL,
    expire TIMESTAMP NOT NULL
);

-- Create index on sessions
CREATE INDEX IDX_session_expire ON sessions(expire);

-- Create users table
CREATE TABLE users (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    phone VARCHAR,
    role user_role DEFAULT 'USER' NOT NULL,
    points INTEGER DEFAULT 0 NOT NULL,
    tier user_tier DEFAULT 'BRONZE' NOT NULL,
    profile_image_url VARCHAR,
    phone_verified BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create restaurants table
CREATE TABLE restaurants (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    slug VARCHAR UNIQUE NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    phone VARCHAR,
    whatsapp VARCHAR,
    email VARCHAR,
    website VARCHAR,
    cuisines JSONB DEFAULT '[]' NOT NULL,
    price_level INTEGER DEFAULT 2 NOT NULL,
    currency VARCHAR DEFAULT 'LBP' NOT NULL,
    images JSONB DEFAULT '[]' NOT NULL,
    rating_avg DECIMAL(3,2) DEFAULT '0.00',
    rating_count INTEGER DEFAULT 0 NOT NULL,
    opening_hours JSONB DEFAULT '{}',
    owner_id VARCHAR REFERENCES users(id),
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create restaurant_managers table
CREATE TABLE restaurant_managers (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    role VARCHAR DEFAULT 'MANAGER' NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create floor_maps table
CREATE TABLE floor_maps (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    version INTEGER DEFAULT 1 NOT NULL,
    svg_data JSONB DEFAULT '{}' NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create tables table
CREATE TABLE tables (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    map_id VARCHAR REFERENCES floor_maps(id),
    label VARCHAR NOT NULL,
    capacity INTEGER NOT NULL,
    zone VARCHAR DEFAULT 'Main' NOT NULL,
    smoking BOOLEAN DEFAULT FALSE NOT NULL,
    accessible BOOLEAN DEFAULT FALSE NOT NULL,
    min_spend DECIMAL(10,2) DEFAULT '0.00',
    x DECIMAL(10,2) DEFAULT '0.00',
    y DECIMAL(10,2) DEFAULT '0.00',
    shape VARCHAR DEFAULT 'rectangle' NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create time_slots table
CREATE TABLE time_slots (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    date VARCHAR NOT NULL,
    start_time VARCHAR NOT NULL,
    end_time VARCHAR NOT NULL,
    capacity_meta JSONB DEFAULT '{}' NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create reservations table
CREATE TABLE reservations (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    table_id VARCHAR REFERENCES tables(id) NOT NULL,
    date VARCHAR NOT NULL,
    start_time VARCHAR NOT NULL,
    end_time VARCHAR NOT NULL,
    party_size INTEGER NOT NULL,
    status reservation_status DEFAULT 'PENDING' NOT NULL,
    special_requests TEXT,
    confirmation_code VARCHAR UNIQUE NOT NULL,
    qr_code TEXT,
    points_earned INTEGER DEFAULT 0 NOT NULL,
    discount_applied DECIMAL(5,2) DEFAULT '0.00',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Create table_holds table
CREATE TABLE table_holds (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    table_id VARCHAR REFERENCES tables(id) NOT NULL,
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    date VARCHAR NOT NULL,
    start_time VARCHAR NOT NULL,
    end_time VARCHAR NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    reservation_id VARCHAR REFERENCES reservations(id),
    rating INTEGER NOT NULL,
    title VARCHAR,
    comment TEXT,
    photos JSONB DEFAULT '[]' NOT NULL,
    is_visible BOOLEAN DEFAULT TRUE NOT NULL,
    response TEXT,
    response_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create offers table
CREATE TABLE offers (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    restaurant_id VARCHAR REFERENCES restaurants(id) NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT,
    points_required INTEGER NOT NULL,
    discount_type VARCHAR NOT NULL,
    discount_value DECIMAL(10,2) NOT NULL,
    valid_from TIMESTAMP NOT NULL,
    valid_to TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    max_redemptions INTEGER,
    current_redemptions INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create redemptions table
CREATE TABLE redemptions (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR REFERENCES users(id) NOT NULL,
    offer_id VARCHAR REFERENCES offers(id) NOT NULL,
    reservation_id VARCHAR REFERENCES reservations(id),
    points_used INTEGER NOT NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    redeemed_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_restaurants_owner_id ON restaurants(owner_id);
CREATE INDEX idx_restaurant_managers_user_id ON restaurant_managers(user_id);
CREATE INDEX idx_restaurant_managers_restaurant_id ON restaurant_managers(restaurant_id);
CREATE INDEX idx_floor_maps_restaurant_id ON floor_maps(restaurant_id);
CREATE INDEX idx_tables_restaurant_id ON tables(restaurant_id);
CREATE INDEX idx_tables_map_id ON tables(map_id);
CREATE INDEX idx_time_slots_restaurant_id ON time_slots(restaurant_id);
CREATE INDEX idx_time_slots_date ON time_slots(date);
CREATE INDEX idx_reservations_user_id ON reservations(user_id);
CREATE INDEX idx_reservations_restaurant_id ON reservations(restaurant_id);
CREATE INDEX idx_reservations_table_id ON reservations(table_id);
CREATE INDEX idx_reservations_date ON reservations(date);
CREATE INDEX idx_table_holds_table_id ON table_holds(table_id);
CREATE INDEX idx_table_holds_expires_at ON table_holds(expires_at);
CREATE INDEX idx_reviews_restaurant_id ON reviews(restaurant_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_offers_restaurant_id ON offers(restaurant_id);
CREATE INDEX idx_offers_valid_from ON offers(valid_from);
CREATE INDEX idx_offers_valid_to ON offers(valid_to);
CREATE INDEX idx_redemptions_user_id ON redemptions(user_id);
CREATE INDEX idx_redemptions_offer_id ON redemptions(offer_id);

-- Insert admin user
INSERT INTO users (id, email, password, name, role)
VALUES (
    'admin',
    'admin@tablemap.com',
    '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u', -- password: admin123
    'Admin User',
    'ADMIN'
) ON CONFLICT (id) DO NOTHING;

-- Create a function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_restaurants_updated_at BEFORE UPDATE ON restaurants
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reservations_updated_at BEFORE UPDATE ON reservations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add unique constraint on email (if not already present)
ALTER TABLE users ADD CONSTRAINT users_email_unique UNIQUE (email);
