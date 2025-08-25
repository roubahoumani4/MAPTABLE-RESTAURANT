import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedPriceLevel, setSelectedPriceLevel] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const { data: restaurants = [], isLoading, error } = useQuery({
    queryKey: ["restaurants", searchQuery, selectedArea, selectedCuisine, selectedPriceLevel, sortBy],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchQuery) params.append("query", searchQuery);
      if (selectedArea !== "all") params.append("area", selectedArea);
      if (selectedCuisine !== "all") params.append("cuisine", selectedCuisine);
      if (selectedPriceLevel !== "all") params.append("priceLevel", selectedPriceLevel);
      if (sortBy === "rating") params.append("rating", "4");
      
      const url = `/api/restaurants${params.toString() ? `?${params.toString()}` : ""}`;
      
      const response = await fetch(url, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
  });

  const handleSearch = () => {
    // The query will automatically refetch due to the dependency array
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedArea("all");
    setSelectedCuisine("all");
    setSelectedPriceLevel("all");
    setSortBy("rating");
  };

  // Helper function to get display text for areas
  const getAreaDisplayText = (area: string) => {
    if (area === "all") return "All Cities & Areas";
    const areaMap: { [key: string]: string } = {
      "Hamra": "Hamra, Beirut",
      "Mar Mikhael": "Mar Mikhael, Beirut",
      "Gemmayze": "Gemmayze, Beirut",
      "Raouche": "Raouche, Beirut",
      "Ashrafieh": "Ashrafieh, Beirut",
      "Verdun": "Verdun, Beirut",
      "Badaro": "Badaro, Beirut",
      "Monot": "Monot, Beirut",
      "Saifi": "Saifi, Beirut",
      "Byblos": "Byblos",
      "Jounieh": "Jounieh",
      "Tripoli": "Tripoli",
      "Sidon": "Sidon",
      "Tyre": "Tyre",
      "Baalbek": "Baalbek"
    };
    return areaMap[area] || area;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search restaurants, cuisine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-home"
              />
            </div>
            
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full lg:w-40" data-testid="select-area">
                <SelectValue placeholder="All Cities & Areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities & Areas</SelectItem>
                <SelectItem value="Hamra">Hamra, Beirut</SelectItem>
                <SelectItem value="Mar Mikhael">Mar Mikhael, Beirut</SelectItem>
                <SelectItem value="Gemmayze">Gemmayze, Beirut</SelectItem>
                <SelectItem value="Raouche">Raouche, Beirut</SelectItem>
                <SelectItem value="Ashrafieh">Ashrafieh, Beirut</SelectItem>
                <SelectItem value="Verdun">Verdun, Beirut</SelectItem>
                <SelectItem value="Badaro">Badaro, Beirut</SelectItem>
                <SelectItem value="Monot">Monot, Beirut</SelectItem>
                <SelectItem value="Saifi">Saifi, Beirut</SelectItem>
                <SelectItem value="Byblos">Byblos</SelectItem>
                <SelectItem value="Jounieh">Jounieh</SelectItem>
                <SelectItem value="Tripoli">Tripoli</SelectItem>
                <SelectItem value="Sidon">Sidon</SelectItem>
                <SelectItem value="Tyre">Tyre</SelectItem>
                <SelectItem value="Baalbek">Baalbek</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
              <SelectTrigger className="w-full lg:w-40" data-testid="select-cuisine">
                <SelectValue placeholder="All Cuisines" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cuisines</SelectItem>
                <SelectItem value="lebanese">Lebanese</SelectItem>
                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPriceLevel} onValueChange={setSelectedPriceLevel}>
              <SelectTrigger className="w-full lg:w-40" data-testid="select-price">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="1">$ - Budget</SelectItem>
                <SelectItem value="2">$$ - Moderate</SelectItem>
                <SelectItem value="3">$$$ - Upscale</SelectItem>
                <SelectItem value="4">$$$$ - Fine Dining</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              onClick={handleSearch}
              className="bg-primary text-white hover:bg-primary/90"
              data-testid="button-search-home"
            >
              Search
            </Button>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedArea !== "all" || selectedCuisine !== "all" || selectedPriceLevel !== "all") && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Search: {searchQuery}
                </Badge>
              )}
              {selectedArea !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Area: {getAreaDisplayText(selectedArea)}
                </Badge>
              )}
              {selectedCuisine !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Cuisine: {selectedCuisine}
                </Badge>
              )}
              {selectedPriceLevel !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  Price: {'$'.repeat(parseInt(selectedPriceLevel))}
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-xs"
                data-testid="button-clear-filters"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {restaurants.length > 0 ? `${restaurants.length} restaurants found` : 'Popular Restaurants'}
            </h2>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48" data-testid="select-sort">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Sort by Rating</SelectItem>
                <SelectItem value="price">Sort by Price</SelectItem>
                <SelectItem value="distance">Sort by Distance</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-video rounded-t-2xl"></div>
                  <div className="bg-white p-6 rounded-b-2xl">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-semibold text-red-600 mb-2">Error loading restaurants</h3>
              <p className="text-gray-500 mb-6">
                {error.message || "An error occurred while fetching restaurants."}
              </p>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          ) : restaurants.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No restaurants found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or browse all available restaurants.
              </p>
              <Button 
                onClick={clearFilters}
                variant="outline"
                data-testid="button-browse-all"
              >
                Browse All Restaurants
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant: any) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
