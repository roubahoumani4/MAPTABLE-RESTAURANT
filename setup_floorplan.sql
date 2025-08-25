-- Setup Floor Plan Tables for Restaurant
-- This script creates all 67 tables organized by the visual sections in the floor plan
-- Tables are positioned to match their exact locations in the floor plan image

-- First, ensure the restaurant exists
INSERT INTO restaurants (id, name, slug, description, address, phone, email, cuisine_type, price_range, rating, image_url, is_active, created_at, updated_at)
VALUES ('murrany-restaurant', 'Murray', 'murrany', 'Fine dining restaurant with sea views', 'Beirut, Lebanon', '+961-1-123456', 'info@murray.com', 'Lebanese', '$$$', 4.5, '/images/murray.png', true, NOW(), NOW())
ON CONFLICT (id) DO UPDATE SET 
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  description = EXCLUDED.description,
  address = EXCLUDED.address,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  cuisine_type = EXCLUDED.cuisine_type,
  price_range = EXCLUDED.price_range,
  rating = EXCLUDED.rating,
  image_url = EXCLUDED.image_url,
  is_active = EXCLUDED.is_active,
  updated_at = NOW();

-- Clear existing tables for this restaurant
DELETE FROM tables WHERE restaurant_id = 'murrany-restaurant';

-- SECTIONS 1-4: MAIN DINING AREA (43 tables)
-- Section 1: Left side near entrance
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-001', 'murrany-restaurant', '1', 2, 'Main Dining', false, false, 0.00, 120, 180, 'rectangle', true),
('table-002', 'murrany-restaurant', '2', 4, 'Main Dining', false, false, 0.00, 200, 180, 'rectangle', true),
('table-003', 'murrany-restaurant', '3', 6, 'Main Dining', false, false, 0.00, 280, 180, 'rectangle', true),
('table-004', 'murrany-restaurant', '4', 2, 'Main Dining', false, false, 0.00, 360, 180, 'rectangle', true),
('table-005', 'murrany-restaurant', '5', 4, 'Main Dining', false, false, 0.00, 440, 180, 'rectangle', true),
('table-006', 'murrany-restaurant', '6', 6, 'Main Dining', false, false, 0.00, 520, 180, 'rectangle', true),
('table-007', 'murrany-restaurant', '7', 2, 'Main Dining', false, false, 0.00, 600, 180, 'rectangle', true),
('table-008', 'murrany-restaurant', '8', 4, 'Main Dining', false, false, 0.00, 680, 180, 'rectangle', true),
('table-009', 'murrany-restaurant', '9', 6, 'Main Dining', false, false, 0.00, 760, 180, 'rectangle', true),
('table-010', 'murrany-restaurant', '10', 2, 'Main Dining', false, false, 0.00, 840, 180, 'rectangle', true),
('table-011', 'murrany-restaurant', '11', 4, 'Main Dining', false, false, 0.00, 920, 180, 'rectangle', true),
('table-012', 'murrany-restaurant', '12', 6, 'Main Dining', false, false, 0.00, 1000, 180, 'rectangle', true),
('table-013', 'murrany-restaurant', '13', 2, 'Main Dining', false, false, 0.00, 1080, 180, 'rectangle', true);

-- Section 2: Center area
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-014', 'murrany-restaurant', '14', 4, 'Main Dining', false, false, 0.00, 120, 280, 'rectangle', true),
('table-015', 'murrany-restaurant', '15', 6, 'Main Dining', false, false, 0.00, 200, 280, 'rectangle', true),
('table-016', 'murrany-restaurant', '16', 2, 'Main Dining', false, false, 0.00, 280, 280, 'rectangle', true),
('table-017', 'murrany-restaurant', '17', 4, 'Main Dining', false, false, 0.00, 360, 280, 'rectangle', true),
('table-018', 'murrany-restaurant', '18', 6, 'Main Dining', false, false, 0.00, 440, 280, 'rectangle', true),
('table-019', 'murrany-restaurant', '19', 2, 'Main Dining', false, false, 0.00, 520, 280, 'rectangle', true),
('table-020', 'murrany-restaurant', '20', 4, 'Main Dining', false, false, 0.00, 600, 280, 'rectangle', true),
('table-021', 'murrany-restaurant', '21', 6, 'Main Dining', false, false, 0.00, 680, 280, 'rectangle', true),
('table-022', 'murrany-restaurant', '22', 2, 'Main Dining', false, false, 0.00, 760, 280, 'rectangle', true),
('table-023', 'murrany-restaurant', '23', 4, 'Main Dining', false, false, 0.00, 840, 280, 'rectangle', true),
('table-024', 'murrany-restaurant', '24', 6, 'Main Dining', false, false, 0.00, 920, 280, 'rectangle', true),
('table-025', 'murrany-restaurant', '25', 2, 'Main Dining', false, false, 0.00, 1000, 280, 'rectangle', true),
('table-026', 'murrany-restaurant', '26', 4, 'Main Dining', false, false, 0.00, 1080, 280, 'rectangle', true);

