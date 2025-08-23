import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface Table {
  id: string;
  label: string;
  capacity: number;
  zone: string;
  smoking: boolean;
  accessible: boolean;
  minSpend: number;
  x: number;
  y: number;
  shape: string;
  isActive: boolean;
}

interface FloorMapProps {
  tables: Table[];
  onTableSelect: (table: Table, bookingData: any) => void;
  restaurantId: string;
}

export default function FloorMap({ tables, onTableSelect, restaurantId }: FloorMapProps) {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  // Mock booking data - in real app this would come from form
  const mockBookingData = {
    date: new Date().toISOString().split('T')[0],
    startTime: "19:30",
    endTime: "21:30"
  };

  const handleTableClick = (table: Table) => {
    if (table.isActive) {
      setSelectedTable(table);
      setShowBookingDialog(true);
    }
  };

  const handleConfirmSelection = () => {
    if (selectedTable) {
      onTableSelect(selectedTable, mockBookingData);
      setShowBookingDialog(false);
      setSelectedTable(null);
    }
  };

  const getTableStatus = (table: Table) => {
    // Mock table status - in real app this would come from availability API
    const statuses = ['available', 'reserved', 'held'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    if (!table.isActive) return 'unavailable';
    return randomStatus;
  };

  const getTableColor = (table: Table) => {
    const status = getTableStatus(table);
    switch (status) {
      case 'available': return 'bg-green-500 hover:bg-green-600';
      case 'reserved': return 'bg-red-500 cursor-not-allowed';
      case 'held': return 'bg-yellow-500 cursor-not-allowed';
      default: return 'bg-gray-400 cursor-not-allowed';
    }
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // If no tables with positions, show a basic grid layout
  const hasPositionedTables = tables.some(t => t.x !== 0 || t.y !== 0);

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

      {/* Floor Map Container */}
      <div className="bg-gray-50 rounded-xl border-2 border-gray-200 min-h-96 relative overflow-hidden">
        <div 
          className="w-full h-full p-8 transition-transform duration-200"
          style={{ 
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            minHeight: '400px'
          }}
        >
          {tables.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Floor Plan Available</h3>
                <p className="text-gray-500">Contact the restaurant to set up your table layout.</p>
              </div>
            </div>
          ) : hasPositionedTables ? (
            // Positioned layout based on x,y coordinates
            <div className="relative w-full h-full">
              {tables.map((table) => (
                <button
                  key={table.id}
                  className={`absolute rounded-lg flex flex-col items-center justify-center text-white font-semibold text-xs transition-all duration-200 ${getTableColor(table)} ${
                    selectedTable?.id === table.id ? 'ring-4 ring-primary ring-opacity-50' : ''
                  }`}
                  style={{
                    left: `${table.x * 10}%`,
                    top: `${table.y * 10}%`,
                    width: table.capacity <= 2 ? '60px' : table.capacity <= 4 ? '80px' : '100px',
                    height: table.capacity <= 2 ? '48px' : table.capacity <= 4 ? '64px' : '80px',
                  }}
                  onClick={() => handleTableClick(table)}
                  disabled={getTableStatus(table) !== 'available'}
                  data-testid={`table-${table.label}`}
                  title={`Table ${table.label} - ${table.capacity} people - ${getTableStatus(table)}`}
                >
                  <span className="font-bold">{table.label}</span>
                  <span className="text-xs opacity-90">{table.capacity}p</span>
                </button>
              ))}
              
              {/* Mock kitchen/bar areas */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-lg px-4 py-2 text-gray-600 text-sm">
                Kitchen
              </div>
              <div className="absolute bottom-4 right-4 bg-gray-300 rounded-lg px-4 py-2 text-gray-600 text-sm">
                Bar
              </div>
            </div>
          ) : (
            // Grid layout fallback
            <div className="grid grid-cols-6 gap-4 h-full">
              {/* Tables Row 1 */}
              <div className="col-span-1 flex items-center justify-center">
                {tables[0] && (
                  <button
                    className={`w-16 h-12 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-xs transition-all ${getTableColor(tables[0])} ${
                      selectedTable?.id === tables[0].id ? 'ring-4 ring-primary ring-opacity-50' : ''
                    }`}
                    onClick={() => handleTableClick(tables[0])}
                    disabled={getTableStatus(tables[0]) !== 'available'}
                    data-testid={`table-${tables[0].label}`}
                  >
                    <span>{tables[0].label}</span>
                    <span className="text-xs">{tables[0].capacity}p</span>
                  </button>
                )}
              </div>
              
              <div className="col-span-1 flex items-center justify-center">
                {tables[1] && (
                  <button
                    className={`w-16 h-12 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-xs transition-all ${getTableColor(tables[1])} ${
                      selectedTable?.id === tables[1].id ? 'ring-4 ring-primary ring-opacity-50' : ''
                    }`}
                    onClick={() => handleTableClick(tables[1])}
                    disabled={getTableStatus(tables[1]) !== 'available'}
                    data-testid={`table-${tables[1].label}`}
                  >
                    <span>{tables[1].label}</span>
                    <span className="text-xs">{tables[1].capacity}p</span>
                  </button>
                )}
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <div className="text-gray-400 text-sm font-medium">Kitchen</div>
              </div>

              <div className="col-span-2 flex items-center justify-center space-x-4">
                {tables.slice(2, 4).map((table) => (
                  <button
                    key={table.id}
                    className={`w-16 h-12 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-xs transition-all ${getTableColor(table)} ${
                      selectedTable?.id === table.id ? 'ring-4 ring-primary ring-opacity-50' : ''
                    }`}
                    onClick={() => handleTableClick(table)}
                    disabled={getTableStatus(table) !== 'available'}
                    data-testid={`table-${table.label}`}
                  >
                    <span>{table.label}</span>
                    <span className="text-xs">{table.capacity}p</span>
                  </button>
                ))}
              </div>

              {/* Additional tables */}
              <div className="col-span-6 flex items-center justify-center space-x-4">
                {tables.slice(4).map((table) => (
                  <button
                    key={table.id}
                    className={`w-20 h-16 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-xs transition-all ${getTableColor(table)} ${
                      selectedTable?.id === table.id ? 'ring-4 ring-primary ring-opacity-50' : ''
                    }`}
                    onClick={() => handleTableClick(table)}
                    disabled={getTableStatus(table) !== 'available'}
                    data-testid={`table-${table.label}`}
                  >
                    <span>{table.label}</span>
                    <span className="text-xs">{table.capacity}p</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table Selection Confirmation Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Table Selection</DialogTitle>
          </DialogHeader>
          {selectedTable && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Table {selectedTable.label}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Capacity:</strong> {selectedTable.capacity} people</p>
                    <p><strong>Zone:</strong> {selectedTable.zone}</p>
                    {selectedTable.minSpend > 0 && (
                      <p><strong>Minimum spend:</strong> {selectedTable.minSpend} LBP</p>
                    )}
                    {selectedTable.smoking && (
                      <p className="text-orange-600"><strong>Smoking allowed</strong></p>
                    )}
                    {selectedTable.accessible && (
                      <p className="text-green-600"><strong>Wheelchair accessible</strong></p>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-end space-x-3">
                <Button 
                  variant="outline"
                  onClick={() => setShowBookingDialog(false)}
                  data-testid="button-cancel-table-selection"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleConfirmSelection}
                  className="bg-primary text-white hover:bg-primary/90"
                  data-testid="button-confirm-table-selection"
                >
                  Continue to Booking
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
