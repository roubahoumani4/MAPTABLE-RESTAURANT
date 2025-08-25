-- All 67 Tables for Murray Restaurant
-- Restaurant ID: murrany-restaurant
-- Total Tables: 66

-- Clear existing tables for this restaurant
DELETE FROM tables WHERE restaurant_id = 'murrany-restaurant';

-- Insert all 67 tables

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-001', 'murrany-restaurant', '1', 2, 'Main Dining', 
    false, false, 0.0,
    120.00, 120.00, 'rectangle', 150.00, 144.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 120.0,120.0 L 180.0,120.0 L 180.0,168.0 L 120.0,168.0 Z', 
    '{"type": "Polygon", "coordinates": [[[120.0, 120.0], [180.0, 120.0], [180.0, 168.0], [120.0, 168.0], [120.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-002', 'murrany-restaurant', '2', 4, 'Main Dining', 
    false, false, 0.0,
    300.00, 120.00, 'rectangle', 340.00, 152.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 300.0,120.0 L 380.0,120.0 L 380.0,184.0 L 300.0,184.0 Z', 
    '{"type": "Polygon", "coordinates": [[[300.0, 120.0], [380.0, 120.0], [380.0, 184.0], [300.0, 184.0], [300.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-003', 'murrany-restaurant', '3', 2, 'Main Dining', 
    false, false, 0.0,
    480.00, 120.00, 'rectangle', 510.00, 144.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 480.0,120.0 L 540.0,120.0 L 540.0,168.0 L 480.0,168.0 Z', 
    '{"type": "Polygon", "coordinates": [[[480.0, 120.0], [540.0, 120.0], [540.0, 168.0], [480.0, 168.0], [480.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-004', 'murrany-restaurant', '4', 4, 'Main Dining', 
    false, false, 0.0,
    660.00, 120.00, 'rectangle', 700.00, 152.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 660.0,120.0 L 740.0,120.0 L 740.0,184.0 L 660.0,184.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 120.0], [740.0, 120.0], [740.0, 184.0], [660.0, 184.0], [660.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-005', 'murrany-restaurant', '5', 2, 'Main Dining', 
    false, false, 0.0,
    840.00, 120.00, 'rectangle', 870.00, 144.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 840.0,120.0 L 900.0,120.0 L 900.0,168.0 L 840.0,168.0 Z', 
    '{"type": "Polygon", "coordinates": [[[840.0, 120.0], [900.0, 120.0], [900.0, 168.0], [840.0, 168.0], [840.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-006', 'murrany-restaurant', '6', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 120.00, 'rectangle', 1060.00, 152.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,120.0 L 1100.0,120.0 L 1100.0,184.0 L 1020.0,184.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 120.0], [1100.0, 120.0], [1100.0, 184.0], [1020.0, 184.0], [1020.0, 120.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-007', 'murrany-restaurant', '7', 4, 'Main Dining', 
    false, false, 0.0,
    120.00, 200.00, 'rectangle', 160.00, 232.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 120.0,200.0 L 200.0,200.0 L 200.0,264.0 L 120.0,264.0 Z', 
    '{"type": "Polygon", "coordinates": [[[120.0, 200.0], [200.0, 200.0], [200.0, 264.0], [120.0, 264.0], [120.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-008', 'murrany-restaurant', '8', 6, 'Main Dining', 
    false, false, 0.0,
    300.00, 200.00, 'rectangle', 350.00, 240.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 300.0,200.0 L 400.0,200.0 L 400.0,280.0 L 300.0,280.0 Z', 
    '{"type": "Polygon", "coordinates": [[[300.0, 200.0], [400.0, 200.0], [400.0, 280.0], [300.0, 280.0], [300.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-009', 'murrany-restaurant', '9', 4, 'Main Dining', 
    false, false, 0.0,
    480.00, 200.00, 'rectangle', 520.00, 232.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 480.0,200.0 L 560.0,200.0 L 560.0,264.0 L 480.0,264.0 Z', 
    '{"type": "Polygon", "coordinates": [[[480.0, 200.0], [560.0, 200.0], [560.0, 264.0], [480.0, 264.0], [480.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-010', 'murrany-restaurant', '10', 6, 'Main Dining', 
    false, false, 0.0,
    660.00, 200.00, 'rectangle', 710.00, 240.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 660.0,200.0 L 760.0,200.0 L 760.0,280.0 L 660.0,280.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 200.0], [760.0, 200.0], [760.0, 280.0], [660.0, 280.0], [660.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-011', 'murrany-restaurant', '11', 4, 'Main Dining', 
    false, false, 0.0,
    840.00, 200.00, 'rectangle', 880.00, 232.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 840.0,200.0 L 920.0,200.0 L 920.0,264.0 L 840.0,264.0 Z', 
    '{"type": "Polygon", "coordinates": [[[840.0, 200.0], [920.0, 200.0], [920.0, 264.0], [840.0, 264.0], [840.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-012', 'murrany-restaurant', '12', 6, 'Main Dining', 
    false, false, 0.0,
    1020.00, 200.00, 'rectangle', 1070.00, 240.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,200.0 L 1120.0,200.0 L 1120.0,280.0 L 1020.0,280.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 200.0], [1120.0, 200.0], [1120.0, 280.0], [1020.0, 280.0], [1020.0, 200.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-014', 'murrany-restaurant', '14', 2, 'Main Dining', 
    false, false, 0.0,
    120.00, 280.00, 'rectangle', 150.00, 304.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 120.0,280.0 L 180.0,280.0 L 180.0,328.0 L 120.0,328.0 Z', 
    '{"type": "Polygon", "coordinates": [[[120.0, 280.0], [180.0, 280.0], [180.0, 328.0], [120.0, 328.0], [120.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-015', 'murrany-restaurant', '15', 4, 'Main Dining', 
    false, false, 0.0,
    300.00, 280.00, 'rectangle', 340.00, 312.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 300.0,280.0 L 380.0,280.0 L 380.0,344.0 L 300.0,344.0 Z', 
    '{"type": "Polygon", "coordinates": [[[300.0, 280.0], [380.0, 280.0], [380.0, 344.0], [300.0, 344.0], [300.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-016', 'murrany-restaurant', '16', 2, 'Main Dining', 
    false, false, 0.0,
    480.00, 280.00, 'rectangle', 510.00, 304.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 480.0,280.0 L 540.0,280.0 L 540.0,328.0 L 480.0,328.0 Z', 
    '{"type": "Polygon", "coordinates": [[[480.0, 280.0], [540.0, 280.0], [540.0, 328.0], [480.0, 328.0], [480.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-017', 'murrany-restaurant', '17', 4, 'Main Dining', 
    false, false, 0.0,
    660.00, 280.00, 'rectangle', 700.00, 312.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 660.0,280.0 L 740.0,280.0 L 740.0,344.0 L 660.0,344.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 280.0], [740.0, 280.0], [740.0, 344.0], [660.0, 344.0], [660.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-018', 'murrany-restaurant', '18', 2, 'Main Dining', 
    false, false, 0.0,
    840.00, 280.00, 'rectangle', 870.00, 304.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 840.0,280.0 L 900.0,280.0 L 900.0,328.0 L 840.0,328.0 Z', 
    '{"type": "Polygon", "coordinates": [[[840.0, 280.0], [900.0, 280.0], [900.0, 328.0], [840.0, 328.0], [840.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-019', 'murrany-restaurant', '19', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 280.00, 'rectangle', 1060.00, 312.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,280.0 L 1100.0,280.0 L 1100.0,344.0 L 1020.0,344.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 280.0], [1100.0, 280.0], [1100.0, 344.0], [1020.0, 344.0], [1020.0, 280.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-020', 'murrany-restaurant', '20', 4, 'Main Dining', 
    false, false, 0.0,
    180.00, 360.00, 'rectangle', 220.00, 392.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 180.0,360.0 L 260.0,360.0 L 260.0,424.0 L 180.0,424.0 Z', 
    '{"type": "Polygon", "coordinates": [[[180.0, 360.0], [260.0, 360.0], [260.0, 424.0], [180.0, 424.0], [180.0, 360.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-021', 'murrany-restaurant', '21', 4, 'Main Dining', 
    false, false, 0.0,
    420.00, 360.00, 'rectangle', 460.00, 392.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 420.0,360.0 L 500.0,360.0 L 500.0,424.0 L 420.0,424.0 Z', 
    '{"type": "Polygon", "coordinates": [[[420.0, 360.0], [500.0, 360.0], [500.0, 424.0], [420.0, 424.0], [420.0, 360.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-022', 'murrany-restaurant', '22', 4, 'Main Dining', 
    false, false, 0.0,
    660.00, 360.00, 'rectangle', 700.00, 392.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 660.0,360.0 L 740.0,360.0 L 740.0,424.0 L 660.0,424.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 360.0], [740.0, 360.0], [740.0, 424.0], [660.0, 424.0], [660.0, 360.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-031', 'murrany-restaurant', '31', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 160.00, 'rectangle', 1060.00, 192.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,160.0 L 1100.0,160.0 L 1100.0,224.0 L 1020.0,224.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 160.0], [1100.0, 160.0], [1100.0, 224.0], [1020.0, 224.0], [1020.0, 160.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-032', 'murrany-restaurant', '32', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 256.00, 'rectangle', 1060.00, 288.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,256.0 L 1100.0,256.0 L 1100.0,320.0 L 1020.0,320.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 256.0], [1100.0, 256.0], [1100.0, 320.0], [1020.0, 320.0], [1020.0, 256.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-033', 'murrany-restaurant', '33', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 352.00, 'rectangle', 1060.00, 384.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,352.0 L 1100.0,352.0 L 1100.0,416.0 L 1020.0,416.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 352.0], [1100.0, 352.0], [1100.0, 416.0], [1020.0, 416.0], [1020.0, 352.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-034', 'murrany-restaurant', '34', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 448.00, 'rectangle', 1060.00, 480.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,448.0 L 1100.0,448.0 L 1100.0,512.0 L 1020.0,512.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 448.0], [1100.0, 448.0], [1100.0, 512.0], [1020.0, 512.0], [1020.0, 448.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-035', 'murrany-restaurant', '35', 4, 'Main Dining', 
    false, false, 0.0,
    1020.00, 544.00, 'rectangle', 1060.00, 576.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 1020.0,544.0 L 1100.0,544.0 L 1100.0,608.0 L 1020.0,608.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 544.0], [1100.0, 544.0], [1100.0, 608.0], [1020.0, 608.0], [1020.0, 544.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-023', 'murrany-restaurant', '23', 6, 'Main Dining', 
    false, false, 0.0,
    540.00, 400.00, 'circle', 590.00, 450.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 540.0,450.0 A 50.0,50.0 0 1,1 640.0,450.0 A 50.0,50.0 0 1,1 540.0,450.0', 
    '{"type": "Circle", "center": [590.0, 450.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-024', 'murrany-restaurant', '24', 6, 'Main Dining', 
    false, false, 0.0,
    684.00, 400.00, 'circle', 734.00, 450.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 684.0,450.0 A 50.0,50.0 0 1,1 784.0,450.0 A 50.0,50.0 0 1,1 684.0,450.0', 
    '{"type": "Circle", "center": [734.0, 450.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-025', 'murrany-restaurant', '25', 6, 'Main Dining', 
    false, false, 0.0,
    828.00, 400.00, 'circle', 878.00, 450.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 828.0,450.0 A 50.0,50.0 0 1,1 928.0,450.0 A 50.0,50.0 0 1,1 828.0,450.0', 
    '{"type": "Circle", "center": [878.0, 450.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-026', 'murrany-restaurant', '26', 6, 'Main Dining', 
    false, false, 0.0,
    972.00, 400.00, 'circle', 1022.00, 450.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 972.0,450.0 A 50.0,50.0 0 1,1 1072.0,450.0 A 50.0,50.0 0 1,1 972.0,450.0', 
    '{"type": "Circle", "center": [1022.0, 450.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-027', 'murrany-restaurant', '27', 6, 'Main Dining', 
    false, false, 0.0,
    540.00, 520.00, 'circle', 590.00, 570.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 540.0,570.0 A 50.0,50.0 0 1,1 640.0,570.0 A 50.0,50.0 0 1,1 540.0,570.0', 
    '{"type": "Circle", "center": [590.0, 570.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-028', 'murrany-restaurant', '28', 6, 'Main Dining', 
    false, false, 0.0,
    684.00, 520.00, 'circle', 734.00, 570.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 684.0,570.0 A 50.0,50.0 0 1,1 784.0,570.0 A 50.0,50.0 0 1,1 684.0,570.0', 
    '{"type": "Circle", "center": [734.0, 570.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-029', 'murrany-restaurant', '29', 6, 'Main Dining', 
    false, false, 0.0,
    828.00, 520.00, 'circle', 878.00, 570.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 828.0,570.0 A 50.0,50.0 0 1,1 928.0,570.0 A 50.0,50.0 0 1,1 828.0,570.0', 
    '{"type": "Circle", "center": [878.0, 570.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-030', 'murrany-restaurant', '30', 6, 'Main Dining', 
    false, false, 0.0,
    972.00, 520.00, 'circle', 1022.00, 570.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 972.0,570.0 A 50.0,50.0 0 1,1 1072.0,570.0 A 50.0,50.0 0 1,1 972.0,570.0', 
    '{"type": "Circle", "center": [1022.0, 570.0], "radius": 50.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-036', 'murrany-restaurant', '36', 2, 'Main Dining', 
    false, false, 0.0,
    60.00, 440.00, 'rectangle', 90.00, 464.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 60.0,440.0 L 120.0,440.0 L 120.0,488.0 L 60.0,488.0 Z', 
    '{"type": "Polygon", "coordinates": [[[60.0, 440.0], [120.0, 440.0], [120.0, 488.0], [60.0, 488.0], [60.0, 440.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-037', 'murrany-restaurant', '37', 4, 'Main Dining', 
    false, false, 0.0,
    204.00, 440.00, 'rectangle', 244.00, 472.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 204.0,440.0 L 284.0,440.0 L 284.0,504.0 L 204.0,504.0 Z', 
    '{"type": "Polygon", "coordinates": [[[204.0, 440.0], [284.0, 440.0], [284.0, 504.0], [204.0, 504.0], [204.0, 440.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-038', 'murrany-restaurant', '38', 4, 'Main Dining', 
    false, false, 0.0,
    348.00, 440.00, 'rectangle', 388.00, 472.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 348.0,440.0 L 428.0,440.0 L 428.0,504.0 L 348.0,504.0 Z', 
    '{"type": "Polygon", "coordinates": [[[348.0, 440.0], [428.0, 440.0], [428.0, 504.0], [348.0, 504.0], [348.0, 440.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-039', 'murrany-restaurant', '39', 2, 'Main Dining', 
    false, false, 0.0,
    492.00, 440.00, 'rectangle', 522.00, 464.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 492.0,440.0 L 552.0,440.0 L 552.0,488.0 L 492.0,488.0 Z', 
    '{"type": "Polygon", "coordinates": [[[492.0, 440.0], [552.0, 440.0], [552.0, 488.0], [492.0, 488.0], [492.0, 440.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-040', 'murrany-restaurant', '40', 4, 'Main Dining', 
    false, false, 0.0,
    60.00, 560.00, 'rectangle', 100.00, 592.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 60.0,560.0 L 140.0,560.0 L 140.0,624.0 L 60.0,624.0 Z', 
    '{"type": "Polygon", "coordinates": [[[60.0, 560.0], [140.0, 560.0], [140.0, 624.0], [60.0, 624.0], [60.0, 560.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-041', 'murrany-restaurant', '41', 4, 'Main Dining', 
    false, false, 0.0,
    204.00, 560.00, 'rectangle', 244.00, 592.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 204.0,560.0 L 284.0,560.0 L 284.0,624.0 L 204.0,624.0 Z', 
    '{"type": "Polygon", "coordinates": [[[204.0, 560.0], [284.0, 560.0], [284.0, 624.0], [204.0, 624.0], [204.0, 560.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-042', 'murrany-restaurant', '42', 2, 'Main Dining', 
    false, false, 0.0,
    348.00, 560.00, 'rectangle', 378.00, 584.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 348.0,560.0 L 408.0,560.0 L 408.0,608.0 L 348.0,608.0 Z', 
    '{"type": "Polygon", "coordinates": [[[348.0, 560.0], [408.0, 560.0], [408.0, 608.0], [348.0, 608.0], [348.0, 560.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-043', 'murrany-restaurant', '43', 4, 'Main Dining', 
    false, false, 0.0,
    492.00, 560.00, 'rectangle', 532.00, 592.00, 
    0.0, 'Main Dining (Sections 1-4)', 'M 492.0,560.0 L 572.0,560.0 L 572.0,624.0 L 492.0,624.0 Z', 
    '{"type": "Polygon", "coordinates": [[[492.0, 560.0], [572.0, 560.0], [572.0, 624.0], [492.0, 624.0], [492.0, 560.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-044', 'murrany-restaurant', '44', 2, 'Smoking Area', 
    true, false, 0.0,
    600.00, 480.00, 'circle', 630.00, 510.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 600.0,510.0 A 30.0,30.0 0 1,1 660.0,510.0 A 30.0,30.0 0 1,1 600.0,510.0', 
    '{"type": "Circle", "center": [630.0, 510.0], "radius": 30.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-045', 'murrany-restaurant', '45', 4, 'Smoking Area', 
    true, false, 0.0,
    696.00, 480.00, 'circle', 736.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 696.0,520.0 A 40.0,40.0 0 1,1 776.0,520.0 A 40.0,40.0 0 1,1 696.0,520.0', 
    '{"type": "Circle", "center": [736.0, 520.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-046', 'murrany-restaurant', '46', 4, 'Smoking Area', 
    true, false, 0.0,
    792.00, 480.00, 'circle', 832.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 792.0,520.0 A 40.0,40.0 0 1,1 872.0,520.0 A 40.0,40.0 0 1,1 792.0,520.0', 
    '{"type": "Circle", "center": [832.0, 520.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-047', 'murrany-restaurant', '47', 2, 'Smoking Area', 
    true, false, 0.0,
    888.00, 480.00, 'circle', 918.00, 510.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 888.0,510.0 A 30.0,30.0 0 1,1 948.0,510.0 A 30.0,30.0 0 1,1 888.0,510.0', 
    '{"type": "Circle", "center": [918.0, 510.0], "radius": 30.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-048', 'murrany-restaurant', '48', 4, 'Smoking Area', 
    true, false, 0.0,
    984.00, 480.00, 'circle', 1024.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 984.0,520.0 A 40.0,40.0 0 1,1 1064.0,520.0 A 40.0,40.0 0 1,1 984.0,520.0', 
    '{"type": "Circle", "center": [1024.0, 520.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-049', 'murrany-restaurant', '49', 4, 'Smoking Area', 
    true, false, 0.0,
    1080.00, 480.00, 'circle', 1120.00, 520.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 1080.0,520.0 A 40.0,40.0 0 1,1 1160.0,520.0 A 40.0,40.0 0 1,1 1080.0,520.0', 
    '{"type": "Circle", "center": [1120.0, 520.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-050', 'murrany-restaurant', '50', 2, 'Smoking Area', 
    true, false, 0.0,
    600.00, 576.00, 'circle', 630.00, 606.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 600.0,606.0 A 30.0,30.0 0 1,1 660.0,606.0 A 30.0,30.0 0 1,1 600.0,606.0', 
    '{"type": "Circle", "center": [630.0, 606.0], "radius": 30.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-051', 'murrany-restaurant', '51', 4, 'Smoking Area', 
    true, false, 0.0,
    696.00, 576.00, 'circle', 736.00, 616.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 696.0,616.0 A 40.0,40.0 0 1,1 776.0,616.0 A 40.0,40.0 0 1,1 696.0,616.0', 
    '{"type": "Circle", "center": [736.0, 616.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-052', 'murrany-restaurant', '52', 4, 'Smoking Area', 
    true, false, 0.0,
    792.00, 576.00, 'circle', 832.00, 616.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 792.0,616.0 A 40.0,40.0 0 1,1 872.0,616.0 A 40.0,40.0 0 1,1 792.0,616.0', 
    '{"type": "Circle", "center": [832.0, 616.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-053', 'murrany-restaurant', '53', 2, 'Smoking Area', 
    true, false, 0.0,
    888.00, 576.00, 'circle', 918.00, 606.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 888.0,606.0 A 30.0,30.0 0 1,1 948.0,606.0 A 30.0,30.0 0 1,1 888.0,606.0', 
    '{"type": "Circle", "center": [918.0, 606.0], "radius": 30.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-054', 'murrany-restaurant', '54', 4, 'Smoking Area', 
    true, false, 0.0,
    984.00, 576.00, 'circle', 1024.00, 616.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 984.0,616.0 A 40.0,40.0 0 1,1 1064.0,616.0 A 40.0,40.0 0 1,1 984.0,616.0', 
    '{"type": "Circle", "center": [1024.0, 616.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-055', 'murrany-restaurant', '55', 4, 'Smoking Area', 
    true, false, 0.0,
    1080.00, 576.00, 'circle', 1120.00, 616.00, 
    0.0, 'Smoking Area (Sections 5-6)', 'M 1080.0,616.0 A 40.0,40.0 0 1,1 1160.0,616.0 A 40.0,40.0 0 1,1 1080.0,616.0', 
    '{"type": "Circle", "center": [1120.0, 616.0], "radius": 40.0}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-056', 'murrany-restaurant', '56', 2, 'Sea View', 
    false, false, 0.0,
    120.00, 600.00, 'rectangle', 150.00, 624.00, 
    0.0, 'Sea View (Section 7)', 'M 120.0,600.0 L 180.0,600.0 L 180.0,648.0 L 120.0,648.0 Z', 
    '{"type": "Polygon", "coordinates": [[[120.0, 600.0], [180.0, 600.0], [180.0, 648.0], [120.0, 648.0], [120.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-057', 'murrany-restaurant', '57', 4, 'Sea View', 
    false, false, 0.0,
    300.00, 600.00, 'rectangle', 340.00, 632.00, 
    0.0, 'Sea View (Section 7)', 'M 300.0,600.0 L 380.0,600.0 L 380.0,664.0 L 300.0,664.0 Z', 
    '{"type": "Polygon", "coordinates": [[[300.0, 600.0], [380.0, 600.0], [380.0, 664.0], [300.0, 664.0], [300.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-058', 'murrany-restaurant', '58', 2, 'Sea View', 
    false, false, 0.0,
    480.00, 600.00, 'rectangle', 510.00, 624.00, 
    0.0, 'Sea View (Section 7)', 'M 480.0,600.0 L 540.0,600.0 L 540.0,648.0 L 480.0,648.0 Z', 
    '{"type": "Polygon", "coordinates": [[[480.0, 600.0], [540.0, 600.0], [540.0, 648.0], [480.0, 648.0], [480.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-059', 'murrany-restaurant', '59', 4, 'Sea View', 
    false, false, 0.0,
    660.00, 600.00, 'rectangle', 700.00, 632.00, 
    0.0, 'Sea View (Section 7)', 'M 660.0,600.0 L 740.0,600.0 L 740.0,664.0 L 660.0,664.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 600.0], [740.0, 600.0], [740.0, 664.0], [660.0, 664.0], [660.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-060', 'murrany-restaurant', '60', 2, 'Sea View', 
    false, false, 0.0,
    840.00, 600.00, 'rectangle', 870.00, 624.00, 
    0.0, 'Sea View (Section 7)', 'M 840.0,600.0 L 900.0,600.0 L 900.0,648.0 L 840.0,648.0 Z', 
    '{"type": "Polygon", "coordinates": [[[840.0, 600.0], [900.0, 600.0], [900.0, 648.0], [840.0, 648.0], [840.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-061', 'murrany-restaurant', '61', 4, 'Sea View', 
    false, false, 0.0,
    1020.00, 600.00, 'rectangle', 1060.00, 632.00, 
    0.0, 'Sea View (Section 7)', 'M 1020.0,600.0 L 1100.0,600.0 L 1100.0,664.0 L 1020.0,664.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 600.0], [1100.0, 600.0], [1100.0, 664.0], [1020.0, 664.0], [1020.0, 600.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-062', 'murrany-restaurant', '62', 2, 'Sea View', 
    false, false, 0.0,
    120.00, 720.00, 'rectangle', 150.00, 744.00, 
    0.0, 'Sea View (Section 7)', 'M 120.0,720.0 L 180.0,720.0 L 180.0,768.0 L 120.0,768.0 Z', 
    '{"type": "Polygon", "coordinates": [[[120.0, 720.0], [180.0, 720.0], [180.0, 768.0], [120.0, 768.0], [120.0, 720.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-063', 'murrany-restaurant', '63', 4, 'Sea View', 
    false, false, 0.0,
    300.00, 720.00, 'rectangle', 340.00, 752.00, 
    0.0, 'Sea View (Section 7)', 'M 300.0,720.0 L 380.0,720.0 L 380.0,784.0 L 300.0,784.0 Z', 
    '{"type": "Polygon", "coordinates": [[[300.0, 720.0], [380.0, 720.0], [380.0, 784.0], [300.0, 784.0], [300.0, 720.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-064', 'murrany-restaurant', '64', 2, 'Sea View', 
    false, false, 0.0,
    480.00, 720.00, 'rectangle', 510.00, 744.00, 
    0.0, 'Sea View (Section 7)', 'M 480.0,720.0 L 540.0,720.0 L 540.0,768.0 L 480.0,768.0 Z', 
    '{"type": "Polygon", "coordinates": [[[480.0, 720.0], [540.0, 720.0], [540.0, 768.0], [480.0, 768.0], [480.0, 720.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-065', 'murrany-restaurant', '65', 4, 'Sea View', 
    false, false, 0.0,
    660.00, 720.00, 'rectangle', 700.00, 752.00, 
    0.0, 'Sea View (Section 7)', 'M 660.0,720.0 L 740.0,720.0 L 740.0,784.0 L 660.0,784.0 Z', 
    '{"type": "Polygon", "coordinates": [[[660.0, 720.0], [740.0, 720.0], [740.0, 784.0], [660.0, 784.0], [660.0, 720.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-066', 'murrany-restaurant', '66', 2, 'Sea View', 
    false, false, 0.0,
    840.00, 720.00, 'rectangle', 870.00, 744.00, 
    0.0, 'Sea View (Section 7)', 'M 840.0,720.0 L 900.0,720.0 L 900.0,768.0 L 840.0,768.0 Z', 
    '{"type": "Polygon", "coordinates": [[[840.0, 720.0], [900.0, 720.0], [900.0, 768.0], [840.0, 768.0], [840.0, 720.0]]]}', true
);

INSERT INTO tables (
    id, restaurant_id, label, capacity, zone, smoking, accessible, min_spend,
    x, y, shape, centroid_x, centroid_y, rotation, section, svg_path, geometry, is_active
) VALUES (
    'table-067', 'murrany-restaurant', '67', 4, 'Sea View', 
    false, false, 0.0,
    1020.00, 720.00, 'rectangle', 1060.00, 752.00, 
    0.0, 'Sea View (Section 7)', 'M 1020.0,720.0 L 1100.0,720.0 L 1100.0,784.0 L 1020.0,784.0 Z', 
    '{"type": "Polygon", "coordinates": [[[1020.0, 720.0], [1100.0, 720.0], [1100.0, 784.0], [1020.0, 784.0], [1020.0, 720.0]]]}', true
);