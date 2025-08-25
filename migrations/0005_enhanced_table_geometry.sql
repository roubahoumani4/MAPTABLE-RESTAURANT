-- Migration: Enhanced Table Geometry for SVG Paths
-- Adds fields for precise table geometry extraction from floor maps

-- Add new columns to tables table
ALTER TABLE tables 
ADD COLUMN IF NOT EXISTS svg_path TEXT,
ADD COLUMN IF NOT EXISTS centroid_x DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS centroid_y DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS rotation DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS source_map_hash TEXT,
ADD COLUMN IF NOT EXISTS qa_notes TEXT;

-- Create index on source_map_hash for efficient lookups
CREATE INDEX IF NOT EXISTS idx_tables_source_map_hash ON tables(source_map_hash);

-- Create index on centroid coordinates for spatial queries
CREATE INDEX IF NOT EXISTS idx_tables_centroid ON tables(centroid_x, centroid_y);

-- Add comment to document the new fields
COMMENT ON COLUMN tables.svg_path IS 'SVG path string representing the exact table outline from the floor map';
COMMENT ON COLUMN tables.centroid_x IS 'X coordinate of table centroid in original map coordinate system';
COMMENT ON COLUMN tables.centroid_y IS 'Y coordinate of table centroid in original map coordinate system';
COMMENT ON COLUMN tables.rotation IS 'Rotation angle of table in degrees (0-360)';
COMMENT ON COLUMN tables.source_map_hash IS 'MD5 hash of the source floor map image for validation';
COMMENT ON COLUMN tables.qa_notes IS 'Quality assurance notes for table detection confidence';