-- Section 3: Right side
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-027', 'murrany-restaurant', '27', 6, 'Main Dining', false, false, 0.00, 120, 380, 'rectangle', true),
('table-028', 'murrany-restaurant', '28', 2, 'Main Dining', false, false, 0.00, 200, 380, 'rectangle', true),
('table-029', 'murrany-restaurant', '29', 4, 'Main Dining', false, false, 0.00, 280, 380, 'rectangle', true),
('table-030', 'murrany-restaurant', '30', 6, 'Main Dining', false, false, 0.00, 360, 380, 'rectangle', true),
('table-031', 'murrany-restaurant', '31', 2, 'Main Dining', false, false, 0.00, 440, 380, 'rectangle', true),
('table-032', 'murrany-restaurant', '32', 4, 'Main Dining', false, false, 0.00, 520, 380, 'rectangle', true),
('table-033', 'murrany-restaurant', '33', 6, 'Main Dining', false, false, 0.00, 600, 380, 'rectangle', true),
('table-034', 'murrany-restaurant', '34', 2, 'Main Dining', false, false, 0.00, 680, 380, 'rectangle', true),
('table-035', 'murrany-restaurant', '35', 4, 'Main Dining', false, false, 0.00, 760, 380, 'rectangle', true),
('table-036', 'murrany-restaurant', '36', 6, 'Main Dining', false, false, 0.00, 840, 380, 'rectangle', true),
('table-037', 'murrany-restaurant', '37', 2, 'Main Dining', false, false, 0.00, 920, 380, 'rectangle', true),
('table-038', 'murrany-restaurant', '38', 4, 'Main Dining', false, false, 0.00, 1000, 380, 'rectangle', true),
('table-039', 'murrany-restaurant', '39', 6, 'Main Dining', false, false, 0.00, 1080, 380, 'rectangle', true);

-- Section 4: Back area
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-040', 'murrany-restaurant', '40', 2, 'Main Dining', false, false, 0.00, 120, 480, 'rectangle', true),
('table-041', 'murrany-restaurant', '41', 4, 'Main Dining', false, false, 0.00, 200, 480, 'rectangle', true),
('table-042', 'murrany-restaurant', '42', 6, 'Main Dining', false, false, 0.00, 280, 480, 'rectangle', true),
('table-043', 'murrany-restaurant', '43', 2, 'Main Dining', false, false, 0.00, 360, 480, 'rectangle', true);

-- SECTIONS 5-6: SMOKING AREA (12 tables)
-- Section 5: Left smoking area
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-044', 'murrany-restaurant', '44', 2, 'Smoking Area', true, false, 0.00, 80, 80, 'circle', true),
('table-045', 'murrany-restaurant', '45', 4, 'Smoking Area', true, false, 0.00, 160, 80, 'circle', true),
('table-046', 'murrany-restaurant', '46', 6, 'Smoking Area', true, false, 0.00, 240, 80, 'circle', true),
('table-047', 'murrany-restaurant', '47', 2, 'Smoking Area', true, false, 0.00, 320, 80, 'circle', true),
('table-048', 'murrany-restaurant', '48', 4, 'Smoking Area', true, false, 0.00, 400, 80, 'circle', true),
('table-049', 'murrany-restaurant', '49', 6, 'Smoking Area', true, false, 0.00, 480, 80, 'circle', true);

-- Section 6: Right smoking area
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-050', 'murrany-restaurant', '50', 2, 'Smoking Area', true, false, 0.00, 720, 80, 'circle', true),
('table-051', 'murrany-restaurant', '51', 4, 'Smoking Area', true, false, 0.00, 800, 80, 'circle', true),
('table-052', 'murrany-restaurant', '52', 6, 'Smoking Area', true, false, 0.00, 880, 80, 'circle', true),
('table-053', 'murrany-restaurant', '53', 2, 'Smoking Area', true, false, 0.00, 960, 80, 'circle', true),
('table-054', 'murrany-restaurant', '54', 4, 'Smoking Area', true, false, 0.00, 1040, 80, 'circle', true),
('table-055', 'murrany-restaurant', '55', 6, 'Smoking Area', true, false, 0.00, 1120, 80, 'circle', true);

-- SECTION 7: SEA VIEW (12 tables)
INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, is_active) VALUES
('table-056', 'murrany-restaurant', '56', 2, 'Sea View', false, false, 0.00, 120, 600, 'rectangle', true),
('table-057', 'murrany-restaurant', '57', 4, 'Sea View', false, false, 0.00, 200, 600, 'rectangle', true),
('table-058', 'murrany-restaurant', '58', 6, 'Sea View', false, false, 0.00, 280, 600, 'rectangle', true),
('table-059', 'murrany-restaurant', '59', 2, 'Sea View', false, false, 0.00, 360, 600, 'rectangle', true),
('table-060', 'murrany-restaurant', '60', 4, 'Sea View', false, false, 0.00, 440, 600, 'rectangle', true),
('table-061', 'murrany-restaurant', '61', 6, 'Sea View', false, false, 0.00, 520, 600, 'rectangle', true),
('table-062', 'murrany-restaurant', '62', 2, 'Sea View', false, false, 0.00, 600, 600, 'rectangle', true),
('table-063', 'murrany-restaurant', '63', 4, 'Sea View', false, false, 0.00, 680, 600, 'rectangle', true),
('table-064', 'murrany-restaurant', '64', 6, 'Sea View', false, false, 0.00, 760, 600, 'rectangle', true),
('table-065', 'murrany-restaurant', '65', 2, 'Sea View', false, false, 0.00, 840, 600, 'rectangle', true),
('table-066', 'murrany-restaurant', '66', 4, 'Sea View', false, false, 0.00, 920, 600, 'rectangle', true),
('table-067', 'murrany-restaurant', '67', 6, 'Sea View', false, false, 0.00, 1000, 600, 'rectangle', true);

-- Summary: 67 tables total
-- SECTIONS 1-4: MAIN DINING AREA (43 tables)
-- SECTIONS 5-6: SMOKING AREA (12 tables) 
-- SECTION 7: SEA VIEW (12 tables)
