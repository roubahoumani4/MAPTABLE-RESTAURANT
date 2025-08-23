import { useState } from "react";
import { useParams } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import FloorMap from "@/components/FloorMap";
import BookingForm from "@/components/BookingForm";
import { Star, MapPin, Phone, Clock, Users, Utensils } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function RestaurantDetail() {
  const { slug } = useParams();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedTable, setSelectedTable] = useState<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["/api/restaurants", slug],
    enabled: !!slug,
  });

  const { data: tables = [] } = useQuery({
    queryKey: ["/api/restaurants", restaurant?.id, "tables"],
    enabled: !!restaurant?.id,
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["/api/restaurants", restaurant?.id, "reviews"],
    enabled: !!restaurant?.id,
  });

  const createHoldMutation = useMutation({
    mutationFn: async (holdData: any) => {
      return apiRequest("POST", "/api/holds", holdData);
    },
    onSuccess: () => {
      setShowBookingModal(true);
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
        description: "Failed to hold table. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleTableSelect = async (table: any, bookingData: any) => {
    setSelectedTable(table);
    
    // Create a hold on the table
    await createHoldMutation.mutateAsync({
      tableId: table.id,
      date: bookingData.date,
      startTime: bookingData.startTime,
      endTime: bookingData.endTime,
    });
  };

  const handleBookingComplete = () => {
    setShowBookingModal(false);
    setSelectedTable(null);
    queryClient.invalidateQueries({ queryKey: ["/api/restaurants", restaurant?.id, "tables"] });
    toast({
      title: "Reservation Confirmed!",
      description: "Your table has been reserved. Check your email for confirmation.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200"></div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Not Found</h1>
          <p className="text-gray-600">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Restaurant Header */}
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage: restaurant.images?.[0] 
              ? `url(${restaurant.images[0]})`
              : `linear-gradient(rgba(15, 118, 110, 0.7), rgba(15, 118, 110, 0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2" data-testid="text-restaurant-name">
              {restaurant.name}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{restaurant.ratingAvg}</span>
                <span className="ml-1 opacity-90">({restaurant.ratingCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                {restaurant.cuisines?.map((cuisine: string) => (
                  <Badge key={cuisine} variant="secondary" className="bg-white/20 text-white">
                    {cuisine}
                  </Badge>
                ))}
              </div>
              <span className="opacity-90">{'$'.repeat(restaurant.priceLevel)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {restaurant.description || "Experience exceptional dining at this renowned restaurant."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-gray-600">{restaurant.address}</p>
                    </div>
                  </div>
                  
                  {restaurant.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-gray-600">{restaurant.phone}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Hours</p>
                      <p className="text-sm text-gray-600">11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floor Map */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Select Your Table</h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                      <span>Reserved</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                      <span>Held</span>
                    </div>
                  </div>
                </div>

                <FloorMap 
                  tables={tables} 
                  onTableSelect={handleTableSelect}
                  restaurantId={restaurant.id}
                />
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Reviews</h2>
                {reviews.length === 0 ? (
                  <p className="text-gray-600">No reviews yet. Be the first to review!</p>
                ) : (
                  <div className="space-y-6">
                    {reviews.slice(0, 5).map((review: any) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        {review.title && (
                          <h4 className="font-semibold mb-2">{review.title}</h4>
                        )}
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Restaurant Info</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cuisine</span>
                    <div className="flex gap-1">
                      {restaurant.cuisines?.map((cuisine: string) => (
                        <Badge key={cuisine} variant="outline" className="text-xs">
                          {cuisine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price Level</span>
                    <span className="font-semibold">{'$'.repeat(restaurant.priceLevel)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{restaurant.ratingAvg}</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-semibold">
                      {tables.filter((t: any) => !t.isReserved).length} tables available
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Select a table from the floor map to make a reservation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Reservation</DialogTitle>
          </DialogHeader>
          {selectedTable && (
            <BookingForm
              restaurant={restaurant}
              table={selectedTable}
              onComplete={handleBookingComplete}
              onCancel={() => setShowBookingModal(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
