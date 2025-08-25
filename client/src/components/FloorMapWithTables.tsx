import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Table {
  id: string;
  table_id: string;
  label: string | null;
  capacity: number | null;
  section: string | null;
  svg_path: string;
  centroid_x: number;
  centroid_y: number;
  rotation: number | null;
  zone: string;
  smoking: boolean;
  accessible: boolean;
  minSpend: number;
}

interface FloorMapWithTablesProps {
  mapSrc: string;
  naturalWidth: number;
  naturalHeight: number;
  renderWidth: number;
  renderHeight: number;
  tables: Table[];
  onTableClick?: (table: Table) => void;
  showTableDetails?: boolean;
}

export default function FloorMapWithTables({
  mapSrc,
  naturalWidth,
  naturalHeight,
  renderWidth,
  renderHeight,
  tables,
  onTableClick,
  showTableDetails = true
}: FloorMapWithTablesProps) {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [hoveredTable, setHoveredTable] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTableClick = (table: Table) => {
    if (onTableClick) {
      onTableClick(table);
    } else {
      setSelectedTable(table);
      setIsDialogOpen(true);
    }
  };

  const handleTableHover = (tableId: string | null) => {
    setHoveredTable(tableId);
  };

  return (
    <div className="relative" style={{ width: renderWidth, height: renderHeight }}>
      {/* Base floor map image */}
      <img 
        src={mapSrc} 
        alt="Restaurant Floor Map" 
        className="absolute inset-0 w-full h-full object-contain"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* SVG overlay with clickable table paths */}
      <svg 
        className="absolute inset-0"
        width={renderWidth} 
        height={renderHeight}
        viewBox={`0 0 ${naturalWidth} ${naturalHeight}`} 
        preserveAspectRatio="none"
        style={{ pointerEvents: 'all' }}
      >
        {tables.map((table) => (
          <path
            key={table.id}
            d={table.svg_path}
            fill="transparent"
            stroke={hoveredTable === table.id ? "rgba(59, 130, 246, 0.6)" : "transparent"}
            strokeWidth={hoveredTable === table.id ? "2" : "0"}
            style={{ 
              cursor: 'pointer',
              transition: 'stroke 0.2s ease-in-out'
            }}
            onClick={() => handleTableClick(table)}
            onMouseEnter={() => handleTableHover(table.id)}
            onMouseLeave={() => handleTableHover(null)}
          />
        ))}
      </svg>

      {/* Table labels overlay (optional) */}
      {showTableDetails && (
        <div className="absolute inset-0 pointer-events-none">
          {tables.map((table) => (
            <div
              key={table.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(table.centroid_x / naturalWidth) * 100}%`,
                top: `${(table.centroid_y / naturalHeight) * 100}%`,
                transform: table.rotation 
                  ? `translate(-50%, -50%) rotate(${table.rotation}deg)`
                  : 'translate(-50%, -50%)'
              }}
            >
              <Badge 
                variant="secondary" 
                className="text-xs px-1 py-0.5 bg-white/90 text-gray-800 border border-gray-300"
              >
                {table.label || '?'}
              </Badge>
            </div>
          ))}
        </div>
      )}

      {/* Table details dialog */}
      {showTableDetails && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Table Details</DialogTitle>
            </DialogHeader>
            {selectedTable && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Table ID</label>
                    <p className="text-lg font-semibold">{selectedTable.label || selectedTable.table_id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Capacity</label>
                    <p className="text-lg">{selectedTable.capacity || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Zone</label>
                    <p className="text-lg">{selectedTable.zone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Section</label>
                    <p className="text-lg">{selectedTable.section || 'Main'}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {selectedTable.smoking && (
                    <Badge variant="destructive">Smoking</Badge>
                  )}
                  {selectedTable.accessible && (
                    <Badge variant="default">Accessible</Badge>
                  )}
                </div>
                
                {selectedTable.minSpend > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Minimum Spend</label>
                    <p className="text-lg">${selectedTable.minSpend}</p>
                  </div>
                )}
                
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                  <Button>
                    Book This Table
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
