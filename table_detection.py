#!/usr/bin/env python3
"""
Table Detection Script for Restaurant Floor Map
Detects all 67 tables and classifies them into 3 sections
"""

import cv2
import numpy as np
import json
import os
from typing import List, Dict, Tuple, Optional
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

class TableDetector:
    """Main class for detecting tables from floor map image"""
    
    def __init__(self, image_path: str):
        self.image_path = image_path
        self.image = None
        self.gray = None
        self.tables: List[TableInfo] = []
        self.sections = {
            "section_1_4": {"name": "Main Dining (Sections 1-4)", "tables": []},
            "section_5_6": {"name": "Smoking Area (Sections 5-6)", "tables": []},
            "section_7": {"name": "Sea View (Section 7)", "tables": []}
        }
        
    def load_image(self) -> bool:
        """Load and preprocess the floor map image"""
        try:
            self.image = cv2.imread(self.image_path)
            if self.image is None:
                print(f"Error: Could not load image from {self.image_path}")
                return False
                
            self.gray = cv2.cvtColor(self.image, cv2.COLOR_BGR2GRAY)
            print(f"Image loaded successfully: {self.image.shape}")
            return True
        except Exception as e:
            print(f"Error loading image: {e}")
            return False
    
    def detect_table_regions(self) -> List[Tuple[int, int, int, int]]:
        """Detect potential table regions using contour detection"""
        # Apply Gaussian blur to reduce noise
        blurred = cv2.GaussianBlur(self.gray, (5, 5), 0)
        
        # Use adaptive thresholding to handle varying lighting
        thresh = cv2.adaptiveThreshold(
            blurred, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 2
        )
        
        # Morphological operations to clean up the image
        kernel = np.ones((3, 3), np.uint8)
        thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
        thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
        
        # Find contours
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        # Filter contours based on area and aspect ratio
        table_regions = []
        min_area = 500  # Minimum area for a table
        max_area = 50000  # Maximum area for a table
        
        for contour in contours:
            area = cv2.contourArea(contour)
            if min_area < area < max_area:
                x, y, w, h = cv2.boundingRect(contour)
                aspect_ratio = w / h
                
                # Filter by aspect ratio (tables should be roughly rectangular)
                if 0.5 < aspect_ratio < 2.0:
                    table_regions.append((x, y, w, h))
        
        print(f"Detected {len(table_regions)} potential table regions")
        return table_regions
    
    def classify_table_section(self, x: float, y: float, width: int, height: int) -> str:
        """Classify table into one of the three sections based on position"""
        img_height, img_width = self.image.shape[:2]
        
        # Normalize coordinates to 0-1 range
        norm_x = x / img_width
        norm_y = y / img_height
        
        # Section classification based on position
        if norm_y < 0.6:  # Upper 60% of image
            if norm_x < 0.7:  # Left 70% of image
                return "section_1_4"  # Main Dining (Sections 1-4)
            else:
                return "section_5_6"  # Smoking Area (Sections 5-6)
        else:
            return "section_7"  # Sea View (Section 7)
    
    def determine_table_capacity(self, width: int, height: int, shape: str) -> int:
        """Determine table capacity based on size and shape"""
        area = width * height
        
        if shape == "circle":
            if area < 2000:
                return 2
            elif area < 4000:
                return 4
            else:
                return 6
        else:  # rectangle/square
            if area < 3000:
                return 2
            elif area < 6000:
                return 4
            else:
                return 6
    
    def determine_table_shape(self, width: int, height: int) -> str:
        """Determine if table is circular or rectangular"""
        aspect_ratio = width / height
        if 0.8 < aspect_ratio < 1.2:
            return "circle"  # Square tables are treated as circles for simplicity
        else:
            return "rectangle"
    
    def create_svg_path(self, x: int, y: int, width: int, height: int, shape: str) -> str:
        """Create SVG path for the table"""
        if shape == "circle":
            radius = min(width, height) / 2
            center_x = x + width / 2
            center_y = y + height / 2
            return f"M {center_x-radius},{center_y} A {radius},{radius} 0 1,1 {center_x+radius},{center_y} A {radius},{radius} 0 1,1 {center_x-radius},{center_y}"
        else:
            return f"M {x},{y} L {x+width},{y} L {x+width},{y+height} L {x},{y+height} Z"
    
    def detect_tables(self) -> List[TableInfo]:
        """Main method to detect all tables"""
        if not self.load_image():
            return []
        
        # Detect table regions
        table_regions = self.detect_table_regions()
        
        # Sort regions by position (top to bottom, left to right)
        table_regions.sort(key=lambda r: (r[1], r[0]))
        
        # Create table objects
        for i, (x, y, w, h) in enumerate(table_regions):
            # Determine table properties
            shape = self.determine_table_shape(w, h)
            capacity = self.determine_table_capacity(w, h, shape)
            section_key = self.classify_table_section(x, y, w, h)
            section_name = self.sections[section_key]["name"]
            
            # Create table info
            table = TableInfo(
                id=f"table-{i+1:03d}",
                label=str(i + 1),
                capacity=capacity,
                section=section_name,
                zone=section_name,
                shape=shape,
                x=float(x),
                y=float(y),
                centroid_x=float(x + w / 2),
                centroid_y=float(y + h / 2),
                rotation=0.0,
                width=float(w),
                height=float(h),
                smoking=section_key == "section_5_6",  # Smoking area
                accessible=False,  # Default to False
                min_spend=0.0,
                svg_path=self.create_svg_path(x, y, w, h, shape),
                geometry={
                    "type": "Polygon",
                    "coordinates": [[
                        [x, y],
                        [x + w, y],
                        [x + w, y + h],
                        [x, y + h],
                        [x, y]
                    ]] if shape == "rectangle" else {
                        "type": "Circle",
                        "center": [x + w/2, y + h/2],
                        "radius": min(w, h) / 2
                    }
                },
                is_active=True
            )
            
            self.tables.append(table)
            self.sections[section_key]["tables"].append(table)
        
        print(f"Successfully detected {len(self.tables)} tables")
        return self.tables
    
    def generate_database_script(self, restaurant_id: str = "murrany-restaurant") -> str:
        """Generate SQL script to insert tables into database"""
        sql_lines = [
            "-- Table Detection Results",
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
    {table.x}, {table.y}, '{table.shape}', {table.centroid_x}, {table.centroid_y}, 
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
        
        # Save visualization image
        self.save_visualization(f"{output_dir}/detection_visualization.png")
        
        print(f"Results saved to {output_dir}/")
    
    def save_visualization(self, output_path: str):
        """Save visualization of detected tables"""
        vis_image = self.image.copy()
        
        # Draw detected tables with different colors for each section
        colors = {
            "section_1_4": (0, 255, 0),    # Green
            "section_5_6": (255, 0, 0),    # Red
            "section_7": (0, 0, 255)       # Blue
        }
        
        for table in self.tables:
            section_key = None
            for key, section in self.sections.items():
                if table in section["tables"]:
                    section_key = key
                    break
            
            if section_key:
                color = colors[section_key]
                cv2.rectangle(vis_image, 
                            (int(table.x), int(table.y)), 
                            (int(table.x + table.width), int(table.y + table.height)), 
                            color, 2)
                
                # Add table label
                cv2.putText(vis_image, table.label, 
                           (int(table.x), int(table.y) - 10), 
                           cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
        
        cv2.imwrite(output_path, vis_image)
        print(f"Visualization saved to {output_path}")

def main():
    """Main function to run table detection"""
    # Path to your floor map image
    image_path = "client/src/assets/images/floormap.png"
    
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        return
    
    # Create detector and run detection
    detector = TableDetector(image_path)
    tables = detector.detect_tables()
    
    if tables:
        # Save results
        detector.save_detection_results()
        
        # Print summary
        print("\n" + "="*50)
        print("TABLE DETECTION SUMMARY")
        print("="*50)
        
        for section_key, section in detector.sections.items():
            print(f"\n{section['name']}: {len(section['tables'])} tables")
            for table in section['tables']:
                print(f"  - Table {table.label}: {table.capacity}p, {table.shape}, {table.zone}")
        
        print(f"\nTotal tables detected: {len(tables)}")
        print("Results saved to 'detection_results/' directory")
    else:
        print("No tables detected. Please check the image and detection parameters.")

if __name__ == "__main__":
    main()
