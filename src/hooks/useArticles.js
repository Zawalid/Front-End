import { useQuery } from '@tanstack/react-query';
import { getArticle, getArticles, getTags } from '../services/api/apiArticles';

export function useArticles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  return {
    articles: data?.map(a => ({
      ...a,
      cover : a.files
    })),
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
    article: {...data,cover : data?.files},
    isLoading,
    error,
  };
}

export function useTags() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  return {
    tags: data,
    isLoading,
    error,
  };
}
