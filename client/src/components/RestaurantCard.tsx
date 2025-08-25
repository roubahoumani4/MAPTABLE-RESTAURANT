import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Star, MapPin, Clock, Utensils, UserPlus, LogIn } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import LoginModal from "./LoginModal";
// Import the Murray logo using Vite's import.meta.url approach
const murrayLogo = new URL('../assets/images/Murray.png', import.meta.url).href;

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    slug: string;
    description?: string;
    address: string;
    cuisines?: string[];
    priceLevel: number;
    images?: string[];
    ratingAvg: string;
    ratingCount: number;
    isActive?: boolean;
    availableTables?: number; // Added for availability
  };
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { isAuthenticated } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Real availability logic - would come from API
  const availableTables = restaurant.availableTables || 0;
  
  // Simple status based on available tables
  const getStatus = () => {
    if (availableTables === 0) return { color: "text-red-600", bg: "bg-red-500", text: "Full" };
    if (availableTables < 5) return { color: "text-yellow-600", bg: "bg-yellow-500", text: "Busy" };
    return { color: "text-green-600", bg: "bg-green-500", text: "Open now" };
  };
  
  const status = getStatus();

  const handleViewTables = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowAuthDialog(true);
    }
  };

  const handleCreateAccount = () => {
    setShowAuthDialog(false);
    setShowLoginModal(true);
  };

  const handleLogin = () => {
    setShowAuthDialog(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
        <Link href={`/restaurant/${restaurant.slug}`} className="block">
          <div className="aspect-video bg-gray-200 relative overflow-hidden">
            {/* Special handling for Murrany restaurant to show Murray logo */}
            {restaurant.slug === 'murrany' ? (
              <>
                {!imageLoaded && (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                  </div>
                )}
                <img 
                  src={murrayLogo} 
                  alt="Murray Restaurant Logo"
                  className={`w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                />
              </>
            ) : restaurant.images?.[0] && !imageError ? (
              <>
                {!imageLoaded && (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                  </div>
                )}
                <img 
                  src={restaurant.images[0]} 
                  alt={restaurant.name}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                />
              </>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Utensils className="h-12 w-12 text-gray-400" />
              </div>
            )}
            {/* Status indicator overlay */}
            <div className="absolute top-3 left-3">
              <div className={`${status.color} bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center text-xs font-medium`}>
                <div className={`w-2 h-2 ${status.bg} rounded-full mr-2`}></div>
                {status.text}
              </div>
            </div>
          </div>
        </Link>
        
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-gray-700 font-semibold">{parseFloat(restaurant.ratingAvg).toFixed(1)}</span>
              <span className="text-gray-500">({restaurant.ratingCount})</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-3 line-clamp-2">
            {restaurant.description || "Experience exceptional dining at this renowned restaurant."}
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-accent font-semibold">
                {'$'.repeat(restaurant.priceLevel)}
              </span>
              <span className="text-gray-500">•</span>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm truncate max-w-32">{restaurant.address}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {restaurant.cuisines?.slice(0, 2).map((cuisine) => (
                <Badge key={cuisine} variant="secondary" className="text-xs">
                  {cuisine}
                </Badge>
              ))}
              {restaurant.cuisines && restaurant.cuisines.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{restaurant.cuisines.length - 2}
                </Badge>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Available tables: {availableTables}</p>
              {isAuthenticated ? (
                <Link href={`/restaurant/${restaurant.slug}`}>
                  <Button 
                    size="sm"
                    className="bg-primary text-white hover:bg-primary/90"
                    data-testid={`button-view-tables-${restaurant.slug}`}
                  >
                    View Tables
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90"
                  onClick={handleViewTables}
                  data-testid={`button-view-tables-${restaurant.slug}`}
                >
                  View Tables
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Required Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-primary" />
              Create an Account to Continue
            </DialogTitle>
            <DialogDescription>
              To view tables and make reservations, you need to create an account or log in to your existing account.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Join TableMap to discover amazing restaurants and book your perfect table!
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={handleCreateAccount}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Create Account
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleLogin}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </Button>
            </div>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="ghost" 
              onClick={() => setShowAuthDialog(false)}
              className="w-full sm:w-auto"
            >
              Maybe Later
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
          // Optionally redirect to the restaurant page after successful login
          window.location.href = `/restaurant/${restaurant.slug}`;
        }}
      />
    </>
  );
}
