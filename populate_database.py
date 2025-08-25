#!/usr/bin/env python3
"""
Database Population Script for Murray Restaurant Tables
This script populates the database with all 67 tables
"""

import psycopg2
import os
import sys
from pathlib import Path

def connect_to_database():
    """Connect to the PostgreSQL database"""
    try:
        # Database connection parameters
        # You can modify these based on your database setup
        connection = psycopg2.connect(
            host="localhost",
            database="tablemap",
            user="postgres",
            password="postgres",  # Change this to your actual password
            port="5432"
        )
        print("✅ Successfully connected to database")
        return connection
    except Exception as e:
        print(f"❌ Error connecting to database: {e}")
        return None

def execute_sql_file(connection, sql_file_path):
    """Execute SQL commands from a file"""
    try:
        cursor = connection.cursor()
        
        # Read the SQL file
        with open(sql_file_path, 'r') as file:
            sql_content = file.read()
        
        # Execute the SQL
        cursor.execute(sql_content)
        connection.commit()
        
        print(f"✅ Successfully executed SQL file: {sql_file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error executing SQL file: {e}")
        connection.rollback()
        return False
    finally:
        if cursor:
            cursor.close()

def verify_tables(connection, restaurant_id="murrany-restaurant"):
    """Verify that tables were inserted correctly"""
    try:
        cursor = connection.cursor()
        
        # Count tables for the restaurant
        cursor.execute("""
            SELECT COUNT(*) FROM tables WHERE restaurant_id = %s
        """, (restaurant_id,))
        
        count = cursor.fetchone()[0]
        print(f"📊 Total tables in database for restaurant {restaurant_id}: {count}")
        
        # Show table distribution by section
        cursor.execute("""
            SELECT section, COUNT(*) as table_count 
            FROM tables 
            WHERE restaurant_id = %s 
            GROUP BY section
        """, (restaurant_id,))
        
        print("\n📋 Table distribution by section:")
        for section, table_count in cursor.fetchall():
            print(f"  - {section}: {table_count} tables")
        
        return True
        
    except Exception as e:
        print(f"❌ Error verifying tables: {e}")
        return False
    finally:
        if cursor:
            cursor.close()

def check_existing_restaurants(connection):
    """Check what restaurant IDs exist in the database"""
    try:
        cursor = connection.cursor()
        
        cursor.execute("SELECT DISTINCT restaurant_id FROM tables")
        restaurant_ids = cursor.fetchall()
        
        print("📋 Existing restaurant IDs in database:")
        for (restaurant_id,) in restaurant_ids:
            print(f"  - {restaurant_id}")
        
        return restaurant_ids
        
    except Exception as e:
        print(f"❌ Error checking restaurants: {e}")
        return []
    finally:
        if cursor:
            cursor.close()

def display_table_coordinates(connection, restaurant_id="murrany-restaurant"):
    """Display current table coordinates from database"""
    try:
        cursor = connection.cursor()
        
        cursor.execute("""
            SELECT label, x, y, section 
            FROM tables 
            WHERE restaurant_id = %s 
            ORDER BY label
        """, (restaurant_id,))
        
        tables = cursor.fetchall()
        
        print(f"\n📊 Current table coordinates in database:")
        print(f"{'Table':<6} {'X':<6} {'Y':<6} {'Section':<30}")
        print("-" * 50)
        
        for table in tables[:15]:  # Show first 15 tables
            label, x, y, section = table
            print(f"{label:<6} {x:<6} {y:<6} {section[:30]:<30}")
        
        if len(tables) > 15:
            print(f"... and {len(tables) - 15} more tables")
        
        return tables
        
    except Exception as e:
        print(f"❌ Error displaying coordinates: {e}")
        return []
    finally:
        if cursor:
            cursor.close()

def main():
    """Main function to populate database"""
    print("Database Population for Murray Restaurant Tables")
    print("=" * 50)
    
    # Connect to database
    connection = connect_to_database()
    if not connection:
        print("❌ Cannot proceed without database connection")
        return
    
    try:
        # Check existing restaurants first
        print("\n🔍 Checking existing restaurants...")
        existing_restaurants = check_existing_restaurants(connection)
        
        # Display current table coordinates
        print("\n🔍 Checking current table coordinates...")
        current_tables = display_table_coordinates(connection)
        
        # Path to the SQL file
        sql_file_path = "detection_results/insert_precise_tables.sql"
        
        if not os.path.exists(sql_file_path):
            print(f"❌ SQL file not found: {sql_file_path}")
            print("Please run the table creation script first")
            return
        
        print(f"\n📁 Using SQL file: {sql_file_path}")
        
        # Execute the SQL file
        if execute_sql_file(connection, sql_file_path):
            print("\n✅ Database population completed successfully!")
            
            # Verify the tables
            print("\n🔍 Verifying database population...")
            verify_tables(connection)
            
            # Display updated coordinates
            print("\n🔍 Updated table coordinates:")
            updated_tables = display_table_coordinates(connection)
            
            print("\n🎉 Your floor map is now ready to be interactive!")
            print("📱 The tables are now stored in the database and can be used by your React app")
            
        else:
            print("❌ Database population failed")
            
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
    finally:
        if connection:
            connection.close()
            print("\n🔌 Database connection closed")

if __name__ == "__main__":
    main()
