import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import { Link } from "wouter";

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
  };
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const getStatusColor = () => {
    // Mock availability logic - in real app this would come from API
    const random = Math.random();
    if (random > 0.7) return { color: "text-green-600", bg: "bg-green-500", text: "Open now" };
    if (random > 0.4) return { color: "text-yellow-600", bg: "bg-yellow-500", text: "Busy" };
    return { color: "text-red-600", bg: "bg-red-500", text: "Full" };
  };

  const status = getStatusColor();
  const availableTables = Math.floor(Math.random() * 15) + 1; // Mock available tables

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
      <Link href={`/restaurant/${restaurant.slug}`} className="block">
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          {restaurant.images?.[0] ? (
            <img 
              src={restaurant.images[0]} 
              alt={restaurant.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
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
            <Link href={`/restaurant/${restaurant.slug}`}>
              <Button 
                size="sm"
                className="bg-primary text-white hover:bg-primary/90"
                data-testid={`button-view-tables-${restaurant.slug}`}
              >
                View Tables
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
