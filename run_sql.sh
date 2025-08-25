#!/bin/bash

# Script to populate database with Murray restaurant tables
echo "Populating database with Murray restaurant tables..."

# Check if SQL file exists
if [ ! -f "detection_results/insert_all_67_tables.sql" ]; then
    echo "❌ SQL file not found. Please run the table creation script first."
    exit 1
fi

# Run the SQL file
echo "📁 Executing SQL file: detection_results/insert_all_67_tables.sql"
psql -U postgres -d tablemap -f detection_results/insert_all_67_tables.sql

if [ $? -eq 0 ]; then
    echo "✅ Database population completed successfully!"
    echo "🎉 Your floor map is now ready to be interactive!"
else
    echo "❌ Database population failed"
    exit 1
fi
