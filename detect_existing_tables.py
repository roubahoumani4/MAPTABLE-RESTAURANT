#!/usr/bin/env python3
"""
Precise Table Coordinates for Floor Map
This script defines the exact coordinates and dimensions for all 67 tables
to ensure perfect alignment with the visual floor map.
"""

import json
import os
from typing import List, Dict
from dataclasses import dataclass

@dataclass
class TablePoint:
    """Class representing a precise table position on the floor map"""
    id: str
    label: str
    capacity: int
    section: str
    zone: str
    shape: str
    x: float
    y: float
    width: float
    height: float
    smoking: bool
    accessible: bool
    min_spend: float
    is_active: bool

class PreciseTableMapper:
    """Mapper for precise table coordinates on the floor map"""
    
    def __init__(self):
        self.tables: List[TablePoint] = []
        self.sections = {
            "section_1_4": {"name": "Main Dining (Sections 1-4)", "tables": []},
            "section_5_6": {"name": "Smoking Area (Sections 5-6)", "tables": []},
            "section_7": {"name": "Sea View (Section 7)", "tables": []}
        }
    
    def define_all_tables(self):
        """Define the exact coordinates for all 67 tables"""
        print("Defining precise coordinates for all 67 tables...")
        
        # Section 1-4: Main Dining (Tables 1-43)
        # Top row - Tables 1-6 - Clickable points centered on table numbers
        self.add_table("table-001", "1", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 110, 84, 20, 20, False, False, 0.0)
        self.add_table("table-002", "2", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 190, 84, 20, 20, False, False, 0.0)
        self.add_table("table-003", "3", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 270, 84, 20, 20, False, False, 0.0)
        self.add_table("table-004", "4", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 350, 84, 20, 20, False, False, 0.0)
        self.add_table("table-005", "5", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 430, 84, 20, 20, False, False, 0.0)
        self.add_table("table-006", "6", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 510, 84, 20, 20, False, False, 0.0)
        
        # Second row - Tables 7-12
        self.add_table("table-007", "7", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 110, 144, 20, 20, False, False, 0.0)
        self.add_table("table-008", "8", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 190, 144, 20, 20, False, False, 0.0)
        self.add_table("table-009", "9", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 270, 144, 20, 20, False, False, 0.0)
        self.add_table("table-010", "10", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 350, 144, 20, 20, False, False, 0.0)
        self.add_table("table-011", "11", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 430, 144, 20, 20, False, False, 0.0)
        self.add_table("table-012", "12", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 510, 144, 20, 20, False, False, 0.0)
        
        # Third row - Tables 13-18
        self.add_table("table-013", "13", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 110, 204, 20, 20, False, False, 0.0)
        self.add_table("table-014", "14", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 190, 204, 20, 20, False, False, 0.0)
        self.add_table("table-015", "15", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 270, 204, 20, 20, False, False, 0.0)
        self.add_table("table-016", "16", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 350, 204, 20, 20, False, False, 0.0)
        self.add_table("table-017", "17", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 430, 204, 20, 20, False, False, 0.0)
        self.add_table("table-018", "18", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 510, 204, 20, 20, False, False, 0.0)
        
        # Fourth row - Tables 19-24
        self.add_table("table-019", "19", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 110, 264, 20, 20, False, False, 0.0)
        self.add_table("table-020", "20", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 190, 264, 20, 20, False, False, 0.0)
        self.add_table("table-021", "21", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 270, 264, 20, 20, False, False, 0.0)
        self.add_table("table-022", "22", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 350, 264, 20, 20, False, False, 0.0)
        self.add_table("table-023", "23", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 430, 270, 20, 20, False, False, 0.0)
        self.add_table("table-024", "24", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 510, 270, 20, 20, False, False, 0.0)
        
        # Fifth row - Tables 25-30
        self.add_table("table-025", "25", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 110, 330, 20, 20, False, False, 0.0)
        self.add_table("table-026", "26", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 190, 330, 20, 20, False, False, 0.0)
        self.add_table("table-027", "27", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 270, 330, 20, 20, False, False, 0.0)
        self.add_table("table-028", "28", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 350, 330, 20, 20, False, False, 0.0)
        self.add_table("table-029", "29", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 430, 330, 20, 20, False, False, 0.0)
        self.add_table("table-030", "30", 6, "Main Dining (Sections 1-4)", "Main Dining", "circle", 510, 330, 20, 20, False, False, 0.0)
        
        # Sixth row - Tables 31-36
        self.add_table("table-031", "31", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 110, 384, 20, 20, False, False, 0.0)
        self.add_table("table-032", "32", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 190, 384, 20, 20, False, False, 0.0)
        self.add_table("table-033", "33", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 270, 384, 20, 20, False, False, 0.0)
        self.add_table("table-034", "34", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 350, 384, 20, 20, False, False, 0.0)
        self.add_table("table-035", "35", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 430, 384, 20, 20, False, False, 0.0)
        self.add_table("table-036", "36", 4, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 510, 384, 20, 20, False, False, 0.0)
        
        # Seventh row - Tables 37-43
        self.add_table("table-037", "37", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 105, 440, 20, 20, False, False, 0.0)
        self.add_table("table-038", "38", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 185, 440, 20, 20, False, False, 0.0)
        self.add_table("table-039", "39", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 265, 440, 20, 20, False, False, 0.0)
        self.add_table("table-040", "40", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 345, 440, 20, 20, False, False, 0.0)
        self.add_table("table-041", "41", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 425, 440, 20, 20, False, False, 0.0)
        self.add_table("table-042", "42", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 505, 440, 20, 20, False, False, 0.0)
        self.add_table("table-043", "43", 2, "Main Dining (Sections 1-4)", "Main Dining", "rectangle", 585, 440, 20, 20, False, False, 0.0)
        
        # Section 5-6: Smoking Area (Tables 44-55) - Clickable points on table numbers
        # Smoking area tables - arranged in a grid with precise number positioning
        smoking_tables = [
            (44, 625, 85, 4), (45, 685, 85, 4), (46, 745, 85, 4), (47, 805, 85, 4), (48, 865, 85, 4), (49, 925, 85, 4),
            (50, 625, 145, 4), (51, 685, 145, 4), (52, 745, 145, 4), (53, 805, 145, 4), (54, 865, 145, 4), (55, 925, 145, 4)
        ]
        
        for table_num, x, y, capacity in smoking_tables:
            self.add_table(f"table-{table_num:03d}", str(table_num), capacity, "Smoking Area (Sections 5-6)", "Smoking Area", "circle", x, y, 20, 20, True, False, 0.0)
        
        # Section 7: Sea View (Tables 56-67) - Keep existing good positioning
        # Sea view tables - arranged in rows with precise number positioning
        sea_view_tables = [
            (56, 110, 524, 4), (57, 190, 524, 4), (58, 270, 524, 4), (59, 350, 524, 4), (60, 430, 524, 4), (61, 510, 524, 4),
            (62, 110, 584, 4), (63, 190, 584, 4), (64, 270, 584, 4), (65, 350, 584, 4), (66, 430, 584, 4), (67, 510, 584, 4)
        ]
        
        for table_num, x, y, capacity in sea_view_tables:
            self.add_table(f"table-{table_num:03d}", str(table_num), capacity, "Sea View (Section 7)", "Sea View", "rectangle", x, y, 20, 20, False, False, 0.0)
        
        print(f"Defined {len(self.tables)} tables with precise clickable points on table numbers")
    
    def add_table(self, table_id: str, label: str, capacity: int, section: str, zone: str, 
                  shape: str, x: float, y: float, width: float, height: float, 
                  smoking: bool, accessible: bool, min_spend: float):
        """Add a table with precise coordinates"""
        table = TablePoint(
            id=table_id,
            label=label,
            capacity=capacity,
            section=section,
            zone=zone,
            shape=shape,
            x=x,
            y=y,
            width=width,
            height=height,
            smoking=smoking,
            accessible=accessible,
            min_spend=min_spend,
            is_active=True
        )
        
        self.tables.append(table)
        
        # Add to appropriate section
        if "Main Dining" in section:
            self.sections["section_1_4"]["tables"].append(table)
        elif "Smoking" in section:
            self.sections["section_5_6"]["tables"].append(table)
        elif "Sea View" in section:
            self.sections["section_7"]["tables"].append(table)
    
    def generate_sql_script(self) -> str:
        """Generate SQL script to insert all tables"""
        sql_lines = [
            "-- Insert all 67 tables with precise coordinates",
            "DELETE FROM tables WHERE restaurant_id = 'murrany-restaurant';",
            ""
        ]
        
        for table in self.tables:
            # Create a simple square SVG path for the clickable area
            svg_path = f"M {table.x},{table.y} L {table.x + table.width},{table.y} L {table.x + table.width},{table.y + table.height} L {table.x},{table.y + table.height} Z"
            
            # Create proper JSON geometry
            if table.shape == "circle":
                geometry = {
                    "type": "Circle",
                    "center": [table.x + table.width/2, table.y + table.height/2],
                    "radius": table.width / 2
                }
            else:
                geometry = {
                    "type": "Polygon",
                    "coordinates": [[
                        [table.x, table.y],
                        [table.x + table.width, table.y],
                        [table.x + table.width, table.y + table.height],
                        [table.x, table.y + table.height],
                        [table.x, table.y]
                    ]]
                }
            
            sql_lines.append(
                f"INSERT INTO tables (id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend, x, y, shape, section, svg_path, geometry, is_active) VALUES ("
                f"'{table.id}', "
                f"'murrany-restaurant', "
                f"'{table.label}', "
                f"{table.capacity}, "
                f"'{table.zone}', "
                f"{str(table.smoking).lower()}, "
                f"{str(table.accessible).lower()}, "
                f"{table.min_spend}, "
                f"{table.x}, "
                f"{table.y}, "
                f"'{table.shape}', "
                f"'{table.section}', "
                f"'{svg_path}', "
                f"'{json.dumps(geometry)}', "
                f"{str(table.is_active).lower()}"
                f");"
            )
        
        return "\n".join(sql_lines)
    
    def save_results(self):
        """Save the detection results"""
        # Create output directory
        os.makedirs("detection_results", exist_ok=True)
        
        # Save SQL script
        sql_content = self.generate_sql_script()
        with open("detection_results/insert_precise_tables.sql", "w") as f:
            f.write(sql_content)
        
        # Save table data as JSON
        table_data = []
        for table in self.tables:
            table_data.append({
                "id": table.id,
                "label": table.label,
                "capacity": table.capacity,
                "section": table.section,
                "zone": table.zone,
                "shape": table.shape,
                "x": table.x,
                "y": table.y,
                "width": table.width,
                "height": table.height,
                "smoking": table.smoking,
                "accessible": table.accessible,
                "min_spend": table.min_spend,
                "is_active": table.is_active
            })
        
        with open("detection_results/precise_table_coordinates.json", "w") as f:
            json.dump(table_data, f, indent=2)
        
        print("Results saved to detection_results/")
    
    def print_summary(self):
        """Print a summary of detected tables"""
        print(f"\n=== PRECISE TABLE MAPPING SUMMARY ===")
        print(f"Total tables: {len(self.tables)}")
        
        for section_key, section_info in self.sections.items():
            print(f"\n{section_info['name']}: {len(section_info['tables'])} tables")
            for table in section_info['tables'][:5]:  # Show first 5 tables
                print(f"  - Table {table.label}: {table.shape} at ({table.x}, {table.y}) - {table.capacity}p")
            if len(section_info['tables']) > 5:
                print(f"  ... and {len(section_info['tables']) - 5} more tables")

def main():
    """Main function to run the precise table mapping"""
    print("=== PRECISE TABLE COORDINATE MAPPING ===")
    print("This script defines exact coordinates for all 67 tables")
    print("to ensure perfect alignment with the floor map.\n")
    
    # Create detector and run detection
    detector = PreciseTableMapper()
    detector.define_all_tables()
    
    # Print summary
    detector.print_summary()
    
    # Save results
    detector.save_results()
    
    print("\n=== COMPLETED ===")
    print("Precise table coordinates have been defined and saved.")
    print("Use the generated SQL to update your database for perfect alignment.")

if __name__ == "__main__":
    main()
