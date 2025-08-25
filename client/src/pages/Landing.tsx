import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Star, MapPin, Clock, Users, Crown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import LoginModal from "@/components/LoginModal";
import RestaurantCard from "@/components/RestaurantCard";

export default function Landing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedPriceLevel, setSelectedPriceLevel] = useState("all");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [showCuisineDropdown, setShowCuisineDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      console.log('Click outside detected, target:', target);
      
      // Check if the click is outside all dropdown containers
      const isOutsideAreaDropdown = !target.closest('.area-dropdown-container');
      const isOutsideCuisineDropdown = !target.closest('.cuisine-dropdown-container');
      const isOutsideBudgetDropdown = !target.closest('.budget-dropdown-container');
      
      console.log('Click outside results:', {
        isOutsideAreaDropdown,
        isOutsideCuisineDropdown,
        isOutsideBudgetDropdown,
        currentStates: {
          area: showAreaDropdown,
          cuisine: showCuisineDropdown,
          budget: showBudgetDropdown
        }
      });
      
      // Only close dropdowns if we're outside their respective containers
      if (isOutsideAreaDropdown && showAreaDropdown) {
        console.log('Closing area dropdown');
        setShowAreaDropdown(false);
      }
      if (isOutsideCuisineDropdown && showCuisineDropdown) {
        console.log('Closing cuisine dropdown');
        setShowCuisineDropdown(false);
      }
      if (isOutsideBudgetDropdown && showBudgetDropdown) {
        console.log('Closing budget dropdown');
        setShowBudgetDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showAreaDropdown, showCuisineDropdown, showBudgetDropdown]);

  // Debug effect to monitor dropdown state changes
  useEffect(() => {
    console.log('Dropdown states changed:', {
      area: showAreaDropdown,
      cuisine: showCuisineDropdown,
      budget: showBudgetDropdown
    });
  }, [showAreaDropdown, showCuisineDropdown, showBudgetDropdown]);

  // Helper functions to get display text for Select components
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

  const getCuisineDisplayText = (cuisine: string) => {
    return cuisine === "all" ? "All Cuisines" : cuisine;
  };

  const getBudgetDisplayText = (level: string) => {
    if (level === "all") return "Any Budget";
    const budgetMap: { [key: string]: string } = {
      "1": "$ (Under $20)",
      "2": "$$ ($20-$40)",
      "3": "$$$ ($40-$80)",
      "4": "$$$$ ($80+)"
    };
    return budgetMap[level] || "Select Budget";
  };

  // Debounce search query to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data: restaurants = [], isLoading } = useQuery({
    queryKey: ["restaurants", debouncedSearchQuery, selectedArea, selectedCuisine, selectedPriceLevel],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (debouncedSearchQuery.trim()) {
        params.append("query", debouncedSearchQuery.trim());
      }
      if (selectedArea && selectedArea !== "all") {
        params.append("area", selectedArea);
      }
      if (selectedCuisine && selectedCuisine !== "all") {
        params.append("cuisine", selectedCuisine);
      }
      if (selectedPriceLevel && selectedPriceLevel !== "all") {
        params.append("priceLevel", selectedPriceLevel);
      }
      
      const response = await fetch(`/api/restaurants?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  const handleSearch = () => {
    // The search is now handled automatically by React Query
    // when searchQuery or selectedArea changes
  };

  const handleAuthSuccess = (user: any) => {
    // Redirect to home page after successful authentication
    window.location.href = "/";
  };

  // Function to render dropdowns at body level to avoid clipping
  const renderDropdown = (isOpen: boolean, children: React.ReactNode, className: string) => {
    if (!isOpen) return null;
    
    return (
      <div 
        className={className}
        style={{
          position: 'fixed',
          zIndex: 9999,
          backgroundColor: 'white',
          border: '2px solid #d1d5db',
          borderRadius: '8px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          maxHeight: '240px',
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CSS to fix dropdown positioning issues */}
      <style>{`
        .grid > div {
          position: relative !important;
          overflow: visible !important;
        }
        
        .area-dropdown-container,
        .cuisine-dropdown-container,
        .budget-dropdown-container {
          position: relative !important;
          overflow: visible !important;
        }
        
        .area-dropdown-container > div[style*="position: absolute"],
        .cuisine-dropdown-container > div[style*="position: absolute"],
        .budget-dropdown-container > div[style*="position: absolute"] {
          position: absolute !important;
          z-index: 9999 !important;
        }
      `}</style>
      
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
              <a href="#restaurants" className="text-gray-700 hover:text-primary font-medium">Restaurants</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium">How It Works</a>
              <a href="#for-restaurants" className="text-gray-700 hover:text-primary font-medium">For Restaurants</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowLoginModal(true)}
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
        className="relative bg-cover bg-center min-h-[600px] py-20 overflow-visible"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.7), rgba(15, 118, 110, 0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Reserve Your Perfect Table</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">Discover Lebanon's finest restaurants and book with interactive table selection</p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-6xl mx-auto overflow-visible">
              {/* Main Search Row */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6 overflow-visible">
                {/* Search Input - Takes 2 columns */}
                <div className="lg:col-span-2 overflow-visible">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Search Restaurants
                  </label>
                  <div className="relative overflow-visible">
                    <input
                      type="text" 
                      placeholder="Search by name, cuisine, or description..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 placeholder-gray-500"
                      data-testid="input-search"
                    />
                    {searchQuery && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                        {searchQuery.length} characters
                      </div>
                    )}
                  </div>
                </div>

                {/* Area Filter */}
                <div className="overflow-visible">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City & Area
                  </label>
                  <div className="relative area-dropdown-container overflow-visible">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        
                        console.log('Area dropdown clicked, current state:', showAreaDropdown);
                        // Use a more robust state update approach
                        setShowAreaDropdown(prevState => {
                          const newState = !prevState;
                          console.log('Setting area dropdown to:', newState);
                          return newState;
                        });
                      }}
                      className="w-full h-[52px] border-2 border-gray-200 focus:border-primary rounded-lg px-4 py-2 text-left bg-white flex items-center justify-between"
                    >
                      <span className={selectedArea === "all" ? "text-gray-500" : "text-gray-900"}>
                        {getAreaDisplayText(selectedArea)}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showAreaDropdown && (
                      <div 
                        className="absolute z-[9999] w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto" 
                        style={{
                          position: 'absolute',
                          zIndex: 9999,
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '4px'
                        }}
                      >
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("all"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          All Cities & Areas
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Hamra"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Hamra, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Mar Mikhael"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Mar Mikhael, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Gemmayze"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Gemmayze, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Raouche"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Raouche, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Ashrafieh"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Ashrafieh, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Verdun"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Verdun, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Badaro"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Badaro, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Monot"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Monot, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Saifi"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Saifi, Beirut
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Byblos"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Byblos
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Jounieh"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Jounieh
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Tripoli"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Tripoli
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Sidon"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Sidon
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Tyre"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Tyre
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedArea("Baalbek"); 
                            setShowAreaDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Baalbek
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cuisine Filter */}
                <div className="overflow-visible">
                  <label className="block text-left text-sm font-semibold text-gray-700 mb-2">
                    Cuisine Type
                  </label>
                  <div className="relative cuisine-dropdown-container overflow-visible">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        
                        console.log('Cuisine dropdown clicked, current state:', showCuisineDropdown);
                        // Use a more robust state update approach
                        setShowCuisineDropdown(prevState => {
                          const newState = !prevState;
                          console.log('Setting cuisine dropdown to:', newState);
                          return newState;
                        });
                      }}
                      className="w-full h-[52px] border-2 border-gray-200 focus:border-primary rounded-lg px-4 py-2 text-left bg-white flex items-center justify-between"
                    >
                      <span className={selectedCuisine === "all" ? "text-gray-500" : "text-gray-900"}>
                        {getCuisineDisplayText(selectedCuisine)}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showCuisineDropdown && (
                      <div 
                        className="absolute z-[9999] w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto" 
                        style={{
                          position: 'absolute',
                          zIndex: 9999,
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '4px'
                        }}
                      >
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("all"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          All Cuisines
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Lebanese"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Lebanese
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Japanese"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Japanese
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Italian"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Italian
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Indian"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Indian
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Mediterranean"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Mediterranean
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Seafood"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Seafood
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Street Food"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Street Food
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedCuisine("Fusion"); 
                            setShowCuisineDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Fusion
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Level and Search Button Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Budget Range:
                  </label>
                  <div className="relative budget-dropdown-container overflow-visible">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        
                        console.log('Budget dropdown clicked, current state:', showBudgetDropdown);
                        // Use a more robust state update approach
                        setShowBudgetDropdown(prevState => {
                          const newState = !prevState;
                          console.log('Setting budget dropdown to:', newState);
                          return newState;
                        });
                      }}
                      className="w-48 h-[52px] border-2 border-gray-200 focus:border-primary rounded-lg px-4 py-2 text-left bg-white flex items-center justify-between"
                    >
                      <span className={selectedPriceLevel === "all" ? "text-gray-500" : "text-gray-900"}>
                        {getBudgetDisplayText(selectedPriceLevel)}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showBudgetDropdown && (
                      <div 
                        className="absolute z-[9999] w-48 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg" 
                        style={{
                          position: 'absolute',
                          zIndex: 9999,
                          top: '100%',
                          left: 0,
                          marginTop: '4px'
                        }}
                      >
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedPriceLevel("all"); 
                            setShowBudgetDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          Any Budget
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedPriceLevel("1"); 
                            setShowBudgetDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-green-600 font-semibold">$</span>
                            <span>Budget Friendly</span>
                            <span className="text-xs text-gray-500">(Under $20)</span>
                          </span>
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedPriceLevel("2"); 
                            setShowBudgetDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-blue-600 font-semibold">$$</span>
                            <span>Moderate</span>
                            <span className="text-xs text-gray-500">($20-$40)</span>
                          </span>
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedPriceLevel("3"); 
                            setShowBudgetDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-orange-600 font-semibold">$$$</span>
                            <span>Expensive</span>
                            <span className="text-xs text-gray-500">($40-$80)</span>
                          </span>
                        </div>
                        <div
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            setSelectedPriceLevel("4"); 
                            setShowBudgetDropdown(false); 
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 text-gray-900"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-purple-600 font-semibold">$$$$</span>
                            <span>Luxury</span>
                            <span className="text-xs text-gray-500">($80+)</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button 
                    onClick={handleSearch}
                    className="bg-accent text-white px-8 py-3 hover:bg-accent/90 font-semibold text-lg h-[52px] min-w-[140px]"
                    data-testid="button-search"
                  >
                    🔍 Search
                  </Button>
                  
                  {(debouncedSearchQuery || selectedArea !== "all" || selectedCuisine !== "all" || selectedPriceLevel !== "all") && (
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedArea("all");
                        setSelectedCuisine("all");
                        setSelectedPriceLevel("all");
                      }}
                      className="h-[52px] px-6 border-2 border-gray-300 hover:border-gray-400 text-gray-900"
                    >
                      ✕ Clear All
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => setShowLoginModal(true)}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold"
                size="lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Join TableMap
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section id="restaurants" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {debouncedSearchQuery || selectedArea !== "all" || selectedCuisine !== "all" || selectedPriceLevel !== "all" ? "Search Results" : "Featured Restaurants"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {debouncedSearchQuery || selectedArea !== "all" || selectedCuisine !== "all" || selectedPriceLevel !== "all" 
                ? `Found ${restaurants.length} restaurant${restaurants.length !== 1 ? 's' : ''} matching your criteria.`
                : "Discover exceptional dining experiences across Lebanon with our curated selection of top-rated restaurants."
              }
            </p>
            {(debouncedSearchQuery || selectedArea !== "all" || selectedCuisine !== "all" || selectedPriceLevel !== "all") && (
              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                  {debouncedSearchQuery && (
                    <Badge variant="secondary" className="px-3 py-1">
                      🔍 Search: "{debouncedSearchQuery}"
                    </Badge>
                  )}
                  {selectedArea !== "all" && (
                    <Badge variant="secondary" className="px-3 py-1">
                      📍 Area: {selectedArea}
                    </Badge>
                  )}
                  {selectedCuisine !== "all" && (
                    <Badge variant="secondary" className="px-3 py-1">
                      🍽️ Cuisine: {selectedCuisine}
                    </Badge>
                  )}
                  {selectedPriceLevel !== "all" && (
                    <Badge variant="secondary" className="px-3 py-1">
                      💰 Budget: {(() => {
                        const levels = { '1': '$ (Under $20)', '2': '$$ ($20-$40)', '3': '$$$ ($40-$80)', '4': '$$$$ ($80+)' };
                        return levels[selectedPriceLevel as keyof typeof levels] || selectedPriceLevel;
                      })()}
                    </Badge>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedArea("all");
                    setSelectedCuisine("all");
                    setSelectedPriceLevel("all");
                  }}
                  className="text-sm text-gray-900"
                >
                  ✕ Clear All Filters
                </Button>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <Utensils className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Loading restaurants...</h3>
              <p className="text-gray-500">Please wait while we fetch the latest restaurant data.</p>
            </div>
          ) : restaurants.length === 0 ? (
            <div className="text-center py-12">
              <Utensils className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No restaurants available</h3>
              <p className="text-gray-500">Check back later for featured restaurants in your area.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.slice(0, 6).map((restaurant: any) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-16">
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
      <footer id="for-restaurants" className="bg-gray-900 text-gray-300 py-12">
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
                <li><a href="#restaurants" className="hover:text-white transition-colors">Find Restaurants</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
