# Floor Plan Setup Guide

This guide explains how to set up the restaurant floor plan with your existing floor plan image.

## Overview

The floor plan displays your existing `floormap.png` image with database tables overlaid on top. The layout is divided into 7 sections as requested:

- **Sections 1-4**: Main dining area (displayed together)
- **Sections 5-6**: Smoking area (displayed together) 
- **Section 7**: Sea view area (displayed separately)

## Database Setup

### 1. Populate Tables

Use the provided SQL script to populate all 67 tables:

```bash
# Update the restaurant_id in the script first
psql -d your_database -f setup_floorplan.sql
```

**Important**: Before running the script, update the `restaurant-id-here` placeholder with your actual restaurant ID.

## How It Works

### Floor Plan Display
- The component displays your existing `floormap.png` image
- Database tables are overlaid on top of the image
- Tables are positioned using x, y coordinates from the database
- The image serves as the visual reference - no custom positioning needed

### Table Structure
- **67 tables** total across all sections
- Each table has basic properties (capacity, shape, smoking status, zone)
- Tables are positioned at (0,0) by default - you can update coordinates later if needed
- The floor plan image shows the actual table layout

### Section Grouping
- **Sections 1-4**: Main dining area (blue label)
- **Sections 5-6**: Smoking area (orange label) 
- **Section 7**: Sea view area (teal label)

## Table Details

### Section 1: Main Dining (Tables 1-22)
- **Tables 1-22**: 2-seater rectangular tables
- **Capacity**: 2 people each
- **Shape**: Rectangle
- **Smoking**: No

### Section 2: Main Dining (Tables 31-35)
- **Tables 31-35**: 2-seater rectangular tables
- **Capacity**: 2 people each
- **Shape**: Rectangle
- **Smoking**: No

### Section 3: Main Dining (Tables 23-30)
- **Tables 23-30**: 4-seater round tables
- **Capacity**: 4 people each
- **Shape**: Circle
- **Smoking**: No

### Section 4: Main Dining (Tables 36-43)
- **Tables 36-39**: 2-seater rectangular tables
- **Tables 40-43**: 4-seater round tables
- **Mixed capacities**: 2 and 4 people
- **Mixed shapes**: Rectangle and Circle
- **Smoking**: No

### Section 5: Smoking Area (Tables 44-49)
- **Tables 44-49**: 4-seater square tables
- **Capacity**: 4 people each
- **Shape**: Square
- **Smoking**: Yes

### Section 6: Smoking Area (Tables 50-55)
- **Tables 50-55**: 4-seater round tables
- **Capacity**: 4 people each
- **Shape**: Circle
- **Smoking**: No (but in smoking area)

### Section 7: Sea View (Tables 56-67)
- **Tables 56-67**: 4-seater square tables
- **Capacity**: 4 people each
- **Shape**: Square
- **Smoking**: No
- **Special**: Premium sea view location

## Component Features

The `FloorPlan` component provides:

- **Image Display**: Shows your existing floor plan image
- **Table Overlays**: Interactive tables positioned from database
- **Zoom Controls**: Zoom in/out and reset view
- **Section Labels**: Clear visual separation of dining areas
- **Table Status**: Color-coded availability
- **Responsive Design**: Works on all device sizes

## Customization

### Update Table Positions
If you want to position tables exactly on the image:

```sql
-- Example: Update table 1 position
UPDATE tables SET x = 100, y = 50 WHERE label = '1';

-- Update multiple tables
UPDATE tables SET x = 200, y = 100 WHERE zone = 'Main';
```

### Modify Section Grouping
Update the section labels in the component:

```tsx
// In FloorPlan.tsx
<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold">
  Sections 1-4: Main Dining
</div>
```

### Change Colors
Modify the CSS classes for different table types:

```tsx
const baseColor = table.smoking ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600';
```

## Troubleshooting

### Tables Not Showing
- Ensure the database has been populated with the SQL script
- Check that table labels match between database and component
- Verify restaurant ID is correct

### Image Not Loading
- Ensure `floormap.png` exists in `client/src/assets/images/`
- Check the image path in the component
- Verify image format and size

### Performance Issues
- The component renders 67 tables with overlays
- Consider optimizing image size if needed
- Tables at (0,0) won't be visible - update coordinates if needed

## Next Steps

1. **Populate the database** with the 67 tables
2. **Test the component** - it will show your floor plan image with database tables
3. **Update coordinates** if you want precise table positioning on the image

## Support

For issues or questions:
1. Check database tables are populated correctly
2. Verify image file exists and loads
3. Check browser console for errors
4. Ensure database tables have correct structure

The component is designed to work with your existing floor plan image - no custom positioning required!
