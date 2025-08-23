import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Star, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LanguageToggle from "@/components/LanguageToggle";
import CurrencyToggle from "@/components/CurrencyToggle";

export default function Landing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const { data: restaurants = [] } = useQuery({
    queryKey: ["/api/restaurants"],
  });

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery, "in area:", selectedArea);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold text-gray-900">TableMap</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">For Restaurants</a>
              <div className="flex items-center space-x-4">
                <LanguageToggle />
                <CurrencyToggle />
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => window.location.href = "/api/login"}
                className="bg-primary text-white hover:bg-primary/90"
                data-testid="button-signin"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.7), rgba(15, 118, 110, 0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Reserve Your Perfect Table</h1>
            <p className="text-xl mb-8 opacity-90">Discover Lebanon's finest restaurants and book with interactive table selection</p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder="Search restaurants, cuisine..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    data-testid="input-search"
                  />
                </div>
                <div className="md:w-40">
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger data-testid="select-area">
                      <SelectValue placeholder="All Areas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Areas</SelectItem>
                      <SelectItem value="beirut">Beirut</SelectItem>
                      <SelectItem value="byblos">Byblos</SelectItem>
                      <SelectItem value="jounieh">Jounieh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-accent text-white px-8 py-3 hover:bg-accent/90 font-semibold"
                  data-testid="button-search"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Restaurants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover exceptional dining experiences across Lebanon with our curated selection of top-rated restaurants.
            </p>
          </div>

          {restaurants.length === 0 ? (
            <div className="text-center py-12">
              <Utensils className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No restaurants available</h3>
              <p className="text-gray-500">Check back later for featured restaurants in your area.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.slice(0, 6).map((restaurant: any) => (
                <Card key={restaurant.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    {restaurant.images?.[0] ? (
                      <img 
                        src={restaurant.images[0]} 
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Utensils className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-gray-700 font-semibold">{restaurant.ratingAvg}</span>
                        <span className="text-gray-500">({restaurant.ratingCount})</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{restaurant.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-accent font-semibold">
                          {'$'.repeat(restaurant.priceLevel)}
                        </span>
                        <span className="text-gray-500">•</span>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{restaurant.address}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {restaurant.cuisines?.slice(0, 2).map((cuisine: string) => (
                          <Badge key={cuisine} variant="secondary" className="text-xs">
                            {cuisine}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        size="sm"
                        className="bg-primary text-white hover:bg-primary/90"
                        onClick={() => window.location.href = "/api/login"}
                        data-testid={`button-view-${restaurant.slug}`}
                      >
                        View Tables
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to discover and reserve your perfect dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600">
                Browse restaurants by cuisine, location, or rating. Filter by your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select</h3>
              <p className="text-gray-600">
                View interactive floor plans and choose your preferred table location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reserve</h3>
              <p className="text-gray-600">
                Confirm your booking and receive instant confirmation with QR code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Utensils className="text-white h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-white">TableMap</span>
              </div>
              <p className="text-gray-400 text-sm">
                Discover and reserve tables at Lebanon's finest restaurants with interactive table selection.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">For Diners</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Find Restaurants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loyalty Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">For Restaurants</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Join TableMap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manager Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>WhatsApp: +961 1 234 567</p>
                <p>Email: support@tablemap.lb</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TableMap Lebanon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
