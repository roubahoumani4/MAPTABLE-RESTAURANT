import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Users, Star } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { useAuth } from "@/hooks/useAuth";
import LoginModal from "./LoginModal";

interface BookingFormProps {
  restaurant: any;
  table: any;
  onComplete: () => void;
  onCancel: () => void;
}

export default function BookingForm({ restaurant, table, onComplete, onCancel }: BookingFormProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: "19:30",
    partySize: table.capacity <= 4 ? table.capacity : 4,
    specialRequests: "",
    useDiscount: false,
  });

  const createReservationMutation = useMutation({
    mutationFn: async (reservationData: any) => {
      return apiRequest("POST", "/api/reservations", reservationData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      onComplete();
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Authentication Required",
          description: "Please log in to complete your reservation.",
          variant: "destructive",
        });
        setShowLoginModal(true);
        return;
      }
      toast({
        title: "Booking Failed",
        description: "Unable to complete your reservation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate end time (2 hours later)
    const startTime = bookingData.startTime;
    const [hours, minutes] = startTime.split(':').map(Number);
    const endTime = `${String(hours + 2).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    
    createReservationMutation.mutate({
      restaurantId: restaurant.id,
      tableId: table.id,
      date: bookingData.date,
      startTime: bookingData.startTime,
      endTime: endTime,
      partySize: bookingData.partySize,
      specialRequests: bookingData.specialRequests,
    });
  };

  const availableDiscounts = [
    { pointsRequired: 500, discount: 15, type: "percentage" },
    { pointsRequired: 800, discount: 10000, type: "fixed" }, // 10,000 LBP
  ];

  const applicableDiscounts = availableDiscounts.filter(d => (user?.points || 0) >= d.pointsRequired);

  const timeSlots = [
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", 
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selected Table Info */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <h4 className="font-semibold text-primary mb-2">Selected Table</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Table:</span>
              <span className="ml-2 font-medium">{table.label}</span>
            </div>
            <div>
              <span className="text-gray-600">Capacity:</span>
              <span className="ml-2 font-medium">{table.capacity} people</span>
            </div>
            <div>
              <span className="text-gray-600">Zone:</span>
              <span className="ml-2 font-medium">{table.zone}</span>
            </div>
            {table.minSpend > 0 && (
              <div>
                <span className="text-gray-600">Min spend:</span>
                <span className="ml-2 font-medium">{table.minSpend} LBP</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={bookingData.date}
            onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
            min={new Date().toISOString().split('T')[0]}
            required
            data-testid="input-booking-date"
          />
        </div>

        <div>
          <Label htmlFor="time" className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Time
          </Label>
          <Select 
            value={bookingData.startTime} 
            onValueChange={(value) => setBookingData(prev => ({ ...prev, startTime: value }))}
          >
            <SelectTrigger data-testid="select-booking-time">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Party Size */}
      <div>
        <Label htmlFor="partySize" className="flex items-center">
          <Users className="h-4 w-4 mr-2" />
          Party Size
        </Label>
        <Select 
          value={bookingData.partySize.toString()} 
          onValueChange={(value) => setBookingData(prev => ({ ...prev, partySize: parseInt(value) }))}
        >
          <SelectTrigger data-testid="select-party-size">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: table.capacity }, (_, i) => i + 1).map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size} {size === 1 ? 'person' : 'people'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Special Requests */}
      <div>
        <Label htmlFor="specialRequests">Special Requests</Label>
        <Textarea
          id="specialRequests"
          value={bookingData.specialRequests}
          onChange={(e) => setBookingData(prev => ({ ...prev, specialRequests: e.target.value }))}
          placeholder="Birthday celebration, window seat, dietary restrictions, etc."
          rows={3}
          data-testid="textarea-special-requests"
        />
      </div>

      {/* Points & Discounts */}
      {user && applicableDiscounts.length > 0 && (
        <>
          <Separator />
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-accent mr-2" />
                  <span className="font-semibold text-accent">Your Points</span>
                </div>
                <span className="text-accent font-bold text-lg">{user.points || 0} pts</span>
              </div>
              
              <div className="space-y-3">
                {applicableDiscounts.map((discount, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`discount-${index}`}
                      checked={bookingData.useDiscount}
                      onCheckedChange={(checked) => setBookingData(prev => ({ ...prev, useDiscount: !!checked }))}
                    />
                    <Label htmlFor={`discount-${index}`} className="text-sm">
                      Use {discount.pointsRequired} pts for {discount.type === 'percentage' ? `${discount.discount}% off` : `${discount.discount} LBP off`}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      <Separator />

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <Button 
          type="button" 
          variant="outline"
          onClick={onCancel}
          data-testid="button-cancel-booking"
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          disabled={createReservationMutation.isPending}
          className="bg-primary text-white hover:bg-primary/90"
          data-testid="button-confirm-booking"
        >
          {createReservationMutation.isPending ? "Confirming..." : "Confirm Reservation"}
        </Button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By proceeding, you agree to our booking terms and cancellation policy.
      </p>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
          // Refresh the page to show authenticated content
          window.location.reload();
        }}
      />
    </form>
  );
}
