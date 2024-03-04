import Article from './Article';
import { useArticles, useTags } from '../../hooks/useArticles';
import ArticlesListSkeleton from './ArticlesListSkeleton';
import { List } from '../List';
import { getParams } from '../../utils/helpers';
import { useSearchParams } from 'react-router-dom';

Array.prototype.customFilter = function (filter, tags) {
  if (filter === 'all') return this;
  if (filter === 'other') {
    return this.filter((article) =>
      article.tags
        .map((c) => c.toLowerCase())
        .some((tag) => !tags?.map((t) => t.name.toLowerCase()).includes(tag)),
    );
  }
  return this.filter((article) =>
    article.tags.map((t) => t.toLowerCase()).includes(filter.toLowerCase()),
  );
};

export default function ArticlesList({ view, defaultParams }) {
  const { articles, isLoading, error } = useArticles();
  const { tags } = useTags();
  const [searchParams] = useSearchParams();
  const { sortBy, direction, query, filter } = getParams(searchParams, defaultParams);

  const render = () =>
    articles?.search(query).customSort(sortBy, direction).customFilter(filter, tags) || [];

  if (isLoading) return <ArticlesListSkeleton className='lg:justify-start' />;
  return (
    <List
      renderList={render}
      renderItem={(article) => <Article key={article.id} article={article} view={view} />}
      itemsName='Articles'
      error={error}
      className={`mt-10 p-3 ${
        view === 'grid' ? 'flex flex-wrap  justify-center gap-8 lg:justify-start' : 'space-y-5'
      }`}
    />
  );
}
