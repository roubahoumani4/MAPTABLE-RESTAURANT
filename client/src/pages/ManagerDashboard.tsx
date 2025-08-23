import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import { 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Settings, 
  Plus, 
  Edit,
  Trash2,
  Check,
  X,
  BarChart3,
  MapPin,
  Phone
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { useAuth } from "@/hooks/useAuth";

export default function ManagerDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [editingTable, setEditingTable] = useState<any>(null);

  const { data: managedRestaurants = [] } = useQuery({
    queryKey: ["/api/manager/restaurants"],
  });

  const { data: restaurantReservations = [] } = useQuery({
    queryKey: ["/api/manager/restaurants", selectedRestaurant, "reservations", { date: selectedDate }],
    enabled: !!selectedRestaurant,
  });

  const { data: restaurantTables = [] } = useQuery({
    queryKey: ["/api/restaurants", selectedRestaurant, "tables"],
    enabled: !!selectedRestaurant,
  });

  const updateReservationStatusMutation = useMutation({
    mutationFn: async ({ reservationId, status }: { reservationId: string; status: string }) => {
      return apiRequest("PATCH", `/api/manager/reservations/${reservationId}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["/api/manager/restaurants", selectedRestaurant, "reservations"] 
      });
      toast({
        title: "Status Updated",
        description: "Reservation status has been updated successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to update reservation status.",
        variant: "destructive",
      });
    },
  });

  const createTableMutation = useMutation({
    mutationFn: async (tableData: any) => {
      return apiRequest("POST", `/api/manager/restaurants/${selectedRestaurant}/tables`, tableData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["/api/restaurants", selectedRestaurant, "tables"] 
      });
      setShowTableDialog(false);
      setEditingTable(null);
      toast({
        title: "Table Created",
        description: "New table has been added successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to create table.",
        variant: "destructive",
      });
    },
  });

  const updateTableMutation = useMutation({
    mutationFn: async ({ tableId, data }: { tableId: string; data: any }) => {
      return apiRequest("PUT", `/api/manager/tables/${tableId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["/api/restaurants", selectedRestaurant, "tables"] 
      });
      setShowTableDialog(false);
      setEditingTable(null);
      toast({
        title: "Table Updated",
        description: "Table has been updated successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to update table.",
        variant: "destructive",
      });
    },
  });

  const deleteTableMutation = useMutation({
    mutationFn: async (tableId: string) => {
      return apiRequest("DELETE", `/api/manager/tables/${tableId}`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["/api/restaurants", selectedRestaurant, "tables"] 
      });
      toast({
        title: "Table Deleted",
        description: "Table has been removed successfully.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to delete table.",
        variant: "destructive",
      });
    },
  });

  const selectedRestaurantData = managedRestaurants.find((r: any) => r.id === selectedRestaurant);

  const handleTableSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tableData = {
      label: formData.get('label'),
      capacity: parseInt(formData.get('capacity') as string),
      zone: formData.get('zone'),
      smoking: formData.get('smoking') === 'on',
      accessible: formData.get('accessible') === 'on',
      minSpend: parseFloat(formData.get('minSpend') as string) || 0,
      x: parseFloat(formData.get('x') as string) || 0,
      y: parseFloat(formData.get('y') as string) || 0,
    };

    if (editingTable) {
      updateTableMutation.mutate({ tableId: editingTable.id, data: tableData });
    } else {
      createTableMutation.mutate(tableData);
    }
  };

  // Calculate quick stats
  const todayReservations = restaurantReservations.length;
  const availableTables = restaurantTables.filter((t: any) => t.isActive).length;
  const avgRating = selectedRestaurantData?.ratingAvg || "0.00";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Manager Header */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold">Restaurant Manager</h1>
            <p className="text-primary-foreground/80 mt-2">
              {selectedRestaurantData ? `${selectedRestaurantData.name} - Management Dashboard` : 'Select a restaurant to manage'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Restaurant Selection */}
        {managedRestaurants.length > 1 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <Label htmlFor="restaurant-select" className="text-lg font-semibold mb-4 block">
                Select Restaurant
              </Label>
              <Select value={selectedRestaurant} onValueChange={setSelectedRestaurant}>
                <SelectTrigger data-testid="select-restaurant">
                  <SelectValue placeholder="Choose a restaurant to manage..." />
                </SelectTrigger>
                <SelectContent>
                  {managedRestaurants.map((restaurant: any) => (
                    <SelectItem key={restaurant.id} value={restaurant.id}>
                      {restaurant.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {/* Auto-select if only one restaurant */}
        {managedRestaurants.length === 1 && !selectedRestaurant && (
          <div className="hidden">
            {setSelectedRestaurant(managedRestaurants[0].id)}
          </div>
        )}

        {!selectedRestaurant && managedRestaurants.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Settings className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Managed Restaurants</h3>
              <p className="text-gray-500">You don't have access to manage any restaurants yet.</p>
            </CardContent>
          </Card>
        )}

        {selectedRestaurant && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Today's Reservations</p>
                      <p className="text-2xl font-bold text-gray-900" data-testid="stat-reservations">
                        {todayReservations}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Tables</p>
                      <p className="text-2xl font-bold text-gray-900" data-testid="stat-tables">
                        {availableTables}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Average Rating</p>
                      <p className="text-2xl font-bold text-gray-900" data-testid="stat-rating">
                        {parseFloat(avgRating).toFixed(1)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Reviews</p>
                      <p className="text-2xl font-bold text-gray-900" data-testid="stat-reviews">
                        {selectedRestaurantData?.ratingCount || 0}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="reservations" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reservations" data-testid="tab-reservations">Reservations</TabsTrigger>
                <TabsTrigger value="tables" data-testid="tab-tables">Tables</TabsTrigger>
                <TabsTrigger value="settings" data-testid="tab-settings">Settings</TabsTrigger>
              </TabsList>

              {/* Reservations Tab */}
              <TabsContent value="reservations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Reservations</CardTitle>
                      <div className="flex items-center space-x-4">
                        <Label htmlFor="date-filter">Date:</Label>
                        <Input
                          id="date-filter"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-auto"
                          data-testid="input-date-filter"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {restaurantReservations.length === 0 ? (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No reservations for this date.</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Time</th>
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Table</th>
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Guest</th>
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Party</th>
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Status</th>
                              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {restaurantReservations.map((reservation: any) => (
                              <tr key={reservation.id}>
                                <td className="py-3 px-2 text-sm">{reservation.startTime}</td>
                                <td className="py-3 px-2 text-sm font-medium">{reservation.tableLabel || reservation.tableId}</td>
                                <td className="py-3 px-2 text-sm">{reservation.userName || "Guest"}</td>
                                <td className="py-3 px-2 text-sm">{reservation.partySize}</td>
                                <td className="py-3 px-2">
                                  <Badge 
                                    variant={
                                      reservation.status === "CONFIRMED" ? "default" :
                                      reservation.status === "SEATED" ? "secondary" :
                                      reservation.status === "COMPLETED" ? "outline" : "destructive"
                                    }
                                  >
                                    {reservation.status}
                                  </Badge>
                                </td>
                                <td className="py-3 px-2">
                                  <div className="flex space-x-2">
                                    {reservation.status === "CONFIRMED" && (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => updateReservationStatusMutation.mutate({
                                          reservationId: reservation.id,
                                          status: "SEATED"
                                        })}
                                        data-testid={`button-seat-${reservation.id}`}
                                      >
                                        Mark Seated
                                      </Button>
                                    )}
                                    {reservation.status === "SEATED" && (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => updateReservationStatusMutation.mutate({
                                          reservationId: reservation.id,
                                          status: "COMPLETED"
                                        })}
                                        data-testid={`button-complete-${reservation.id}`}
                                      >
                                        Mark Completed
                                      </Button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tables Tab */}
              <TabsContent value="tables" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Table Management</CardTitle>
                      <Dialog open={showTableDialog} onOpenChange={setShowTableDialog}>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setEditingTable(null)}
                            data-testid="button-add-table"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Table
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>
                              {editingTable ? "Edit Table" : "Add New Table"}
                            </DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleTableSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="label">Table Name</Label>
                                <Input
                                  id="label"
                                  name="label"
                                  defaultValue={editingTable?.label || ""}
                                  placeholder="T1"
                                  required
                                  data-testid="input-table-label"
                                />
                              </div>
                              <div>
                                <Label htmlFor="capacity">Capacity</Label>
                                <Select name="capacity" defaultValue={editingTable?.capacity?.toString() || "2"}>
                                  <SelectTrigger data-testid="select-table-capacity">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="6">6</SelectItem>
                                    <SelectItem value="8">8</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="zone">Zone</Label>
                                <Select name="zone" defaultValue={editingTable?.zone || "Main"}>
                                  <SelectTrigger data-testid="select-table-zone">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Main">Main Dining</SelectItem>
                                    <SelectItem value="Window">Window Seats</SelectItem>
                                    <SelectItem value="Bar">Bar Area</SelectItem>
                                    <SelectItem value="Terrace">Terrace</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="minSpend">Min Spend (LBP)</Label>
                                <Input
                                  id="minSpend"
                                  name="minSpend"
                                  type="number"
                                  defaultValue={editingTable?.minSpend || "0"}
                                  placeholder="0"
                                  data-testid="input-table-min-spend"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="x">X Position</Label>
                                <Input
                                  id="x"
                                  name="x"
                                  type="number"
                                  step="0.01"
                                  defaultValue={editingTable?.x || "0"}
                                  data-testid="input-table-x"
                                />
                              </div>
                              <div>
                                <Label htmlFor="y">Y Position</Label>
                                <Input
                                  id="y"
                                  name="y"
                                  type="number"
                                  step="0.01"
                                  defaultValue={editingTable?.y || "0"}
                                  data-testid="input-table-y"
                                />
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="smoking"
                                  name="smoking"
                                  defaultChecked={editingTable?.smoking || false}
                                />
                                <Label htmlFor="smoking">Smoking allowed</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="accessible"
                                  name="accessible"
                                  defaultChecked={editingTable?.accessible || false}
                                />
                                <Label htmlFor="accessible">Wheelchair accessible</Label>
                              </div>
                            </div>

                            <div className="flex justify-end space-x-3">
                              <Button 
                                type="button" 
                                variant="outline"
                                onClick={() => setShowTableDialog(false)}
                                data-testid="button-cancel-table"
                              >
                                Cancel
                              </Button>
                              <Button 
                                type="submit"
                                disabled={createTableMutation.isPending || updateTableMutation.isPending}
                                data-testid="button-save-table"
                              >
                                {createTableMutation.isPending || updateTableMutation.isPending ? "Saving..." : "Save"}
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {restaurantTables.length === 0 ? (
                      <div className="text-center py-8">
                        <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No tables configured yet.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {restaurantTables.map((table: any) => (
                          <Card key={table.id} className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold">{table.label}</h4>
                                <p className="text-sm text-gray-600">Capacity: {table.capacity}</p>
                                <p className="text-sm text-gray-600">Zone: {table.zone}</p>
                                {table.minSpend > 0 && (
                                  <p className="text-sm text-gray-600">Min spend: {table.minSpend} LBP</p>
                                )}
                              </div>
                              <div className="flex space-x-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingTable(table);
                                    setShowTableDialog(true);
                                  }}
                                  data-testid={`button-edit-table-${table.id}`}
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteTableMutation.mutate(table.id)}
                                  data-testid={`button-delete-table-${table.id}`}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Restaurant Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedRestaurantData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Restaurant Name</Label>
                          <p className="text-lg font-semibold">{selectedRestaurantData.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Address</Label>
                          <p className="text-sm text-gray-600">{selectedRestaurantData.address}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Phone</Label>
                          <p className="text-sm text-gray-600">{selectedRestaurantData.phone || "Not set"}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">WhatsApp</Label>
                          <p className="text-sm text-gray-600">{selectedRestaurantData.whatsapp || "Not set"}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Cuisines</Label>
                          <div className="flex gap-2 flex-wrap">
                            {selectedRestaurantData.cuisines?.map((cuisine: string) => (
                              <Badge key={cuisine} variant="outline">{cuisine}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Price Level</Label>
                          <p className="text-sm text-gray-600">{'$'.repeat(selectedRestaurantData.priceLevel)}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Operating Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div key={day} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">{day}</span>
                          <span className="text-sm font-medium">11:00 AM - 11:00 PM</span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-4" variant="outline" data-testid="button-edit-hours">
                      Edit Hours
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
}
