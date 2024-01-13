import { useQuery } from '@tanstack/react-query';
import { getArticle, getArticles } from '../services/api/apiArticles';

export function useArticles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  return {
    articles: data,
    isLoading,
    error,
  };
}

export function useArticle(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticle(id),
  });

  return {
    article: data,
    isLoading,
    error,
  };
}
