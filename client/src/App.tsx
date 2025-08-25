import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import RestaurantDetail from "@/pages/RestaurantDetail";
import UserDashboard from "@/pages/UserDashboard";
import ManagerDashboard from "@/pages/ManagerDashboard";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading ? (
        // Show loading state
        <Route path="*" component={Landing} />
      ) : !isAuthenticated ? (
        // Not authenticated - show only landing page
        <>
          <Route path="/" component={Landing} />
          <Route path="*" component={Landing} />
        </>
      ) : (
        // Authenticated - show full app
        <>
          <Route path="/" component={Home} />
          <Route path="/restaurant/:slug" component={RestaurantDetail} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/manager" component={ManagerDashboard} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
