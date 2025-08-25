import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ZoomIn, ZoomOut, RotateCcw, Users, MapPin } from 'lucide-react';

interface Table {
  id: string;
  label: string;
  capacity: number;
  section: string;
  zone: string;
  smoking: boolean;
  accessible: boolean;
  minSpend: number;
  x: number;
  y: number;
  shape: string;
  centroid_x: number;
  centroid_y: number;
  rotation: number;
  svg_path: string;
  geometry: any;
  isActive: boolean;
}

interface InteractiveFloorMapProps {
  mapSrc: string;
  tables: Table[];
  onTableSelect?: (table: Table, bookingData?: any) => void;
  showTableDetails?: boolean;
  restaurantId: string;
}

export default function InteractiveFloorMap({
  mapSrc,
  tables,
  onTableSelect,
  showTableDetails = true,
  restaurantId
}: InteractiveFloorMapProps) {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const handleTableClick = (table: Table) => {
    if (onTableSelect) {
      onTableSelect(table, {
        partySize: table.capacity,
        date: new Date().toISOString().split('T')[0],
        startTime: '19:00',
        endTime: '21:00'
      });
    } else {
      setSelectedTable(table);
      setIsDialogOpen(true);
    }
  };

  const handleTableHover = (tableId: string | null) => {
    setHoveredTable(tableId);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
  };

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleZoomIn}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleZoomOut}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-gray-600">
          Zoom: {Math.round(zoom * 100)}%
        </div>
      </div>

      {/* Section Legend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold text-blue-600 mb-2">Main Dining (Sections 1-4)</h4>
            <p className="text-sm text-gray-600">Indoor dining with mixed table configurations</p>
            <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700 border-blue-200">
              {tables.filter(t => t.zone.includes('Main Dining')).length} tables
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold text-orange-600 mb-2">Smoking Area (Sections 5-6)</h4>
            <p className="text-sm text-gray-600">Designated smoking sections</p>
            <Badge variant="outline" className="mt-2 bg-orange-50 text-orange-700 border-orange-200">
              {tables.filter(t => t.smoking).length} tables
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold text-teal-600 mb-2">Sea View (Section 7)</h4>
            <p className="text-sm text-gray-600">Outdoor dining with sea views</p>
            <Badge variant="outline" className="mt-2 bg-teal-50 text-teal-700 border-teal-200">
              {tables.filter(t => t.zone.includes('Sea View')).length} tables
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Floor Map */}
      <Card>
        <CardContent className="p-6">
          <div className="relative bg-gray-50 rounded-xl border-2 border-gray-200 min-h-96 overflow-hidden">
            <div 
              className="w-full h-full transition-transform duration-200"
              style={{ 
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                minHeight: '800px'
              }}
            >
              {/* Base floor map image */}
              <img 
                src={mapSrc} 
                alt="Restaurant Floor Map" 
                className="absolute inset-0 w-full h-full object-contain"
                style={{ pointerEvents: 'none' }}
                onLoad={handleImageLoad}
              />
              
              {/* Interactive table overlays - Transparent clickable areas */}
              {tables.map((table) => (
                <button
                  key={table.id}
                  className="absolute flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg border-2 border-transparent hover:border-white hover:border-opacity-30"
                  style={{
                    left: `${table.x}px`,
                    top: `${table.y}px`,
                    width: table.capacity <= 2 ? '60px' : table.capacity <= 4 ? '80px' : '100px',
                    height: table.capacity <= 2 ? '48px' : table.capacity <= 4 ? '64px' : '80px',
                    borderRadius: table.shape === 'circle' ? '50%' : '8px',
                    zIndex: selectedTable?.id === table.id ? 10 : 1,
                  }}
                  onClick={() => handleTableClick(table)}
                  onMouseEnter={() => handleTableHover(table.id)}
                  onMouseLeave={() => handleTableHover(null)}
                  title={`Table ${table.label} - ${table.capacity} people - ${table.zone}`}
                >
                  {/* Only show content on hover or selection */}
                  {(hoveredTable === table.id || selectedTable?.id === table.id) && (
                    <>
                      <span className="font-bold text-white drop-shadow-lg bg-black bg-opacity-50 px-2 py-1 rounded">
                        {table.label}
                      </span>
                      <span className="text-xs text-white drop-shadow-lg bg-black bg-opacity-50 px-2 py-1 rounded mt-1">
                        {table.capacity}p
                      </span>
                    </>
                  )}
                  
                  {/* Selection indicator */}
                  {selectedTable?.id === table.id && (
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table Details Dialog */}
      {showTableDetails && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Table {selectedTable?.label} Details</DialogTitle>
            </DialogHeader>
            
            {selectedTable && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Capacity:</span>
                    <Badge variant="secondary">{selectedTable.capacity} people</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Zone:</span>
                    <Badge variant="outline">{selectedTable.zone}</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Section:</span>
                    <span className="text-sm font-medium">{selectedTable.section}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Shape:</span>
                    <span className="text-sm font-medium capitalize">{selectedTable.shape}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Smoking:</span>
                    <Badge variant={selectedTable.smoking ? "destructive" : "secondary"}>
                      {selectedTable.smoking ? "Yes" : "No"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Accessible:</span>
                    <Badge variant={selectedTable.accessible ? "default" : "secondary"}>
                      {selectedTable.accessible ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button 
                    className="w-full"
                    onClick={() => {
                      // Handle table selection for booking
                      if (onTableSelect) {
                        onTableSelect(selectedTable);
                      }
                      setIsDialogOpen(false);
                    }}
                  >
                    Select This Table
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
