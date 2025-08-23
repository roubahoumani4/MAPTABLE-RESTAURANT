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
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedPriceLevel, setSelectedPriceLevel] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const { data: restaurants = [], isLoading } = useQuery({
    queryKey: ["/api/restaurants", { 
      query: searchQuery,
      cuisine: selectedCuisine,
      priceLevel: selectedPriceLevel ? parseInt(selectedPriceLevel) : undefined,
      rating: sortBy === "rating" ? 4 : undefined
    }],
  });

  const handleSearch = () => {
    // The query will automatically refetch due to the dependency array
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCuisine("");
    setSelectedPriceLevel("");
    setSortBy("rating");
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
            
            <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
              <SelectTrigger className="w-full lg:w-40" data-testid="select-cuisine">
                <SelectValue placeholder="All Cuisines" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cuisines</SelectItem>
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
                <SelectItem value="">All Prices</SelectItem>
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
          {(searchQuery || selectedCuisine || selectedPriceLevel) && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Search: {searchQuery}
                </Badge>
              )}
              {selectedCuisine && (
                <Badge variant="secondary" className="text-xs">
                  Cuisine: {selectedCuisine}
                </Badge>
              )}
              {selectedPriceLevel && (
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
