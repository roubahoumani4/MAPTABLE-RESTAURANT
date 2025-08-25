-- Migration: Enhanced Tables Schema
-- Add new fields for better table mapping and geometry support

-- Add new columns to tables table
ALTER TABLE tables 
ADD COLUMN IF NOT EXISTS geometry JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS centroid_x DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS centroid_y DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS rotation DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS section VARCHAR,
ADD COLUMN IF NOT EXISTS source_map_hash VARCHAR;

-- Make capacity nullable (as per new requirements)
ALTER TABLE tables ALTER COLUMN capacity DROP NOT NULL;

-- Update existing tables to have geometry data
UPDATE tables 
SET 
  geometry = CASE 
    WHEN shape = 'circle' THEN '{"type": "circle", "radius": 20}'
    WHEN shape = 'square' THEN '{"type": "rectangle", "width": 40, "height": 40}'
    ELSE '{"type": "rectangle", "width": 50, "height": 40}'
  END,
  centroid_x = x + CASE 
    WHEN shape = 'circle' THEN 20
    WHEN shape = 'square' THEN 20
    ELSE 25
  END,
  centroid_y = y + CASE 
    WHEN shape = 'circle' THEN 20
    WHEN shape = 'square' THEN 20
    ELSE 20
  END,
  rotation = 0.00,
  section = zone,
  source_map_hash = 'initial_setup_v1'
WHERE restaurant_id = 'murrany-restaurant';

-- Create index on new fields for better performance
CREATE INDEX IF NOT EXISTS idx_tables_geometry ON tables USING GIN (geometry);
CREATE INDEX IF NOT EXISTS idx_tables_centroid ON tables (centroid_x, centroid_y);
CREATE INDEX IF NOT EXISTS idx_tables_section ON tables (section);
CREATE INDEX IF NOT EXISTS idx_tables_source_map ON tables (source_map_hash);
