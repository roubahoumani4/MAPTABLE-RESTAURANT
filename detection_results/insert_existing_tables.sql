-- Existing Table Detection Results for Murray Restaurant
-- Restaurant ID: murrany-restaurant
-- Total Tables Detected: 160

-- Clear existing tables for this restaurant
DELETE FROM tables WHERE restaurant_id = 'murrany-restaurant';

-- Insert detected existing tables

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-001', 'murrany-restaurant', '1', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    335.00, 12.00, 'rectangle', 342.00, 17.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 335,12 L 349,12 L 349,23 L 335,23 Z', 
    '{"type": "Polygon", "coordinates": [[[335, 12], [349, 12], [349, 23], [335, 23], [335, 12]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-002', 'murrany-restaurant', '2', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    325.00, 14.00, 'rectangle', 330.00, 18.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 325,14 L 335,14 L 335,22 L 325,22 Z', 
    '{"type": "Polygon", "coordinates": [[[325, 14], [335, 14], [335, 22], [325, 22], [325, 14]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-003', 'murrany-restaurant', '3', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    350.00, 14.00, 'rectangle', 362.00, 18.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 350,14 L 374,14 L 374,23 L 350,23 Z', 
    '{"type": "Polygon", "coordinates": [[[350, 14], [374, 14], [374, 23], [350, 23], [350, 14]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-004', 'murrany-restaurant', '4', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    208.00, 43.00, 'rectangle', 232.50, 55.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 208,43 L 257,43 L 257,68 L 208,68 Z', 
    '{"type": "Polygon", "coordinates": [[[208, 43], [257, 43], [257, 68], [208, 68], [208, 43]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-005', 'murrany-restaurant', '5', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    278.00, 43.00, 'rectangle', 302.50, 55.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 278,43 L 327,43 L 327,68 L 278,68 Z', 
    '{"type": "Polygon", "coordinates": [[[278, 43], [327, 43], [327, 68], [278, 68], [278, 43]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-006', 'murrany-restaurant', '6', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    348.00, 43.00, 'rectangle', 372.50, 55.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 348,43 L 397,43 L 397,68 L 348,68 Z', 
    '{"type": "Polygon", "coordinates": [[[348, 43], [397, 43], [397, 68], [348, 68], [348, 43]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-007', 'murrany-restaurant', '7', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    418.00, 43.00, 'rectangle', 442.50, 55.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 418,43 L 467,43 L 467,68 L 418,68 Z', 
    '{"type": "Polygon", "coordinates": [[[418, 43], [467, 43], [467, 68], [418, 68], [418, 43]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-008', 'murrany-restaurant', '8', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    160.00, 44.00, 'circle', 167.00, 51.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 160.0,51.5 A 7.0,7.0 0 1,1 174.0,51.5 A 7.0,7.0 0 1,1 160.0,51.5', 
    '{"type": "Circle", "coordinates": {"center": [167.0, 51.5], "radius": 7.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-009', 'murrany-restaurant', '9', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 45.00, 'circle', 94.00, 58.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81.0,58.0 A 13.0,13.0 0 1,1 107.0,58.0 A 13.0,13.0 0 1,1 81.0,58.0', 
    '{"type": "Circle", "coordinates": {"center": [94.0, 58.0], "radius": 13.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-010', 'murrany-restaurant', '10', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    488.00, 46.00, 'rectangle', 493.00, 57.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 488,46 L 498,46 L 498,68 L 488,68 Z', 
    '{"type": "Polygon", "coordinates": [[[488, 46], [498, 46], [498, 68], [488, 68], [488, 46]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-011', 'murrany-restaurant', '11', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    528.00, 46.00, 'rectangle', 532.50, 56.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 528,46 L 537,46 L 537,67 L 528,67 Z', 
    '{"type": "Polygon", "coordinates": [[[528, 46], [537, 46], [537, 67], [528, 67], [528, 46]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-012', 'murrany-restaurant', '12', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    558.00, 46.00, 'rectangle', 563.00, 57.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 558,46 L 568,46 L 568,68 L 558,68 Z', 
    '{"type": "Polygon", "coordinates": [[[558, 46], [568, 46], [568, 68], [558, 68], [558, 46]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-013', 'murrany-restaurant', '13', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    598.00, 46.00, 'rectangle', 602.50, 56.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 598,46 L 607,46 L 607,67 L 598,67 Z', 
    '{"type": "Polygon", "coordinates": [[[598, 46], [607, 46], [607, 67], [598, 67], [598, 46]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-014', 'murrany-restaurant', '14', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    136.00, 60.00, 'rectangle', 141.50, 67.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 136,60 L 147,60 L 147,74 L 136,74 Z', 
    '{"type": "Polygon", "coordinates": [[[136, 60], [147, 60], [147, 74], [136, 74], [136, 60]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-015', 'murrany-restaurant', '15', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    636.00, 64.00, 'rectangle', 649.00, 69.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 636,64 L 662,64 L 662,74 L 636,74 Z', 
    '{"type": "Polygon", "coordinates": [[[636, 64], [662, 64], [662, 74], [636, 74], [636, 64]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-016', 'murrany-restaurant', '16', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    543.00, 75.00, 'rectangle', 547.00, 81.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 543,75 L 551,75 L 551,88 L 543,88 Z', 
    '{"type": "Polygon", "coordinates": [[[543, 75], [551, 75], [551, 88], [543, 88], [543, 75]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-017', 'murrany-restaurant', '17', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    646.00, 85.00, 'circle', 650.50, 89.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 646.5,89.0 A 4.0,4.0 0 1,1 654.5,89.0 A 4.0,4.0 0 1,1 646.5,89.0', 
    '{"type": "Circle", "coordinates": {"center": [650.5, 89.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-018', 'murrany-restaurant', '18', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    160.00, 88.00, 'rectangle', 168.50, 94.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 160,88 L 177,88 L 177,101 L 160,101 Z', 
    '{"type": "Polygon", "coordinates": [[[160, 88], [177, 88], [177, 101], [160, 101], [160, 88]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-019', 'murrany-restaurant', '19', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 92.00, 'circle', 93.50, 105.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81.0,105.5 A 12.5,12.5 0 1,1 106.0,105.5 A 12.5,12.5 0 1,1 81.0,105.5', 
    '{"type": "Circle", "coordinates": {"center": [93.5, 105.5], "radius": 12.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-020', 'murrany-restaurant', '20', 4, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    207.00, 92.00, 'circle', 231.50, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 207.0,120.0 A 24.5,24.5 0 1,1 256.0,120.0 A 24.5,24.5 0 1,1 207.0,120.0', 
    '{"type": "Circle", "coordinates": {"center": [231.5, 120.0], "radius": 24.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-021', 'murrany-restaurant', '21', 4, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    277.00, 92.00, 'circle', 301.50, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 277.0,120.0 A 24.5,24.5 0 1,1 326.0,120.0 A 24.5,24.5 0 1,1 277.0,120.0', 
    '{"type": "Circle", "coordinates": {"center": [301.5, 120.0], "radius": 24.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-022', 'murrany-restaurant', '22', 4, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    347.00, 92.00, 'circle', 371.50, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 347.0,120.0 A 24.5,24.5 0 1,1 396.0,120.0 A 24.5,24.5 0 1,1 347.0,120.0', 
    '{"type": "Circle", "coordinates": {"center": [371.5, 120.0], "radius": 24.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-023', 'murrany-restaurant', '23', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    420.00, 94.00, 'rectangle', 441.50, 107.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 420,94 L 463,94 L 463,120 L 420,120 Z', 
    '{"type": "Polygon", "coordinates": [[[420, 94], [463, 94], [463, 120], [420, 120], [420, 94]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-024', 'murrany-restaurant', '24', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    527.00, 98.00, 'rectangle', 531.50, 107.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 527,98 L 536,98 L 536,116 L 527,116 Z', 
    '{"type": "Polygon", "coordinates": [[[527, 98], [536, 98], [536, 116], [527, 116], [527, 98]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-025', 'murrany-restaurant', '25', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    508.00, 103.00, 'circle', 512.00, 107.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 508.0,107.0 A 4.0,4.0 0 1,1 516.0,107.0 A 4.0,4.0 0 1,1 508.0,107.0', 
    '{"type": "Circle", "coordinates": {"center": [512.0, 107.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-026', 'murrany-restaurant', '26', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    578.00, 103.00, 'circle', 582.50, 107.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 578.5,107.0 A 4.0,4.0 0 1,1 586.5,107.0 A 4.0,4.0 0 1,1 578.5,107.0', 
    '{"type": "Circle", "coordinates": {"center": [582.5, 107.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-027', 'murrany-restaurant', '27', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    642.00, 104.00, 'rectangle', 651.00, 109.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 642,104 L 660,104 L 660,114 L 642,114 Z', 
    '{"type": "Polygon", "coordinates": [[[642, 104], [660, 104], [660, 114], [642, 114], [642, 104]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-028', 'murrany-restaurant', '28', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    487.00, 126.00, 'rectangle', 492.00, 137.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 487,126 L 497,126 L 497,148 L 487,148 Z', 
    '{"type": "Polygon", "coordinates": [[[487, 126], [497, 126], [497, 148], [487, 148], [487, 126]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-029', 'murrany-restaurant', '29', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    527.00, 126.00, 'rectangle', 531.50, 136.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 527,126 L 536,126 L 536,147 L 527,147 Z', 
    '{"type": "Polygon", "coordinates": [[[527, 126], [536, 126], [536, 147], [527, 147], [527, 126]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-030', 'murrany-restaurant', '30', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    557.00, 126.00, 'rectangle', 562.00, 137.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 557,126 L 567,126 L 567,148 L 557,148 Z', 
    '{"type": "Polygon", "coordinates": [[[557, 126], [567, 126], [567, 148], [557, 148], [557, 126]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-031', 'murrany-restaurant', '31', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    597.00, 126.00, 'rectangle', 601.50, 136.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 597,126 L 606,126 L 606,147 L 597,147 Z', 
    '{"type": "Polygon", "coordinates": [[[597, 126], [606, 126], [606, 147], [597, 147], [597, 126]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-032', 'murrany-restaurant', '32', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    438.00, 129.00, 'circle', 442.50, 133.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 438.5,133.0 A 4.0,4.0 0 1,1 446.5,133.0 A 4.0,4.0 0 1,1 438.5,133.0', 
    '{"type": "Circle", "coordinates": {"center": [442.5, 133.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-033', 'murrany-restaurant', '33', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    508.00, 129.00, 'circle', 512.50, 133.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 508.5,133.0 A 4.0,4.0 0 1,1 516.5,133.0 A 4.0,4.0 0 1,1 508.5,133.0', 
    '{"type": "Circle", "coordinates": {"center": [512.5, 133.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-034', 'murrany-restaurant', '34', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    578.00, 129.00, 'circle', 582.50, 133.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 578.5,133.0 A 4.0,4.0 0 1,1 586.5,133.0 A 4.0,4.0 0 1,1 578.5,133.0', 
    '{"type": "Circle", "coordinates": {"center": [582.5, 133.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-035', 'murrany-restaurant', '35', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    636.00, 131.00, 'rectangle', 649.00, 136.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 636,131 L 662,131 L 662,141 L 636,141 Z', 
    '{"type": "Polygon", "coordinates": [[[636, 131], [662, 131], [662, 141], [636, 141], [636, 131]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-036', 'murrany-restaurant', '36', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 147.00, 'rectangle', 139.00, 160.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,147 L 147,147 L 147,174 L 131,174 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 147], [147, 147], [147, 174], [131, 174], [131, 147]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-037', 'murrany-restaurant', '37', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 148.00, 'rectangle', 89.00, 152.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81,148 L 97,148 L 97,157 L 81,157 Z', 
    '{"type": "Polygon", "coordinates": [[[81, 148], [97, 148], [97, 157], [81, 157], [81, 148]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-038', 'murrany-restaurant', '38', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    646.00, 152.00, 'rectangle', 651.00, 156.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 646,152 L 656,152 L 656,160 L 646,160 Z', 
    '{"type": "Polygon", "coordinates": [[[646, 152], [656, 152], [656, 160], [646, 160], [646, 152]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-039', 'murrany-restaurant', '39', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    212.00, 154.00, 'rectangle', 216.00, 160.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 212,154 L 220,154 L 220,167 L 212,167 Z', 
    '{"type": "Polygon", "coordinates": [[[212, 154], [220, 154], [220, 167], [212, 167], [212, 154]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-040', 'murrany-restaurant', '40', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    488.00, 163.00, 'circle', 507.50, 182.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 488.0,182.5 A 19.5,19.5 0 1,1 527.0,182.5 A 19.5,19.5 0 1,1 488.0,182.5', 
    '{"type": "Circle", "coordinates": {"center": [507.5, 182.5], "radius": 19.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-041', 'murrany-restaurant', '41', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    558.00, 163.00, 'circle', 577.50, 182.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 558.0,182.5 A 19.5,19.5 0 1,1 597.0,182.5 A 19.5,19.5 0 1,1 558.0,182.5', 
    '{"type": "Circle", "coordinates": {"center": [577.5, 182.5], "radius": 19.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-042', 'murrany-restaurant', '42', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    85.00, 169.00, 'circle', 89.50, 173.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 85.5,173.0 A 4.0,4.0 0 1,1 93.5,173.0 A 4.0,4.0 0 1,1 85.5,173.0', 
    '{"type": "Circle", "coordinates": {"center": [89.5, 173.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-043', 'murrany-restaurant', '43', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    152.00, 169.00, 'rectangle', 157.00, 173.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 152,169 L 162,169 L 162,177 L 152,177 Z', 
    '{"type": "Polygon", "coordinates": [[[152, 169], [162, 169], [162, 177], [152, 177], [152, 169]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-044', 'murrany-restaurant', '44', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    642.00, 171.00, 'rectangle', 651.00, 176.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 642,171 L 660,171 L 660,181 L 642,181 Z', 
    '{"type": "Polygon", "coordinates": [[[642, 171], [660, 171], [660, 181], [642, 181], [642, 171]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-045', 'murrany-restaurant', '45', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    204.00, 176.00, 'circle', 210.50, 183.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 204.0,183.0 A 6.5,6.5 0 1,1 217.0,183.0 A 6.5,6.5 0 1,1 204.0,183.0', 
    '{"type": "Circle", "coordinates": {"center": [210.5, 183.0], "radius": 6.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-046', 'murrany-restaurant', '46', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    458.00, 176.00, 'circle', 465.00, 183.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 458.0,183.0 A 7.0,7.0 0 1,1 472.0,183.0 A 7.0,7.0 0 1,1 458.0,183.0', 
    '{"type": "Circle", "coordinates": {"center": [465.0, 183.0], "radius": 7.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-047', 'murrany-restaurant', '47', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    261.00, 177.00, 'rectangle', 266.50, 181.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 261,177 L 272,177 L 272,185 L 261,185 Z', 
    '{"type": "Polygon", "coordinates": [[[261, 177], [272, 177], [272, 185], [261, 185], [261, 177]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-048', 'murrany-restaurant', '48', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    332.00, 177.00, 'circle', 336.50, 181.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 332.5,181.0 A 4.0,4.0 0 1,1 340.5,181.0 A 4.0,4.0 0 1,1 332.5,181.0', 
    '{"type": "Circle", "coordinates": {"center": [336.5, 181.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-049', 'murrany-restaurant', '49', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    402.00, 177.00, 'circle', 406.50, 181.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 402.5,181.0 A 4.0,4.0 0 1,1 410.5,181.0 A 4.0,4.0 0 1,1 402.5,181.0', 
    '{"type": "Circle", "coordinates": {"center": [406.5, 181.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-050', 'murrany-restaurant', '50', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    10.00, 194.00, 'rectangle', 19.00, 199.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 10,194 L 28,194 L 28,205 L 10,205 Z', 
    '{"type": "Polygon", "coordinates": [[[10, 194], [28, 194], [28, 205], [10, 205], [10, 194]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-051', 'murrany-restaurant', '51', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    36.00, 195.00, 'rectangle', 48.00, 200.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 36,195 L 60,195 L 60,205 L 36,205 Z', 
    '{"type": "Polygon", "coordinates": [[[36, 195], [60, 195], [60, 205], [36, 205], [36, 195]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-052', 'murrany-restaurant', '52', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    636.00, 198.00, 'rectangle', 649.00, 203.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 636,198 L 662,198 L 662,208 L 636,208 Z', 
    '{"type": "Polygon", "coordinates": [[[636, 198], [662, 198], [662, 208], [636, 208], [636, 198]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-053', 'murrany-restaurant', '53', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    116.00, 209.00, 'rectangle', 120.50, 215.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 116,209 L 125,209 L 125,221 L 116,221 Z', 
    '{"type": "Polygon", "coordinates": [[[116, 209], [125, 209], [125, 221], [116, 221], [116, 209]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-054', 'murrany-restaurant', '54', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 212.00, 'rectangle', 139.00, 225.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,212 L 147,212 L 147,239 L 131,239 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 212], [147, 212], [147, 239], [131, 239], [131, 212]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-055', 'murrany-restaurant', '55', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    207.00, 212.00, 'circle', 227.50, 232.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 207.0,232.5 A 20.5,20.5 0 1,1 248.0,232.5 A 20.5,20.5 0 1,1 207.0,232.5', 
    '{"type": "Circle", "coordinates": {"center": [227.5, 232.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-056', 'murrany-restaurant', '56', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    342.00, 212.00, 'circle', 364.50, 234.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 342.0,234.5 A 22.5,22.5 0 1,1 387.0,234.5 A 22.5,22.5 0 1,1 342.0,234.5', 
    '{"type": "Circle", "coordinates": {"center": [364.5, 234.5], "radius": 22.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-057', 'murrany-restaurant', '57', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    411.00, 212.00, 'circle', 434.00, 234.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 411.5,234.5 A 22.5,22.5 0 1,1 456.5,234.5 A 22.5,22.5 0 1,1 411.5,234.5', 
    '{"type": "Circle", "coordinates": {"center": [434.0, 234.5], "radius": 22.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-058', 'murrany-restaurant', '58', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 213.00, 'rectangle', 89.00, 217.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81,213 L 97,213 L 97,222 L 81,222 Z', 
    '{"type": "Polygon", "coordinates": [[[81, 213], [97, 213], [97, 222], [81, 222], [81, 213]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-059', 'murrany-restaurant', '59', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    276.00, 213.00, 'circle', 296.50, 233.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 276.0,233.5 A 20.5,20.5 0 1,1 317.0,233.5 A 20.5,20.5 0 1,1 276.0,233.5', 
    '{"type": "Circle", "coordinates": {"center": [296.5, 233.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-060', 'murrany-restaurant', '60', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    543.00, 215.00, 'rectangle', 547.50, 222.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 543,215 L 552,215 L 552,229 L 543,229 Z', 
    '{"type": "Polygon", "coordinates": [[[543, 215], [552, 215], [552, 229], [543, 229], [543, 215]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-061', 'murrany-restaurant', '61', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    646.00, 219.00, 'rectangle', 651.00, 223.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 646,219 L 656,219 L 656,227 L 646,227 Z', 
    '{"type": "Polygon", "coordinates": [[[646, 219], [656, 219], [656, 227], [646, 227], [646, 219]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-062', 'murrany-restaurant', '62', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    558.00, 226.00, 'circle', 577.50, 245.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 558.0,245.5 A 19.5,19.5 0 1,1 597.0,245.5 A 19.5,19.5 0 1,1 558.0,245.5', 
    '{"type": "Circle", "coordinates": {"center": [577.5, 245.5], "radius": 19.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-063', 'murrany-restaurant', '63', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    85.00, 234.00, 'circle', 89.50, 238.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 85.5,238.0 A 4.0,4.0 0 1,1 93.5,238.0 A 4.0,4.0 0 1,1 85.5,238.0', 
    '{"type": "Circle", "coordinates": {"center": [89.5, 238.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-064', 'murrany-restaurant', '64', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    152.00, 234.00, 'circle', 156.50, 238.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 152.5,238.0 A 4.0,4.0 0 1,1 160.5,238.0 A 4.0,4.0 0 1,1 152.5,238.0', 
    '{"type": "Circle", "coordinates": {"center": [156.5, 238.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-065', 'murrany-restaurant', '65', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    642.00, 238.00, 'rectangle', 651.00, 243.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 642,238 L 660,238 L 660,248 L 642,248 Z', 
    '{"type": "Polygon", "coordinates": [[[642, 238], [660, 238], [660, 248], [642, 248], [642, 238]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-066', 'murrany-restaurant', '66', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    507.00, 246.00, 'rectangle', 512.00, 250.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 507,246 L 517,246 L 517,254 L 507,254 Z', 
    '{"type": "Polygon", "coordinates": [[[507, 246], [517, 246], [517, 254], [507, 254], [507, 246]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-067', 'murrany-restaurant', '67', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    262.00, 263.00, 'rectangle', 266.50, 270.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 262,263 L 271,263 L 271,277 L 262,277 Z', 
    '{"type": "Polygon", "coordinates": [[[262, 263], [271, 263], [271, 277], [262, 277], [262, 263]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-068', 'murrany-restaurant', '68', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    401.00, 264.00, 'rectangle', 405.50, 270.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 401,264 L 410,264 L 410,276 L 401,276 Z', 
    '{"type": "Polygon", "coordinates": [[[401, 264], [410, 264], [410, 276], [401, 276], [401, 264]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-069', 'murrany-restaurant', '69', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    636.00, 265.00, 'rectangle', 649.00, 270.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 636,265 L 662,265 L 662,275 L 636,275 Z', 
    '{"type": "Polygon", "coordinates": [[[636, 265], [662, 265], [662, 275], [636, 275], [636, 265]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-070', 'murrany-restaurant', '70', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 277.00, 'rectangle', 144.00, 285.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,277 L 157,277 L 157,293 L 131,293 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 277], [157, 277], [157, 293], [131, 293], [131, 277]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-071', 'murrany-restaurant', '71', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    158.00, 277.00, 'rectangle', 166.00, 282.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 158,277 L 174,277 L 174,288 L 158,288 Z', 
    '{"type": "Polygon", "coordinates": [[[158, 277], [174, 277], [174, 288], [158, 288], [158, 277]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-072', 'murrany-restaurant', '72', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    411.00, 277.00, 'circle', 434.00, 299.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 411.5,299.5 A 22.5,22.5 0 1,1 456.5,299.5 A 22.5,22.5 0 1,1 411.5,299.5', 
    '{"type": "Circle", "coordinates": {"center": [434.0, 299.5], "radius": 22.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-073', 'murrany-restaurant', '73', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    207.00, 278.00, 'circle', 227.50, 298.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 207.0,298.5 A 20.5,20.5 0 1,1 248.0,298.5 A 20.5,20.5 0 1,1 207.0,298.5', 
    '{"type": "Circle", "coordinates": {"center": [227.5, 298.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-074', 'murrany-restaurant', '74', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    276.00, 278.00, 'circle', 296.50, 298.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 276.0,298.5 A 20.5,20.5 0 1,1 317.0,298.5 A 20.5,20.5 0 1,1 276.0,298.5', 
    '{"type": "Circle", "coordinates": {"center": [296.5, 298.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-075', 'murrany-restaurant', '75', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 279.00, 'rectangle', 89.00, 283.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81,279 L 97,279 L 97,288 L 81,288 Z', 
    '{"type": "Polygon", "coordinates": [[[81, 279], [97, 279], [97, 288], [81, 288], [81, 279]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-076', 'murrany-restaurant', '76', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    558.00, 289.00, 'circle', 577.50, 308.50, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 558.0,308.5 A 19.5,19.5 0 1,1 597.0,308.5 A 19.5,19.5 0 1,1 558.0,308.5', 
    '{"type": "Circle", "coordinates": {"center": [577.5, 308.5], "radius": 19.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-077', 'murrany-restaurant', '77', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 294.00, 'rectangle', 139.50, 307.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,294 L 148,294 L 148,321 L 131,321 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 294], [148, 294], [148, 321], [131, 321], [131, 294]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-078', 'murrany-restaurant', '78', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    85.00, 300.00, 'circle', 89.50, 304.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 85.5,304.0 A 4.0,4.0 0 1,1 93.5,304.0 A 4.0,4.0 0 1,1 85.5,304.0', 
    '{"type": "Circle", "coordinates": {"center": [89.5, 304.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-079', 'murrany-restaurant', '79', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    364.00, 300.00, 'circle', 368.50, 304.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 364.5,304.0 A 4.0,4.0 0 1,1 372.5,304.0 A 4.0,4.0 0 1,1 364.5,304.0', 
    '{"type": "Circle", "coordinates": {"center": [368.5, 304.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-080', 'murrany-restaurant', '80', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    156.00, 303.00, 'circle', 165.50, 312.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 156.5,312.0 A 9.0,9.0 0 1,1 174.5,312.0 A 9.0,9.0 0 1,1 156.5,312.0', 
    '{"type": "Circle", "coordinates": {"center": [165.5, 312.0], "radius": 9.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-081', 'murrany-restaurant', '81', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    642.00, 305.00, 'rectangle', 651.00, 310.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 642,305 L 660,305 L 660,315 L 642,315 Z', 
    '{"type": "Polygon", "coordinates": [[[642, 305], [660, 305], [660, 315], [642, 315], [642, 305]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-082', 'murrany-restaurant', '82', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    507.00, 309.00, 'rectangle', 512.00, 313.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 507,309 L 517,309 L 517,317 L 507,317 Z', 
    '{"type": "Polygon", "coordinates": [[[507, 309], [517, 309], [517, 317], [507, 317], [507, 309]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-083', 'murrany-restaurant', '83', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    636.00, 332.00, 'rectangle', 649.00, 337.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 636,332 L 662,332 L 662,342 L 636,342 Z', 
    '{"type": "Polygon", "coordinates": [[[636, 332], [662, 332], [662, 342], [636, 342], [636, 332]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-084', 'murrany-restaurant', '84', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 342.00, 'rectangle', 144.00, 350.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,342 L 157,342 L 157,358 L 131,358 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 342], [157, 342], [157, 358], [131, 358], [131, 342]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-085', 'murrany-restaurant', '85', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    158.00, 342.00, 'rectangle', 166.00, 347.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 158,342 L 174,342 L 174,353 L 158,353 Z', 
    '{"type": "Polygon", "coordinates": [[[158, 342], [174, 342], [174, 353], [158, 353], [158, 342]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-086', 'murrany-restaurant', '86', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    207.00, 343.00, 'circle', 227.50, 363.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 207.0,363.5 A 20.5,20.5 0 1,1 248.0,363.5 A 20.5,20.5 0 1,1 207.0,363.5', 
    '{"type": "Circle", "coordinates": {"center": [227.5, 363.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-087', 'murrany-restaurant', '87', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    276.00, 343.00, 'circle', 296.50, 363.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 276.0,363.5 A 20.5,20.5 0 1,1 317.0,363.5 A 20.5,20.5 0 1,1 276.0,363.5', 
    '{"type": "Circle", "coordinates": {"center": [296.5, 363.5], "radius": 20.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-088', 'murrany-restaurant', '88', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    411.00, 343.00, 'circle', 434.00, 365.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 411.5,365.5 A 22.5,22.5 0 1,1 456.5,365.5 A 22.5,22.5 0 1,1 411.5,365.5', 
    '{"type": "Circle", "coordinates": {"center": [434.0, 365.5], "radius": 22.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-089', 'murrany-restaurant', '89', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    81.00, 344.00, 'rectangle', 89.00, 348.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 81,344 L 97,344 L 97,353 L 81,353 Z', 
    '{"type": "Polygon", "coordinates": [[[81, 344], [97, 344], [97, 353], [81, 353], [81, 344]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-090', 'murrany-restaurant', '90', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    485.00, 349.00, 'circle', 507.50, 372.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 485.0,372.0 A 22.5,22.5 0 1,1 530.0,372.0 A 22.5,22.5 0 1,1 485.0,372.0', 
    '{"type": "Circle", "coordinates": {"center": [507.5, 372.0], "radius": 22.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-091', 'murrany-restaurant', '91', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    647.00, 353.00, 'circle', 651.50, 357.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 647.5,357.0 A 4.0,4.0 0 1,1 655.5,357.0 A 4.0,4.0 0 1,1 647.5,357.0', 
    '{"type": "Circle", "coordinates": {"center": [651.5, 357.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-092', 'murrany-restaurant', '92', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    131.00, 359.00, 'rectangle', 139.50, 372.50, 
    0.0, 'Main Dining (Sections 1-4)', 'M 131,359 L 148,359 L 148,386 L 131,386 Z', 
    '{"type": "Polygon", "coordinates": [[[131, 359], [148, 359], [148, 386], [131, 386], [131, 359]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-093', 'murrany-restaurant', '93', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    85.00, 365.00, 'circle', 89.50, 369.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 85.5,369.0 A 4.0,4.0 0 1,1 93.5,369.0 A 4.0,4.0 0 1,1 85.5,369.0', 
    '{"type": "Circle", "coordinates": {"center": [89.5, 369.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-094', 'murrany-restaurant', '94', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    364.00, 366.00, 'rectangle', 369.00, 370.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 364,366 L 374,366 L 374,374 L 364,374 Z', 
    '{"type": "Polygon", "coordinates": [[[364, 366], [374, 366], [374, 374], [364, 374], [364, 366]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-095', 'murrany-restaurant', '95', 2, 'Main Dining (Sections 1-4)', 
    false, false, 0.0,
    156.00, 368.00, 'circle', 165.50, 377.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 156.5,377.0 A 9.0,9.0 0 1,1 174.5,377.0 A 9.0,9.0 0 1,1 156.5,377.0', 
    '{"type": "Circle", "coordinates": {"center": [165.5, 377.0], "radius": 9.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-096', 'murrany-restaurant', '96', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    578.00, 372.00, 'circle', 582.50, 376.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 578.5,376.0 A 4.0,4.0 0 1,1 586.5,376.0 A 4.0,4.0 0 1,1 578.5,376.0', 
    '{"type": "Circle", "coordinates": {"center": [582.5, 376.0], "radius": 4.0}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-097', 'murrany-restaurant', '97', 2, 'Smoking Area (Sections 5-6)', 
    true, false, 0.0,
    642.00, 372.00, 'rectangle', 651.00, 377.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 642,372 L 660,372 L 660,382 L 642,382 Z', 
    '{"type": "Polygon", "coordinates": [[[642, 372], [660, 372], [660, 382], [642, 382], [642, 372]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-098', 'murrany-restaurant', '98', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    85.00, 470.00, 'rectangle', 91.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 85,470 L 97,470 L 97,486 L 85,486 Z', 
    '{"type": "Polygon", "coordinates": [[[85, 470], [97, 470], [97, 486], [85, 486], [85, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-099', 'murrany-restaurant', '99', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    125.00, 470.00, 'rectangle', 131.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 125,470 L 137,470 L 137,486 L 125,486 Z', 
    '{"type": "Polygon", "coordinates": [[[125, 470], [137, 470], [137, 486], [125, 486], [125, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-100', 'murrany-restaurant', '100', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    183.00, 470.00, 'rectangle', 189.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 183,470 L 195,470 L 195,486 L 183,486 Z', 
    '{"type": "Polygon", "coordinates": [[[183, 470], [195, 470], [195, 486], [183, 486], [183, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-101', 'murrany-restaurant', '101', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    282.00, 470.00, 'rectangle', 288.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 282,470 L 294,470 L 294,486 L 282,486 Z', 
    '{"type": "Polygon", "coordinates": [[[282, 470], [294, 470], [294, 486], [282, 486], [282, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-102', 'murrany-restaurant', '102', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    321.00, 470.00, 'rectangle', 327.50, 490.50, 
    0.0, 'Sea View (Section 7)', 'M 321,470 L 334,470 L 334,511 L 321,511 Z', 
    '{"type": "Polygon", "coordinates": [[[321, 470], [334, 470], [334, 511], [321, 511], [321, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-103', 'murrany-restaurant', '103', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    379.00, 470.00, 'rectangle', 385.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 379,470 L 391,470 L 391,486 L 379,486 Z', 
    '{"type": "Polygon", "coordinates": [[[379, 470], [391, 470], [391, 486], [379, 486], [379, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-104', 'murrany-restaurant', '104', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    477.00, 470.00, 'rectangle', 482.50, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 477,470 L 488,470 L 488,486 L 477,486 Z', 
    '{"type": "Polygon", "coordinates": [[[477, 470], [488, 470], [488, 486], [477, 486], [477, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-105', 'murrany-restaurant', '105', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    517.00, 470.00, 'rectangle', 523.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 517,470 L 529,470 L 529,486 L 517,486 Z', 
    '{"type": "Polygon", "coordinates": [[[517, 470], [529, 470], [529, 486], [517, 486], [517, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-106', 'murrany-restaurant', '106', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    576.00, 470.00, 'rectangle', 582.00, 478.00, 
    0.0, 'Sea View (Section 7)', 'M 576,470 L 588,470 L 588,486 L 576,486 Z', 
    '{"type": "Polygon", "coordinates": [[[576, 470], [588, 470], [588, 486], [576, 486], [576, 470]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-107', 'murrany-restaurant', '107', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    224.00, 471.00, 'rectangle', 229.50, 478.50, 
    0.0, 'Sea View (Section 7)', 'M 224,471 L 235,471 L 235,486 L 224,486 Z', 
    '{"type": "Polygon", "coordinates": [[[224, 471], [235, 471], [235, 486], [224, 486], [224, 471]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-108', 'murrany-restaurant', '108', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    420.00, 471.00, 'rectangle', 425.50, 478.50, 
    0.0, 'Sea View (Section 7)', 'M 420,471 L 431,471 L 431,486 L 420,486 Z', 
    '{"type": "Polygon", "coordinates": [[[420, 471], [431, 471], [431, 486], [420, 486], [420, 471]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-109', 'murrany-restaurant', '109', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    617.00, 471.00, 'rectangle', 622.50, 478.50, 
    0.0, 'Sea View (Section 7)', 'M 617,471 L 628,471 L 628,486 L 617,486 Z', 
    '{"type": "Polygon", "coordinates": [[[617, 471], [628, 471], [628, 486], [617, 486], [617, 471]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-110', 'murrany-restaurant', '110', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    301.00, 482.00, 'circle', 307.50, 487.50, 
    0.0, 'Sea View (Section 7)', 'M 302.0,487.5 A 5.5,5.5 0 1,1 313.0,487.5 A 5.5,5.5 0 1,1 302.0,487.5', 
    '{"type": "Circle", "coordinates": {"center": [307.5, 487.5], "radius": 5.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-111', 'murrany-restaurant', '111', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    595.00, 482.00, 'circle', 601.50, 487.50, 
    0.0, 'Sea View (Section 7)', 'M 596.0,487.5 A 5.5,5.5 0 1,1 607.0,487.5 A 5.5,5.5 0 1,1 596.0,487.5', 
    '{"type": "Circle", "coordinates": {"center": [601.5, 487.5], "radius": 5.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-112', 'murrany-restaurant', '112', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    104.00, 483.00, 'rectangle', 110.50, 488.00, 
    0.0, 'Sea View (Section 7)', 'M 104,483 L 117,483 L 117,493 L 104,493 Z', 
    '{"type": "Polygon", "coordinates": [[[104, 483], [117, 483], [117, 493], [104, 493], [104, 483]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-113', 'murrany-restaurant', '113', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    205.00, 483.00, 'rectangle', 211.50, 488.00, 
    0.0, 'Sea View (Section 7)', 'M 205,483 L 218,483 L 218,493 L 205,493 Z', 
    '{"type": "Polygon", "coordinates": [[[205, 483], [218, 483], [218, 493], [205, 493], [205, 483]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-114', 'murrany-restaurant', '114', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    399.00, 483.00, 'rectangle', 405.50, 488.00, 
    0.0, 'Sea View (Section 7)', 'M 399,483 L 412,483 L 412,493 L 399,493 Z', 
    '{"type": "Polygon", "coordinates": [[[399, 483], [412, 483], [412, 493], [399, 493], [399, 483]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-115', 'murrany-restaurant', '115', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    500.00, 483.00, 'rectangle', 506.50, 488.00, 
    0.0, 'Sea View (Section 7)', 'M 500,483 L 513,483 L 513,493 L 500,493 Z', 
    '{"type": "Polygon", "coordinates": [[[500, 483], [513, 483], [513, 493], [500, 493], [500, 483]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-116', 'murrany-restaurant', '116', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    124.00, 490.00, 'rectangle', 130.00, 500.50, 
    0.0, 'Sea View (Section 7)', 'M 124,490 L 136,490 L 136,511 L 124,511 Z', 
    '{"type": "Polygon", "coordinates": [[[124, 490], [136, 490], [136, 511], [124, 511], [124, 490]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-117', 'murrany-restaurant', '117', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    281.00, 490.00, 'rectangle', 287.50, 498.50, 
    0.0, 'Sea View (Section 7)', 'M 281,490 L 294,490 L 294,507 L 281,507 Z', 
    '{"type": "Polygon", "coordinates": [[[281, 490], [294, 490], [294, 507], [281, 507], [281, 490]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-118', 'murrany-restaurant', '118', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    516.00, 490.00, 'rectangle', 522.00, 500.50, 
    0.0, 'Sea View (Section 7)', 'M 516,490 L 528,490 L 528,511 L 516,511 Z', 
    '{"type": "Polygon", "coordinates": [[[516, 490], [528, 490], [528, 511], [516, 511], [516, 490]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-119', 'murrany-restaurant', '119', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    85.00, 491.00, 'rectangle', 91.00, 499.00, 
    0.0, 'Sea View (Section 7)', 'M 85,491 L 97,491 L 97,507 L 85,507 Z', 
    '{"type": "Polygon", "coordinates": [[[85, 491], [97, 491], [97, 507], [85, 507], [85, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-120', 'murrany-restaurant', '120', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    183.00, 491.00, 'rectangle', 189.00, 499.00, 
    0.0, 'Sea View (Section 7)', 'M 183,491 L 195,491 L 195,507 L 183,507 Z', 
    '{"type": "Polygon", "coordinates": [[[183, 491], [195, 491], [195, 507], [183, 507], [183, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-121', 'murrany-restaurant', '121', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    224.00, 491.00, 'rectangle', 229.50, 501.00, 
    0.0, 'Sea View (Section 7)', 'M 224,491 L 235,491 L 235,511 L 224,511 Z', 
    '{"type": "Polygon", "coordinates": [[[224, 491], [235, 491], [235, 511], [224, 511], [224, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-122', 'murrany-restaurant', '122', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    379.00, 491.00, 'rectangle', 385.00, 499.00, 
    0.0, 'Sea View (Section 7)', 'M 379,491 L 391,491 L 391,507 L 379,507 Z', 
    '{"type": "Polygon", "coordinates": [[[379, 491], [391, 491], [391, 507], [379, 507], [379, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-123', 'murrany-restaurant', '123', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    420.00, 491.00, 'rectangle', 425.50, 501.00, 
    0.0, 'Sea View (Section 7)', 'M 420,491 L 431,491 L 431,511 L 420,511 Z', 
    '{"type": "Polygon", "coordinates": [[[420, 491], [431, 491], [431, 511], [420, 511], [420, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-124', 'murrany-restaurant', '124', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    476.00, 491.00, 'rectangle', 482.00, 499.00, 
    0.0, 'Sea View (Section 7)', 'M 476,491 L 488,491 L 488,507 L 476,507 Z', 
    '{"type": "Polygon", "coordinates": [[[476, 491], [488, 491], [488, 507], [476, 507], [476, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-125', 'murrany-restaurant', '125', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    576.00, 491.00, 'rectangle', 582.00, 499.00, 
    0.0, 'Sea View (Section 7)', 'M 576,491 L 588,491 L 588,507 L 576,507 Z', 
    '{"type": "Polygon", "coordinates": [[[576, 491], [588, 491], [588, 507], [576, 507], [576, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-126', 'murrany-restaurant', '126', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    617.00, 491.00, 'rectangle', 622.50, 501.00, 
    0.0, 'Sea View (Section 7)', 'M 617,491 L 628,491 L 628,511 L 617,511 Z', 
    '{"type": "Polygon", "coordinates": [[[617, 491], [628, 491], [628, 511], [617, 511], [617, 491]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-127', 'murrany-restaurant', '127', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    690.00, 520.00, 'rectangle', 701.50, 525.50, 
    0.0, 'Sea View (Section 7)', 'M 690,520 L 713,520 L 713,531 L 690,531 Z', 
    '{"type": "Polygon", "coordinates": [[[690, 520], [713, 520], [713, 531], [690, 531], [690, 520]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-128', 'murrany-restaurant', '128', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    715.00, 521.00, 'rectangle', 730.00, 526.00, 
    0.0, 'Sea View (Section 7)', 'M 715,521 L 745,521 L 745,531 L 715,531 Z', 
    '{"type": "Polygon", "coordinates": [[[715, 521], [745, 521], [745, 531], [715, 531], [715, 521]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-129', 'murrany-restaurant', '129', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    222.00, 570.00, 'rectangle', 228.50, 581.50, 
    0.0, 'Sea View (Section 7)', 'M 222,570 L 235,570 L 235,593 L 222,593 Z', 
    '{"type": "Polygon", "coordinates": [[[222, 570], [235, 570], [235, 593], [222, 593], [222, 570]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-130', 'murrany-restaurant', '130', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    85.00, 571.00, 'rectangle', 91.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 85,571 L 97,571 L 97,587 L 85,587 Z', 
    '{"type": "Polygon", "coordinates": [[[85, 571], [97, 571], [97, 587], [85, 587], [85, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-131', 'murrany-restaurant', '131', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    125.00, 571.00, 'rectangle', 131.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 125,571 L 137,571 L 137,587 L 125,587 Z', 
    '{"type": "Polygon", "coordinates": [[[125, 571], [137, 571], [137, 587], [125, 587], [125, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-132', 'murrany-restaurant', '132', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    183.00, 571.00, 'rectangle', 189.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 183,571 L 195,571 L 195,587 L 183,587 Z', 
    '{"type": "Polygon", "coordinates": [[[183, 571], [195, 571], [195, 587], [183, 587], [183, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-133', 'murrany-restaurant', '133', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    282.00, 571.00, 'rectangle', 288.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 282,571 L 294,571 L 294,587 L 282,587 Z', 
    '{"type": "Polygon", "coordinates": [[[282, 571], [294, 571], [294, 587], [282, 587], [282, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-134', 'murrany-restaurant', '134', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    379.00, 571.00, 'rectangle', 385.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 379,571 L 391,571 L 391,587 L 379,587 Z', 
    '{"type": "Polygon", "coordinates": [[[379, 571], [391, 571], [391, 587], [379, 587], [379, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-135', 'murrany-restaurant', '135', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    420.00, 571.00, 'rectangle', 425.50, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 420,571 L 431,571 L 431,587 L 420,587 Z', 
    '{"type": "Polygon", "coordinates": [[[420, 571], [431, 571], [431, 587], [420, 587], [420, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-136', 'murrany-restaurant', '136', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    480.00, 571.00, 'rectangle', 486.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 480,571 L 492,571 L 492,587 L 480,587 Z', 
    '{"type": "Polygon", "coordinates": [[[480, 571], [492, 571], [492, 587], [480, 587], [480, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-137', 'murrany-restaurant', '137', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    520.00, 571.00, 'rectangle', 526.00, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 520,571 L 532,571 L 532,587 L 520,587 Z', 
    '{"type": "Polygon", "coordinates": [[[520, 571], [532, 571], [532, 587], [520, 587], [520, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-138', 'murrany-restaurant', '138', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    580.00, 571.00, 'rectangle', 585.50, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 580,571 L 591,571 L 591,587 L 580,587 Z', 
    '{"type": "Polygon", "coordinates": [[[580, 571], [591, 571], [591, 587], [580, 587], [580, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-139', 'murrany-restaurant', '139', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    620.00, 571.00, 'rectangle', 625.50, 579.00, 
    0.0, 'Sea View (Section 7)', 'M 620,571 L 631,571 L 631,587 L 620,587 Z', 
    '{"type": "Polygon", "coordinates": [[[620, 571], [631, 571], [631, 587], [620, 587], [620, 571]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-140', 'murrany-restaurant', '140', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    322.00, 572.00, 'rectangle', 328.00, 590.50, 
    0.0, 'Sea View (Section 7)', 'M 322,572 L 334,572 L 334,609 L 322,609 Z', 
    '{"type": "Polygon", "coordinates": [[[322, 572], [334, 572], [334, 609], [322, 609], [322, 572]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-141', 'murrany-restaurant', '141', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    202.00, 583.00, 'circle', 208.50, 588.50, 
    0.0, 'Sea View (Section 7)', 'M 203.0,588.5 A 5.5,5.5 0 1,1 214.0,588.5 A 5.5,5.5 0 1,1 203.0,588.5', 
    '{"type": "Circle", "coordinates": {"center": [208.5, 588.5], "radius": 5.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-142', 'murrany-restaurant', '142', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    600.00, 586.00, 'circle', 606.50, 591.50, 
    0.0, 'Sea View (Section 7)', 'M 601.0,591.5 A 5.5,5.5 0 1,1 612.0,591.5 A 5.5,5.5 0 1,1 601.0,591.5', 
    '{"type": "Circle", "coordinates": {"center": [606.5, 591.5], "radius": 5.5}}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-143', 'murrany-restaurant', '143', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    104.00, 587.00, 'rectangle', 110.50, 592.00, 
    0.0, 'Sea View (Section 7)', 'M 104,587 L 117,587 L 117,597 L 104,597 Z', 
    '{"type": "Polygon", "coordinates": [[[104, 587], [117, 587], [117, 597], [104, 597], [104, 587]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-144', 'murrany-restaurant', '144', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    302.00, 587.00, 'rectangle', 308.00, 591.50, 
    0.0, 'Sea View (Section 7)', 'M 302,587 L 314,587 L 314,596 L 302,596 Z', 
    '{"type": "Polygon", "coordinates": [[[302, 587], [314, 587], [314, 596], [302, 596], [302, 587]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-145', 'murrany-restaurant', '145', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    399.00, 587.00, 'rectangle', 405.50, 592.00, 
    0.0, 'Sea View (Section 7)', 'M 399,587 L 412,587 L 412,597 L 399,597 Z', 
    '{"type": "Polygon", "coordinates": [[[399, 587], [412, 587], [412, 597], [399, 597], [399, 587]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-146', 'murrany-restaurant', '146', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    500.00, 587.00, 'rectangle', 506.50, 591.50, 
    0.0, 'Sea View (Section 7)', 'M 500,587 L 513,587 L 513,596 L 500,596 Z', 
    '{"type": "Polygon", "coordinates": [[[500, 587], [513, 587], [513, 596], [500, 596], [500, 587]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-147', 'murrany-restaurant', '147', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    182.00, 591.00, 'rectangle', 188.50, 599.50, 
    0.0, 'Sea View (Section 7)', 'M 182,591 L 195,591 L 195,608 L 182,608 Z', 
    '{"type": "Polygon", "coordinates": [[[182, 591], [195, 591], [195, 608], [182, 608], [182, 591]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-148', 'murrany-restaurant', '148', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    281.00, 591.00, 'rectangle', 287.50, 599.50, 
    0.0, 'Sea View (Section 7)', 'M 281,591 L 294,591 L 294,608 L 281,608 Z', 
    '{"type": "Polygon", "coordinates": [[[281, 591], [294, 591], [294, 608], [281, 608], [281, 591]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-149', 'murrany-restaurant', '149', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    85.00, 592.00, 'rectangle', 91.00, 600.00, 
    0.0, 'Sea View (Section 7)', 'M 85,592 L 97,592 L 97,608 L 85,608 Z', 
    '{"type": "Polygon", "coordinates": [[[85, 592], [97, 592], [97, 608], [85, 608], [85, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-150', 'murrany-restaurant', '150', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    125.00, 592.00, 'rectangle', 130.50, 600.50, 
    0.0, 'Sea View (Section 7)', 'M 125,592 L 136,592 L 136,609 L 125,609 Z', 
    '{"type": "Polygon", "coordinates": [[[125, 592], [136, 592], [136, 609], [125, 609], [125, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-151', 'murrany-restaurant', '151', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    224.00, 592.00, 'rectangle', 229.50, 600.50, 
    0.0, 'Sea View (Section 7)', 'M 224,592 L 235,592 L 235,609 L 224,609 Z', 
    '{"type": "Polygon", "coordinates": [[[224, 592], [235, 592], [235, 609], [224, 609], [224, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-152', 'murrany-restaurant', '152', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    379.00, 592.00, 'rectangle', 385.00, 600.00, 
    0.0, 'Sea View (Section 7)', 'M 379,592 L 391,592 L 391,608 L 379,608 Z', 
    '{"type": "Polygon", "coordinates": [[[379, 592], [391, 592], [391, 608], [379, 608], [379, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-153', 'murrany-restaurant', '153', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    420.00, 592.00, 'rectangle', 425.50, 599.50, 
    0.0, 'Sea View (Section 7)', 'M 420,592 L 431,592 L 431,607 L 420,607 Z', 
    '{"type": "Polygon", "coordinates": [[[420, 592], [431, 592], [431, 607], [420, 607], [420, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-154', 'murrany-restaurant', '154', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    480.00, 592.00, 'rectangle', 486.00, 600.00, 
    0.0, 'Sea View (Section 7)', 'M 480,592 L 492,592 L 492,608 L 480,608 Z', 
    '{"type": "Polygon", "coordinates": [[[480, 592], [492, 592], [492, 608], [480, 608], [480, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-155', 'murrany-restaurant', '155', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    520.00, 592.00, 'rectangle', 525.50, 600.50, 
    0.0, 'Sea View (Section 7)', 'M 520,592 L 531,592 L 531,609 L 520,609 Z', 
    '{"type": "Polygon", "coordinates": [[[520, 592], [531, 592], [531, 609], [520, 609], [520, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-156', 'murrany-restaurant', '156', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    579.00, 592.00, 'rectangle', 585.00, 600.00, 
    0.0, 'Sea View (Section 7)', 'M 579,592 L 591,592 L 591,608 L 579,608 Z', 
    '{"type": "Polygon", "coordinates": [[[579, 592], [591, 592], [591, 608], [579, 608], [579, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-157', 'murrany-restaurant', '157', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    620.00, 592.00, 'rectangle', 625.50, 600.50, 
    0.0, 'Sea View (Section 7)', 'M 620,592 L 631,592 L 631,609 L 620,609 Z', 
    '{"type": "Polygon", "coordinates": [[[620, 592], [631, 592], [631, 609], [620, 609], [620, 592]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-158', 'murrany-restaurant', '158', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    336.00, 680.00, 'rectangle', 347.00, 685.50, 
    0.0, 'Sea View (Section 7)', 'M 336,680 L 358,680 L 358,691 L 336,691 Z', 
    '{"type": "Polygon", "coordinates": [[[336, 680], [358, 680], [358, 691], [336, 691], [336, 680]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-159', 'murrany-restaurant', '159', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    363.00, 682.00, 'rectangle', 370.50, 686.50, 
    0.0, 'Sea View (Section 7)', 'M 363,682 L 378,682 L 378,691 L 363,691 Z', 
    '{"type": "Polygon", "coordinates": [[[363, 682], [378, 682], [378, 691], [363, 691], [363, 682]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-160', 'murrany-restaurant', '160', 2, 'Sea View (Section 7)', 
    false, false, 0.0,
    379.00, 682.00, 'rectangle', 385.00, 686.00, 
    0.0, 'Sea View (Section 7)', 'M 379,682 L 391,682 L 391,690 L 379,690 Z', 
    '{"type": "Polygon", "coordinates": [[[379, 682], [391, 682], [391, 690], [379, 690], [379, 682]]]}', true
);