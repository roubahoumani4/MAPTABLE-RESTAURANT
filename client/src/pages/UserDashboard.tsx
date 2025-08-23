import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { Star, MapPin, Calendar, Clock, Users, Star as StarIcon, Award } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { useAuth } from "@/hooks/useAuth";

export default function UserDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: reservations = [] } = useQuery({
    queryKey: ["/api/reservations"],
  });

  const cancelReservationMutation = useMutation({
    mutationFn: async (reservationId: string) => {
      return apiRequest("PATCH", `/api/reservations/${reservationId}/cancel`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
      toast({
        title: "Reservation Cancelled",
        description: "Your reservation has been successfully cancelled.",
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
        description: "Failed to cancel reservation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const upcomingReservations = reservations.filter(
    (r: any) => r.status === "CONFIRMED" && new Date(r.date) >= new Date()
  );

  const pastReservations = reservations.filter(
    (r: any) => r.status === "COMPLETED" || new Date(r.date) < new Date()
  );

  const getTierProgress = (points: number) => {
    if (points < 1000) return { current: "Bronze", next: "Silver", progress: (points / 1000) * 100, needed: 1000 - points };
    if (points < 3000) return { current: "Silver", next: "Gold", progress: ((points - 1000) / 2000) * 100, needed: 3000 - points };
    if (points < 5000) return { current: "Gold", next: "Platinum", progress: ((points - 3000) / 2000) * 100, needed: 5000 - points };
    return { current: "Platinum", next: null, progress: 100, needed: 0 };
  };

  const tierInfo = getTierProgress(user?.points || 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your reservations and track your dining rewards.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile & Points */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Profile */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900" data-testid="text-user-name">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </CardContent>
            </Card>

            {/* Points & Tier */}
            <Card>
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-accent to-accent/80 rounded-xl p-6 text-white mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-accent-foreground/80">Your Points</span>
                    <span className="text-2xl font-bold" data-testid="text-user-points">
                      {user?.points || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-foreground/80">Tier</span>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                        {tierInfo.current} Member
                      </span>
                    </div>
                  </div>
                  {tierInfo.next && (
                    <div className="mt-4">
                      <div className="bg-white bg-opacity-20 rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${tierInfo.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-accent-foreground/80 mt-2">
                        {tierInfo.needed} points to {tierInfo.next}
                      </p>
                    </div>
                  )}
                </div>

                {/* Available Discounts */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Available Rewards</h4>
                  <div className="space-y-3">
                    {(user?.points || 0) >= 500 && (
                      <div className="border border-green-200 bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-green-700">15% Off</span>
                          <span className="text-xs text-green-600">500 pts</span>
                        </div>
                        <p className="text-xs text-green-600">Valid at participating restaurants</p>
                      </div>
                    )}
                    {(user?.points || 0) >= 800 && (
                      <div className="border border-blue-200 bg-blue-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-blue-700">Free Appetizer</span>
                          <span className="text-xs text-blue-600">800 pts</span>
                        </div>
                        <p className="text-xs text-blue-600">Select premium restaurants</p>
                      </div>
                    )}
                    {(user?.points || 0) < 500 && (
                      <p className="text-sm text-gray-500">Earn more points to unlock rewards!</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservations */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming" data-testid="tab-upcoming">
                  Upcoming ({upcomingReservations.length})
                </TabsTrigger>
                <TabsTrigger value="past" data-testid="tab-past">
                  Past ({pastReservations.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingReservations.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No upcoming reservations</h3>
                      <p className="text-gray-500 mb-6">
                        Ready to discover your next great dining experience?
                      </p>
                      <Button 
                        onClick={() => window.location.href = "/"}
                        className="bg-primary text-white hover:bg-primary/90"
                        data-testid="button-browse-restaurants"
                      >
                        Browse Restaurants
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  upcomingReservations.map((reservation: any) => (
                    <Card key={reservation.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">
                              {reservation.restaurantName || "Restaurant"}
                            </h4>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{new Date(reservation.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{reservation.startTime}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                <span>{reservation.partySize} people</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>Table {reservation.tableLabel || reservation.tableId}</span>
                              </div>
                            </div>
                            <Badge 
                              className="mt-3"
                              variant={reservation.status === "CONFIRMED" ? "default" : "secondary"}
                            >
                              {reservation.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                // TODO: Implement modify reservation
                                toast({ title: "Feature coming soon!", description: "Modification feature will be available soon." });
                              }}
                              data-testid={`button-modify-${reservation.id}`}
                            >
                              Modify
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => cancelReservationMutation.mutate(reservation.id)}
                              disabled={cancelReservationMutation.isPending}
                              data-testid={`button-cancel-${reservation.id}`}
                            >
                              {cancelReservationMutation.isPending ? "Cancelling..." : "Cancel"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                {pastReservations.length === 0 ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No past reservations</h3>
                      <p className="text-gray-500">Your dining history will appear here.</p>
                    </CardContent>
                  </Card>
                ) : (
                  pastReservations.map((reservation: any) => (
                    <Card key={reservation.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">
                              {reservation.restaurantName || "Restaurant"}
                            </h4>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{new Date(reservation.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{reservation.startTime}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                <span>{reservation.partySize} people</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <Badge variant="secondary">
                                {reservation.status}
                              </Badge>
                              {reservation.pointsEarned > 0 && (
                                <div className="text-right">
                                  <p className="text-xs text-green-600">+{reservation.pointsEarned} points earned</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            {reservation.status === "COMPLETED" && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  // TODO: Implement review functionality
                                  toast({ title: "Feature coming soon!", description: "Review feature will be available soon." });
                                }}
                                data-testid={`button-review-${reservation.id}`}
                              >
                                Write Review
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
