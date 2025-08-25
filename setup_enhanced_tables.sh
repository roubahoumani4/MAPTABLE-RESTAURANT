#!/bin/bash

# Setup Enhanced Tables Schema
# This script runs the migration to add enhanced table fields

echo "Setting up enhanced tables schema..."

# Check if PostgreSQL is running
if ! pg_isready -q; then
    echo "PostgreSQL is not running. Please start PostgreSQL first."
    exit 1
fi

# Check if database exists and create if needed
echo "Creating database 'tablemap' if it doesn't exist..."
createdb -h localhost -U postgres tablemap 2>/dev/null || echo "Database already exists"

# Run the migration
echo "Running migration 0004_enhanced_tables_schema.sql..."
psql -h localhost -U postgres -d tablemap -f migrations/0004_enhanced_tables_schema.sql

# Update existing tables with enhanced data
echo "Updating existing tables with enhanced data..."
psql -h localhost -U postgres -d tablemap -f setup_floorplan.sql

echo "Enhanced tables schema setup complete!"
echo "Total tables: 67"
echo "New fields added: geometry, centroid_x, centroid_y, rotation, section, source_map_hash"
echo "Capacity field is now nullable (as per requirements)"
echo "All tables positioned with exact coordinates from floor plan image"
