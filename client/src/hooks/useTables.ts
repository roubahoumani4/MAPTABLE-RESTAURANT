import { useState, useEffect } from 'react';
import { Table } from '../lib/types';

interface UseTablesOptions {
  restaurantId?: string;
  sourceMapHash?: string;
  enabled?: boolean;
}

interface UseTablesReturn {
  tables: Table[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useTables(options: UseTablesOptions = {}): UseTablesReturn {
  const { restaurantId, sourceMapHash, enabled = true } = options;
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTables = async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      let url = '/api/tables';
      const params = new URLSearchParams();
      
      if (restaurantId) {
        params.append('restaurantId', restaurantId);
      }
      
      if (sourceMapHash) {
        params.append('sourceMapHash', sourceMapHash);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch tables: ${response.statusText}`);
      }

      const data = await response.json();
      setTables(data.tables || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tables');
      console.error('Error fetching tables:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTables();
  }, [restaurantId, sourceMapHash, enabled]);

  const refetch = () => {
    fetchTables();
  };

  return {
    tables,
    loading,
    error,
    refetch
  };
}
