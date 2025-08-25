-- Migration: Remove chairs table and section field
-- This migration removes the unnecessary database structure that was added

-- Drop the chairs table
DROP TABLE IF EXISTS "chairs";

-- Remove the section column from tables if it exists
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'tables' AND column_name = 'section') THEN
    ALTER TABLE "tables" DROP COLUMN "section";
  END IF;
END $$;

-- Drop any indexes that were created for chairs
DROP INDEX IF EXISTS "IDX_chairs_table_id";
DROP INDEX IF EXISTS "IDX_chairs_position";
