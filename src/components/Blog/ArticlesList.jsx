import { useAutoAnimate } from '@formkit/auto-animate/react';
import Article from './Article';
import { useArticles, useTags } from '../../hooks/useArticles';
import { usePagination } from '../../hooks/usePagination';
import { Loading } from '../ui/Loading';
import { ErrorMessage } from '../ui/ErrorMessage';

Array.prototype.customSort = function (sortBy, direction) {
  return this.toSorted((a, b) => {
    if (sortBy === 'date') {
      return direction === 'asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
    if (sortBy === 'title') {
      return direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    }
  });
};

Array.prototype.search = function (searchQuery) {
  return this.filter((article) =>
    article.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );
};

Array.prototype.customFilter = function (filter, tags) {
  if (filter === 'all') return this;
  if (filter === 'other')
    return this.filter((article) =>
      article.tags
        .map((c) => c.toLowerCase())
        .every((tag) => !tags?.map((t) => t.name).includes(tag.toLowerCase())),
    );
  return this.filter((article) =>
    article.tags.map((t) => t.toLowerCase()).includes(filter.toLowerCase()),
  );
};

export default function ArticlesList({ view, searchQuery, filter, sortBy, direction }) {
  const { articles, isLoading, error } = useArticles();
  const { tags } = useTags();

  const [parent] = useAutoAnimate({ duration: 500 });
  const { Pagination, currentPage, rowsPerPage } = usePagination(
    render(articles)?.length,
    'Articles',
  );

  function render() {
    return articles?.search(searchQuery).customSort(sortBy, direction).customFilter(filter, tags);
  }

  if (isLoading) return <Loading className='h-[70vh] text-xl' />;
  if (error) return <ErrorMessage className='h-[70vh] text-xl' message={error.message} />;

  if (render(articles).length === 0)
    return (
      <div className='flex h-[70vh] flex-col items-center justify-center gap-2'>
        <h1 className='text-3xl font-extrabold text-text-primary'>No Articles Found</h1>
        {articles?.length !== 0 && (
          <p className='font-medium text-text-secondary'>
            Try searching for something else or changing the filters
          </p>
        )}
      </div>
    );
  return (
    <>
      <div
        className={`mt-10 p-3 ${
          view === 'grid'
            ? 'flex flex-wrap  gap-8 justify-center lg:justify-start'
            : 'space-y-5'
        }`}
        ref={parent}
      >
        {render()
          .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
          .map((article) => (
            <Article key={article.id} article={article} view={view} />
          ))}
      </div>
      {Pagination}
    </>
  );
}
