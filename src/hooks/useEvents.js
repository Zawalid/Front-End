import { useQuery } from '@tanstack/react-query';
import { getEvent, getEvents } from '../services/api/apiEvenements';
export function useEvents() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  return {
    events: data,
    isLoading,
    error,
  };
}

export function useEvent(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: () => getEvent(id),
  });

  return {
    event: data,
    isLoading,
    error,
  };
}
// export function useSectors() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['sectors'],
//     queryFn: getSectors,
//   });

//   return {
//     sectors: data,
//     isLoading,
//     error,
//   };
// }
