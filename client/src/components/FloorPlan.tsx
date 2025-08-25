import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

// Import the floor plan image
const floorPlanImage = new URL('../assets/images/floormap.png', import.meta.url).href;

interface FloorPlanProps {
  tables: any[];
  onTableSelect: (table: any, bookingData: any) => void;
  restaurantId: string;
}

export default function FloorPlan({ tables, onTableSelect, restaurantId }: FloorPlanProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
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
            data-testid="button-zoom-in"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleZoomOut}
            data-testid="button-zoom-out"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReset}
            data-testid="button-reset-view"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-gray-600">
          Zoom: {Math.round(zoom * 100)}%
        </div>
      </div>

      {/* Floor Plan Container */}
      <div className="bg-gray-50 rounded-xl border-2 border-gray-200 min-h-96 relative overflow-hidden">
        <div 
          className="w-full h-full transition-transform duration-200"
          style={{ 
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            minHeight: '800px'
          }}
        >
          {/* Floor Plan Image */}
          <div className="relative">
            <img 
              src={floorPlanImage} 
              alt="Restaurant Floor Plan"
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
