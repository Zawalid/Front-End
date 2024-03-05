import { customFetch } from '../../utils/helpers';

export const getArticles = async () => await customFetch('/articles', 'Articles');

export const getArticle = async (id) => await customFetch(`/articles/${id}`, 'Article');

export const getTags = async () => await customFetch('/tags', 'Tags');
