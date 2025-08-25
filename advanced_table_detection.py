#!/usr/bin/env python3
"""
Advanced Table Detection for Murray Restaurant Floor Map
Manually positions all 67 tables based on the floor plan layout
"""

import json
import os
from typing import List, Dict, Tuple
from dataclasses import dataclass
import math

@dataclass
class TableInfo:
    """Class representing a detected table"""
    id: str
    label: str
    capacity: int
    section: str
    zone: str
    shape: str
    x: float
    y: float
    centroid_x: float
    centroid_y: float
    rotation: float
    width: float
    height: float
    smoking: bool
    accessible: bool
    min_spend: float
    svg_path: str
    geometry: Dict
    is_active: bool

class AdvancedTableDetector:
    """Advanced table detector with manual positioning for Murray restaurant"""
    
    def __init__(self):
        self.tables: List[TableInfo] = []
        self.sections = {
            "section_1_4": {"name": "Main Dining (Sections 1-4)", "tables": []},
            "section_5_6": {"name": "Smoking Area (Sections 5-6)", "tables": []},
            "section_7": {"name": "Sea View (Section 7)", "tables": []}
        }
        
        # Base image dimensions (will be updated when image is loaded)
        self.image_width = 1200
        self.image_height = 800
        
    def set_image_dimensions(self, width: int, height: int):
        """Set the dimensions of the floor map image"""
        self.image_width = width
        self.image_height = height
        
    def create_table(self, table_num: int, x_percent: float, y_percent: float, 
                     capacity: int, shape: str, section: str, zone: str) -> TableInfo:
        """Create a table with calculated coordinates"""
        
        # Convert percentage coordinates to pixel coordinates
        x = x_percent * self.image_width / 100
        y = y_percent * self.image_height / 100
        
        # Set table dimensions based on capacity and shape
        if shape == "circle":
            if capacity <= 2:
                width = height = 60
            elif capacity <= 4:
                width = height = 80
            else:
                width = height = 100
        else:  # rectangle
            if capacity <= 2:
                width, height = 60, 48
            elif capacity <= 4:
                width, height = 80, 64
            else:
                width, height = 100, 80
        
        # Create SVG path
        if shape == "circle":
            radius = width / 2
            center_x = x + width / 2
            center_y = y + height / 2
            svg_path = f"M {center_x-radius},{center_y} A {radius},{radius} 0 1,1 {center_x+radius},{center_y} A {radius},{radius} 0 1,1 {center_x-radius},{center_y}"
        else:
            svg_path = f"M {x},{y} L {x+width},{y} L {x+width},{y+height} L {x},{y+height} Z"
        
        # Create geometry data
        if shape == "circle":
            geometry = {
                "type": "Circle",
                "center": [x + width/2, y + height/2],
                "radius": width / 2
            }
        else:
            geometry = {
                "type": "Polygon",
                "coordinates": [[
                    [x, y],
                    [x + width, y],
                    [x + width, y + height],
                    [x, y + height],
                    [x, y]
                ]]
            }
        
        # Determine section key
        section_key = None
        if "Main Dining" in section:
            section_key = "section_1_4"
        elif "Smoking" in section:
            section_key = "section_5_6"
        elif "Sea View" in section:
            section_key = "section_7"
        
        table = TableInfo(
            id=f"table-{table_num:03d}",
            label=str(table_num),
            capacity=capacity,
            section=section,
            zone=zone,
            shape=shape,
            x=x,
            y=y,
            centroid_x=x + width / 2,
            centroid_y=y + height / 2,
            rotation=0.0,
            width=width,
            height=height,
            smoking=section_key == "section_5_6",
            accessible=False,
            min_spend=0.0,
            svg_path=svg_path,
            geometry=geometry,
            is_active=True
        )
        
        if section_key:
            self.sections[section_key]["tables"].append(table)
        
        return table
    
    def detect_tables_manual(self) -> List[TableInfo]:
        """Manually define all 67 tables based on the floor plan layout"""
        
        # Section 1-4: Main Dining (Tables 1-43)
        # Top row - Tables 1-6
        for i in range(6):
            x_percent = 10 + i * 15  # 10%, 25%, 40%, 55%, 70%, 85%
            self.tables.append(self.create_table(
                i + 1, x_percent, 15, 2 if i % 2 == 0 else 4, 
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Second row - Tables 7-12
        for i in range(6):
            x_percent = 10 + i * 15
            self.tables.append(self.create_table(
                i + 7, x_percent, 25, 4 if i % 2 == 0 else 6,
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Third row - Tables 14-19
        for i in range(6):
            x_percent = 10 + i * 15
            self.tables.append(self.create_table(
                i + 14, x_percent, 35, 2 if i % 2 == 0 else 4,
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Fourth row - Tables 20-22
        for i in range(3):
            x_percent = 15 + i * 20
            self.tables.append(self.create_table(
                i + 20, x_percent, 45, 4,
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Right side - Tables 31-35 (vertical)
        for i in range(5):
            y_percent = 20 + i * 12
            self.tables.append(self.create_table(
                i + 31, 85, y_percent, 4,
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Center round tables - Tables 23-30
        for i in range(8):
            row = i // 4
            col = i % 4
            x_percent = 45 + col * 12
            y_percent = 50 + row * 15
            self.tables.append(self.create_table(
                i + 23, x_percent, y_percent, 6,
                "circle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Left side - Tables 36-43
        for i in range(8):
            row = i // 4
            col = i % 4
            x_percent = 5 + col * 12
            y_percent = 55 + row * 15
            capacity = 2 if i % 3 == 0 else 4
            self.tables.append(self.create_table(
                i + 36, x_percent, y_percent, capacity,
                "rectangle", "Main Dining (Sections 1-4)", "Main Dining"
            ))
        
        # Section 5-6: Smoking Area (Tables 44-55)
        # Smoking area round tables
        for i in range(12):
            row = i // 6
            col = i % 6
            x_percent = 50 + col * 8
            y_percent = 60 + row * 12
            capacity = 2 if i % 3 == 0 else 4
            self.tables.append(self.create_table(
                i + 44, x_percent, y_percent, capacity,
                "circle", "Smoking Area (Sections 5-6)", "Smoking Area"
            ))
        
        # Section 7: Sea View (Tables 56-67)
        # Sea view tables - bottom section
        for i in range(12):
            row = i // 6
            col = i % 6
            x_percent = 10 + col * 15
            y_percent = 75 + row * 15
            capacity = 2 if i % 2 == 0 else 4
            self.tables.append(self.create_table(
                i + 56, x_percent, y_percent, capacity,
                "rectangle", "Sea View (Section 7)", "Sea View"
            ))
        
        print(f"Successfully created {len(self.tables)} tables")
        return self.tables
    
    def generate_database_script(self, restaurant_id: str = "murrany-restaurant") -> str:
        """Generate SQL script to insert tables into database"""
        sql_lines = [
            "-- Advanced Table Detection Results for Murray Restaurant",
            f"-- Restaurant ID: {restaurant_id}",
            f"-- Total Tables: {len(self.tables)}",
            "",
            "-- Clear existing tables for this restaurant",
            f"DELETE FROM tables WHERE restaurant_id = '{restaurant_id}';",
            "",
            "-- Insert detected tables"
        ]
        
        for table in self.tables:
            sql_lines.append(f"""
INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    '{table.id}', '{restaurant_id}', '{table.label}', {table.capacity}, '{table.zone}', 
    {str(table.smoking).lower()}, {str(table.accessible).lower()}, {table.min_spend},
    {table.x:.2f}, {table.y:.2f}, '{table.shape}', {table.centroid_x:.2f}, {table.centroid_y:.2f}, 
    {table.rotation}, '{table.section}', '{table.svg_path}', 
    '{json.dumps(table.geometry)}', {str(table.is_active).lower()}
);""")
        
        return "\n".join(sql_lines)
    
    def save_detection_results(self, output_dir: str = "detection_results"):
        """Save detection results to files"""
        os.makedirs(output_dir, exist_ok=True)
        
        # Save table data as JSON
        tables_data = {
            "total_tables": len(self.tables),
            "sections": self.sections,
            "tables": [vars(table) for table in self.tables]
        }
        
        with open(f"{output_dir}/tables_detected.json", "w") as f:
            json.dump(tables_data, f, indent=2, default=str)
        
        # Save SQL script
        sql_script = self.generate_database_script()
        with open(f"{output_dir}/insert_tables.sql", "w") as f:
            f.write(sql_script)
        
        print(f"Results saved to {output_dir}/")
    
    def print_summary(self):
        """Print a summary of detected tables"""
        print("\n" + "="*60)
        print("ADVANCED TABLE DETECTION SUMMARY")
        print("="*60)
        
        for section_key, section in self.sections.items():
            print(f"\n{section['name']}: {len(section['tables'])} tables")
            for table in section['tables']:
                print(f"  - Table {table.label}: {table.capacity}p, {table.shape}, {table.zone}")
        
        print(f"\nTotal tables created: {len(self.tables)}")
        print("="*60)

def main():
    """Main function to run advanced table detection"""
    print("Advanced Table Detection for Murray Restaurant")
    print("Creating 67 tables with manual positioning...")
    
    # Create detector
    detector = AdvancedTableDetector()
    
    # Set image dimensions (adjust based on your actual image)
    detector.set_image_dimensions(1200, 800)
    
    # Detect tables
    tables = detector.detect_tables_manual()
    
    if tables:
        # Print summary
        detector.print_summary()
        
        # Save results
        detector.save_detection_results()
        
        print("\n✅ Table detection completed successfully!")
        print("📁 Results saved to 'detection_results/' directory")
        print("🗄️  Use 'insert_tables.sql' to populate your database")
    else:
        print("❌ No tables were created. Please check the detection logic.")

if __name__ == "__main__":
    main()
