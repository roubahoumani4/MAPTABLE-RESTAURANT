import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useAuth() {
  const queryClient = useQueryClient();
  
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/auth/me", {
          credentials: "include",
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            // User is not authenticated, return null
            return null;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        return userData;
      } catch (error) {
        console.error("Auth check failed:", error);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchInterval: false,
    staleTime: 5 * 60 * 1000, // 5 minutes instead of Infinity
    gcTime: 10 * 60 * 1000,
  });

  const refreshAuth = () => {
    queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    refreshAuth,
  };
}
