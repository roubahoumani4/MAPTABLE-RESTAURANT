-- Clickable Table Points for Murray Restaurant
-- Restaurant ID: murrany-restaurant
-- Total Points: 66

-- Clear existing tables for this restaurant
DELETE FROM tables WHERE restaurant_id = 'murrany-restaurant';

-- Insert clickable points at actual table locations

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-001', 'murrany-restaurant', '1', 2, 'Main Dining', 
    false, false, 0.0,
    120.00, 120.00, 'rectangle', 120.00, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 120.0,120.0 L 130.0,120.0 L 130.0,130.0 L 120.0,130.0 Z',
    '{"type": "Point", "coordinates": [120.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-002', 'murrany-restaurant', '2', 4, 'Main Dining', 
    false, false, 0.0,
    300.00, 120.00, 'rectangle', 300.00, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 300.0,120.0 L 310.0,120.0 L 310.0,130.0 L 300.0,130.0 Z',
    '{"type": "Point", "coordinates": [300.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-003', 'murrany-restaurant', '3', 2, 'Main Dining', 
    false, false, 0.0,
    480.00, 120.00, 'rectangle', 480.00, 120.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 480.0,120.0 L 490.0,120.0 L 490.0,130.0 L 480.0,130.0 Z',
    '{"type": "Point", "coordinates": [480.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-004', 'murrany-restaurant', '4', 4, 'Smoking Area', 
    true, false, 0.0,
    660.00, 120.00, 'circle', 660.00, 120.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 660.0,120.0 L 670.0,120.0 L 670.0,130.0 L 660.0,130.0 Z',
    '{"type": "Point", "coordinates": [660.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-005', 'murrany-restaurant', '5', 2, 'Smoking Area', 
    true, false, 0.0,
    840.00, 120.00, 'circle', 840.00, 120.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 840.0,120.0 L 850.0,120.0 L 850.0,130.0 L 840.0,130.0 Z',
    '{"type": "Point", "coordinates": [840.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-006', 'murrany-restaurant', '6', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 120.00, 'circle', 1020.00, 120.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,120.0 L 1030.0,120.0 L 1030.0,130.0 L 1020.0,130.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 120.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-007', 'murrany-restaurant', '7', 4, 'Main Dining', 
    false, false, 0.0,
    120.00, 200.00, 'rectangle', 120.00, 200.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 120.0,200.0 L 130.0,200.0 L 130.0,210.0 L 120.0,210.0 Z',
    '{"type": "Point", "coordinates": [120.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-008', 'murrany-restaurant', '8', 6, 'Main Dining', 
    false, false, 0.0,
    300.00, 200.00, 'circle', 300.00, 200.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 300.0,200.0 L 310.0,200.0 L 310.0,210.0 L 300.0,210.0 Z',
    '{"type": "Point", "coordinates": [300.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-009', 'murrany-restaurant', '9', 4, 'Main Dining', 
    false, false, 0.0,
    480.00, 200.00, 'rectangle', 480.00, 200.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 480.0,200.0 L 490.0,200.0 L 490.0,210.0 L 480.0,210.0 Z',
    '{"type": "Point", "coordinates": [480.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-010', 'murrany-restaurant', '10', 6, 'Smoking Area', 
    true, false, 0.0,
    660.00, 200.00, 'circle', 660.00, 200.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 660.0,200.0 L 670.0,200.0 L 670.0,210.0 L 660.0,210.0 Z',
    '{"type": "Point", "coordinates": [660.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-011', 'murrany-restaurant', '11', 4, 'Smoking Area', 
    true, false, 0.0,
    840.00, 200.00, 'circle', 840.00, 200.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 840.0,200.0 L 850.0,200.0 L 850.0,210.0 L 840.0,210.0 Z',
    '{"type": "Point", "coordinates": [840.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-012', 'murrany-restaurant', '12', 6, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 200.00, 'circle', 1020.00, 200.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,200.0 L 1030.0,200.0 L 1030.0,210.0 L 1020.0,210.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 200.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-014', 'murrany-restaurant', '14', 2, 'Main Dining', 
    false, false, 0.0,
    120.00, 280.00, 'rectangle', 120.00, 280.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 120.0,280.0 L 130.0,280.0 L 130.0,290.0 L 120.0,290.0 Z',
    '{"type": "Point", "coordinates": [120.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-015', 'murrany-restaurant', '15', 4, 'Main Dining', 
    false, false, 0.0,
    300.00, 280.00, 'rectangle', 300.00, 280.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 300.0,280.0 L 310.0,280.0 L 310.0,290.0 L 300.0,290.0 Z',
    '{"type": "Point", "coordinates": [300.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-016', 'murrany-restaurant', '16', 2, 'Main Dining', 
    false, false, 0.0,
    480.00, 280.00, 'rectangle', 480.00, 280.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 480.0,280.0 L 490.0,280.0 L 490.0,290.0 L 480.0,290.0 Z',
    '{"type": "Point", "coordinates": [480.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-017', 'murrany-restaurant', '17', 4, 'Smoking Area', 
    true, false, 0.0,
    660.00, 280.00, 'circle', 660.00, 280.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 660.0,280.0 L 670.0,280.0 L 670.0,290.0 L 660.0,290.0 Z',
    '{"type": "Point", "coordinates": [660.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-018', 'murrany-restaurant', '18', 2, 'Smoking Area', 
    true, false, 0.0,
    840.00, 280.00, 'circle', 840.00, 280.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 840.0,280.0 L 850.0,280.0 L 850.0,290.0 L 840.0,290.0 Z',
    '{"type": "Point", "coordinates": [840.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-019', 'murrany-restaurant', '19', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 280.00, 'circle', 1020.00, 280.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,280.0 L 1030.0,280.0 L 1030.0,290.0 L 1020.0,290.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 280.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-020', 'murrany-restaurant', '20', 4, 'Main Dining', 
    false, false, 0.0,
    180.00, 360.00, 'rectangle', 180.00, 360.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 180.0,360.0 L 190.0,360.0 L 190.0,370.0 L 180.0,370.0 Z',
    '{"type": "Point", "coordinates": [180.0, 360.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-021', 'murrany-restaurant', '21', 4, 'Main Dining', 
    false, false, 0.0,
    420.00, 360.00, 'rectangle', 420.00, 360.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 420.0,360.0 L 430.0,360.0 L 430.0,370.0 L 420.0,370.0 Z',
    '{"type": "Point", "coordinates": [420.0, 360.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-022', 'murrany-restaurant', '22', 4, 'Smoking Area', 
    true, false, 0.0,
    660.00, 360.00, 'circle', 660.00, 360.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 660.0,360.0 L 670.0,360.0 L 670.0,370.0 L 660.0,370.0 Z',
    '{"type": "Point", "coordinates": [660.0, 360.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-023', 'murrany-restaurant', '23', 6, 'Main Dining', 
    false, false, 0.0,
    540.00, 400.00, 'circle', 540.00, 400.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 540.0,400.0 L 550.0,400.0 L 550.0,410.0 L 540.0,410.0 Z',
    '{"type": "Point", "coordinates": [540.0, 400.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-024', 'murrany-restaurant', '24', 6, 'Smoking Area', 
    true, false, 0.0,
    684.00, 400.00, 'circle', 684.00, 400.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 684.0,400.0 L 694.0,400.0 L 694.0,410.0 L 684.0,410.0 Z',
    '{"type": "Point", "coordinates": [684.0, 400.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-025', 'murrany-restaurant', '25', 6, 'Smoking Area', 
    true, false, 0.0,
    828.00, 400.00, 'circle', 828.00, 400.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 828.0,400.0 L 838.0,400.0 L 838.0,410.0 L 828.0,410.0 Z',
    '{"type": "Point", "coordinates": [828.0, 400.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-026', 'murrany-restaurant', '26', 6, 'Smoking Area', 
    true, false, 0.0,
    972.00, 400.00, 'circle', 972.00, 400.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 972.0,400.0 L 982.0,400.0 L 982.0,410.0 L 972.0,410.0 Z',
    '{"type": "Point", "coordinates": [972.0, 400.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-027', 'murrany-restaurant', '27', 6, 'Main Dining', 
    false, false, 0.0,
    540.00, 520.00, 'circle', 540.00, 520.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 540.0,520.0 L 550.0,520.0 L 550.0,530.0 L 540.0,530.0 Z',
    '{"type": "Point", "coordinates": [540.0, 520.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-028', 'murrany-restaurant', '28', 6, 'Smoking Area', 
    true, false, 0.0,
    684.00, 520.00, 'circle', 684.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 684.0,520.0 L 694.0,520.0 L 694.0,530.0 L 684.0,530.0 Z',
    '{"type": "Point", "coordinates": [684.0, 520.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-029', 'murrany-restaurant', '29', 6, 'Smoking Area', 
    true, false, 0.0,
    828.00, 520.00, 'circle', 828.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 828.0,520.0 L 838.0,520.0 L 838.0,530.0 L 828.0,530.0 Z',
    '{"type": "Point", "coordinates": [828.0, 520.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-030', 'murrany-restaurant', '30', 6, 'Smoking Area', 
    true, false, 0.0,
    972.00, 520.00, 'circle', 972.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 972.0,520.0 L 982.0,520.0 L 982.0,530.0 L 972.0,530.0 Z',
    '{"type": "Point", "coordinates": [972.0, 520.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-031', 'murrany-restaurant', '31', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 160.00, 'circle', 1020.00, 160.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,160.0 L 1030.0,160.0 L 1030.0,170.0 L 1020.0,170.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 160.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-032', 'murrany-restaurant', '32', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 256.00, 'circle', 1020.00, 256.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,256.0 L 1030.0,256.0 L 1030.0,266.0 L 1020.0,266.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 256.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-033', 'murrany-restaurant', '33', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 352.00, 'circle', 1020.00, 352.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,352.0 L 1030.0,352.0 L 1030.0,362.0 L 1020.0,362.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 352.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-034', 'murrany-restaurant', '34', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 448.00, 'circle', 1020.00, 448.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,448.0 L 1030.0,448.0 L 1030.0,458.0 L 1020.0,458.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 448.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-035', 'murrany-restaurant', '35', 4, 'Smoking Area', 
    true, false, 0.0,
    1020.00, 544.00, 'circle', 1020.00, 544.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1020.0,544.0 L 1030.0,544.0 L 1030.0,554.0 L 1020.0,554.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 544.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-036', 'murrany-restaurant', '36', 2, 'Main Dining', 
    false, false, 0.0,
    60.00, 440.00, 'rectangle', 60.00, 440.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 60.0,440.0 L 70.0,440.0 L 70.0,450.0 L 60.0,450.0 Z',
    '{"type": "Point", "coordinates": [60.0, 440.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-037', 'murrany-restaurant', '37', 4, 'Main Dining', 
    false, false, 0.0,
    204.00, 440.00, 'rectangle', 204.00, 440.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 204.0,440.0 L 214.0,440.0 L 214.0,450.0 L 204.0,450.0 Z',
    '{"type": "Point", "coordinates": [204.0, 440.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-038', 'murrany-restaurant', '38', 4, 'Main Dining', 
    false, false, 0.0,
    348.00, 440.00, 'rectangle', 348.00, 440.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 348.0,440.0 L 358.0,440.0 L 358.0,450.0 L 348.0,450.0 Z',
    '{"type": "Point", "coordinates": [348.0, 440.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-039', 'murrany-restaurant', '39', 2, 'Main Dining', 
    false, false, 0.0,
    492.00, 440.00, 'rectangle', 492.00, 440.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 492.0,440.0 L 502.0,440.0 L 502.0,450.0 L 492.0,450.0 Z',
    '{"type": "Point", "coordinates": [492.0, 440.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-040', 'murrany-restaurant', '40', 4, 'Main Dining', 
    false, false, 0.0,
    60.00, 560.00, 'rectangle', 60.00, 560.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 60.0,560.0 L 70.0,560.0 L 70.0,570.0 L 60.0,570.0 Z',
    '{"type": "Point", "coordinates": [60.0, 560.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-041', 'murrany-restaurant', '41', 4, 'Main Dining', 
    false, false, 0.0,
    204.00, 560.00, 'rectangle', 204.00, 560.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 204.0,560.0 L 214.0,560.0 L 214.0,570.0 L 204.0,570.0 Z',
    '{"type": "Point", "coordinates": [204.0, 560.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-042', 'murrany-restaurant', '42', 2, 'Main Dining', 
    false, false, 0.0,
    348.00, 560.00, 'rectangle', 348.00, 560.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 348.0,560.0 L 358.0,560.0 L 358.0,570.0 L 348.0,570.0 Z',
    '{"type": "Point", "coordinates": [348.0, 560.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-043', 'murrany-restaurant', '43', 4, 'Main Dining', 
    false, false, 0.0,
    492.00, 560.00, 'rectangle', 492.00, 560.00, 
    0.0, 'Main Dining (Sections 1-4)', 
    'M 492.0,560.0 L 502.0,560.0 L 502.0,570.0 L 492.0,570.0 Z',
    '{"type": "Point", "coordinates": [492.0, 560.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-044', 'murrany-restaurant', '44', 2, 'Smoking Area', 
    true, false, 0.0,
    600.00, 480.00, 'circle', 600.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 600.0,480.0 L 610.0,480.0 L 610.0,490.0 L 600.0,490.0 Z',
    '{"type": "Point", "coordinates": [600.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-045', 'murrany-restaurant', '45', 4, 'Smoking Area', 
    true, false, 0.0,
    696.00, 480.00, 'circle', 696.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 696.0,480.0 L 706.0,480.0 L 706.0,490.0 L 696.0,490.0 Z',
    '{"type": "Point", "coordinates": [696.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-046', 'murrany-restaurant', '46', 4, 'Smoking Area', 
    true, false, 0.0,
    792.00, 480.00, 'circle', 792.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 792.0,480.0 L 802.0,480.0 L 802.0,490.0 L 792.0,490.0 Z',
    '{"type": "Point", "coordinates": [792.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-047', 'murrany-restaurant', '47', 2, 'Smoking Area', 
    true, false, 0.0,
    888.00, 480.00, 'circle', 888.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 888.0,480.0 L 898.0,480.0 L 898.0,490.0 L 888.0,490.0 Z',
    '{"type": "Point", "coordinates": [888.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-048', 'murrany-restaurant', '48', 4, 'Smoking Area', 
    true, false, 0.0,
    984.00, 480.00, 'circle', 984.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 984.0,480.0 L 994.0,480.0 L 994.0,490.0 L 984.0,490.0 Z',
    '{"type": "Point", "coordinates": [984.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-049', 'murrany-restaurant', '49', 4, 'Smoking Area', 
    true, false, 0.0,
    1080.00, 480.00, 'circle', 1080.00, 480.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1080.0,480.0 L 1090.0,480.0 L 1090.0,490.0 L 1080.0,490.0 Z',
    '{"type": "Point", "coordinates": [1080.0, 480.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-050', 'murrany-restaurant', '50', 2, 'Smoking Area', 
    true, false, 0.0,
    600.00, 576.00, 'circle', 600.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 600.0,576.0 L 610.0,576.0 L 610.0,586.0 L 600.0,586.0 Z',
    '{"type": "Point", "coordinates": [600.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-051', 'murrany-restaurant', '51', 4, 'Smoking Area', 
    true, false, 0.0,
    696.00, 576.00, 'circle', 696.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 696.0,576.0 L 706.0,576.0 L 706.0,586.0 L 696.0,586.0 Z',
    '{"type": "Point", "coordinates": [696.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-052', 'murrany-restaurant', '52', 4, 'Smoking Area', 
    true, false, 0.0,
    792.00, 576.00, 'circle', 792.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 792.0,576.0 L 802.0,576.0 L 802.0,586.0 L 792.0,586.0 Z',
    '{"type": "Point", "coordinates": [792.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-053', 'murrany-restaurant', '53', 2, 'Smoking Area', 
    true, false, 0.0,
    888.00, 576.00, 'circle', 888.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 888.0,576.0 L 898.0,576.0 L 898.0,586.0 L 888.0,586.0 Z',
    '{"type": "Point", "coordinates": [888.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-054', 'murrany-restaurant', '54', 4, 'Smoking Area', 
    true, false, 0.0,
    984.00, 576.00, 'circle', 984.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 984.0,576.0 L 994.0,576.0 L 994.0,586.0 L 984.0,586.0 Z',
    '{"type": "Point", "coordinates": [984.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-055', 'murrany-restaurant', '55', 4, 'Smoking Area', 
    true, false, 0.0,
    1080.00, 576.00, 'circle', 1080.00, 576.00, 
    0.0, 'Smoking Area (Sections 5-6)', 
    'M 1080.0,576.0 L 1090.0,576.0 L 1090.0,586.0 L 1080.0,586.0 Z',
    '{"type": "Point", "coordinates": [1080.0, 576.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-056', 'murrany-restaurant', '56', 2, 'Sea View', 
    false, false, 0.0,
    120.00, 600.00, 'rectangle', 120.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 120.0,600.0 L 130.0,600.0 L 130.0,610.0 L 120.0,610.0 Z',
    '{"type": "Point", "coordinates": [120.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-057', 'murrany-restaurant', '57', 4, 'Sea View', 
    false, false, 0.0,
    300.00, 600.00, 'rectangle', 300.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 300.0,600.0 L 310.0,600.0 L 310.0,610.0 L 300.0,610.0 Z',
    '{"type": "Point", "coordinates": [300.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-058', 'murrany-restaurant', '58', 2, 'Sea View', 
    false, false, 0.0,
    480.00, 600.00, 'rectangle', 480.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 480.0,600.0 L 490.0,600.0 L 490.0,610.0 L 480.0,610.0 Z',
    '{"type": "Point", "coordinates": [480.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-059', 'murrany-restaurant', '59', 4, 'Sea View', 
    false, false, 0.0,
    660.00, 600.00, 'rectangle', 660.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 660.0,600.0 L 670.0,600.0 L 670.0,610.0 L 660.0,610.0 Z',
    '{"type": "Point", "coordinates": [660.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-060', 'murrany-restaurant', '60', 2, 'Sea View', 
    false, false, 0.0,
    840.00, 600.00, 'rectangle', 840.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 840.0,600.0 L 850.0,600.0 L 850.0,610.0 L 840.0,610.0 Z',
    '{"type": "Point", "coordinates": [840.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-061', 'murrany-restaurant', '61', 4, 'Sea View', 
    false, false, 0.0,
    1020.00, 600.00, 'rectangle', 1020.00, 600.00, 
    0.0, 'Sea View (Section 7)', 
    'M 1020.0,600.0 L 1030.0,600.0 L 1030.0,610.0 L 1020.0,610.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 600.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-062', 'murrany-restaurant', '62', 2, 'Sea View', 
    false, false, 0.0,
    120.00, 720.00, 'rectangle', 120.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 120.0,720.0 L 130.0,720.0 L 130.0,730.0 L 120.0,730.0 Z',
    '{"type": "Point", "coordinates": [120.0, 720.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-063', 'murrany-restaurant', '63', 4, 'Sea View', 
    false, false, 0.0,
    300.00, 720.00, 'rectangle', 300.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 300.0,720.0 L 310.0,720.0 L 310.0,730.0 L 300.0,730.0 Z',
    '{"type": "Point", "coordinates": [300.0, 720.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-064', 'murrany-restaurant', '64', 2, 'Sea View', 
    false, false, 0.0,
    480.00, 720.00, 'rectangle', 480.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 480.0,720.0 L 490.0,720.0 L 490.0,730.0 L 480.0,730.0 Z',
    '{"type": "Point", "coordinates": [480.0, 720.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-065', 'murrany-restaurant', '65', 4, 'Sea View', 
    false, false, 0.0,
    660.00, 720.00, 'rectangle', 660.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 660.0,720.0 L 670.0,720.0 L 670.0,730.0 L 660.0,730.0 Z',
    '{"type": "Point", "coordinates": [660.0, 720.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-066', 'murrany-restaurant', '66', 2, 'Sea View', 
    false, false, 0.0,
    840.00, 720.00, 'rectangle', 840.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 840.0,720.0 L 850.0,720.0 L 850.0,730.0 L 840.0,730.0 Z',
    '{"type": "Point", "coordinates": [840.0, 720.0]}', 
    true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-067', 'murrany-restaurant', '67', 4, 'Sea View', 
    false, false, 0.0,
    1020.00, 720.00, 'rectangle', 1020.00, 720.00, 
    0.0, 'Sea View (Section 7)', 
    'M 1020.0,720.0 L 1030.0,720.0 L 1030.0,730.0 L 1020.0,730.0 Z',
    '{"type": "Point", "coordinates": [1020.0, 720.0]}', 
    true
);