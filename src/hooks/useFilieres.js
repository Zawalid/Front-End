import { useQuery } from '@tanstack/react-query';
import { getFiliere, getFilieres, getSectors } from '../services/api/apiFilieres';

export function useFilieres() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['filieres'],
    queryFn: getFilieres,
  });

  return {
    filieres: data,
    isLoading,
    error,
  };
}

export function useFiliere(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['filiere', id],
    queryFn: () => getFiliere(id),
  });

  return {
    filiere: data,
    isLoading,
    error,
  };
}
export function useSectors() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['sectors'],
    queryFn: getSectors,
  });

  return {
    sectors: data,
    isLoading,
    error,
  };
}
