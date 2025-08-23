import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Utensils, Menu, User, Settings, LogOut, Calendar, Star } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import LanguageToggle from "./LanguageToggle";
import CurrencyToggle from "./CurrencyToggle";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Restaurants", href: "/", current: location === "/" },
    { name: "My Reservations", href: "/dashboard", current: location === "/dashboard" },
    { name: "Manager", href: "/manager", current: location === "/manager" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Utensils className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TableMap</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated && (
              <>
                <Link 
                  href="/"
                  className={`font-medium transition-colors ${
                    location === "/" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                  data-testid="nav-restaurants"
                >
                  Restaurants
                </Link>
                <Link 
                  href="/dashboard"
                  className={`font-medium transition-colors ${
                    location === "/dashboard" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                  data-testid="nav-dashboard"
                >
                  My Reservations
                </Link>
                <Link 
                  href="/manager"
                  className={`font-medium transition-colors ${
                    location === "/manager" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                  data-testid="nav-manager"
                >
                  Manager
                </Link>
              </>
            )}
            
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <CurrencyToggle />
            </div>
          </nav>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {isAuthenticated ? (
                    <>
                      <Link 
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-primary"
                      >
                        Restaurants
                      </Link>
                      <Link 
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-primary"
                      >
                        My Reservations
                      </Link>
                      <Link 
                        href="/manager"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-primary"
                      >
                        Manager
                      </Link>
                      <div className="border-t pt-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <LanguageToggle />
                          <CurrencyToggle />
                        </div>
                        <Button 
                          onClick={() => window.location.href = "/api/logout"}
                          variant="outline"
                          className="w-full"
                        >
                          Sign Out
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <LanguageToggle />
                        <CurrencyToggle />
                      </div>
                      <Button 
                        onClick={() => window.location.href = "/api/login"}
                        className="w-full bg-primary text-white hover:bg-primary/90"
                      >
                        Sign In
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full" data-testid="button-user-menu">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.profileImageUrl || ""} alt={user.firstName || ""} />
                        <AvatarFallback className="bg-primary text-white">
                          {user.firstName?.[0]}{user.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex flex-col space-y-1 p-2">
                      <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-accent mr-1" />
                        <span className="text-xs font-medium">{user.points || 0} points</span>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer" data-testid="dropdown-dashboard">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>My Reservations</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/manager" className="cursor-pointer" data-testid="dropdown-manager">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Restaurant Manager</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => window.location.href = "/api/logout"}
                      className="cursor-pointer"
                      data-testid="dropdown-logout"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  onClick={() => window.location.href = "/api/login"}
                  className="bg-primary text-white hover:bg-primary/90"
                  data-testid="button-signin-header"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
