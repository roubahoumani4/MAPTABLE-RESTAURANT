#!/usr/bin/env python3
"""
Database Population Script for Clickable Table Points
This script populates the database with clickable points at real table locations
"""

import psycopg2
import os
import sys
from pathlib import Path

def connect_to_database():
    """Connect to the PostgreSQL database"""
    try:
        # Database connection parameters
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
    """Verify that clickable points were inserted correctly"""
    try:
        cursor = connection.cursor()
        
        # Count tables for the restaurant
        cursor.execute("""
            SELECT COUNT(*) FROM tables WHERE restaurant_id = %s
        """, (restaurant_id,))
        
        count = cursor.fetchone()[0]
        print(f"📊 Total clickable points in database for restaurant {restaurant_id}: {count}")
        
        # Show table distribution by section
        cursor.execute("""
            SELECT section, COUNT(*) as table_count 
            FROM tables 
            WHERE restaurant_id = %s 
            GROUP BY section
        """, (restaurant_id,))
        
        print("\n📋 Clickable points distribution by section:")
        for section, table_count in cursor.fetchall():
            print(f"  - {section}: {table_count} points")
        
        return True
        
    except Exception as e:
        print(f"❌ Error verifying tables: {e}")
        return False
    finally:
        if cursor:
            cursor.close()

def main():
    """Main function to populate database with clickable points"""
    print("Database Population for Clickable Table Points")
    print("=" * 50)
    
    # Connect to database
    connection = connect_to_database()
    if not connection:
        print("❌ Cannot proceed without database connection")
        return
    
    try:
        # Path to the SQL file
        sql_file_path = "detection_results/insert_clickable_points.sql"
        
        if not os.path.exists(sql_file_path):
            print(f"❌ SQL file not found: {sql_file_path}")
            print("Please run the table detection script first")
            return
        
        print(f"📁 Using SQL file: {sql_file_path}")
        
        # Execute the SQL file
        if execute_sql_file(connection, sql_file_path):
            print("\n✅ Database population with clickable points completed successfully!")
            
            # Verify the tables
            print("\n🔍 Verifying database population...")
            verify_tables(connection)
            
            print("\n🎉 Your floor map now has clickable points at real table locations!")
            print("📱 Users can click on these points to interact with the actual tables!")
            
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
