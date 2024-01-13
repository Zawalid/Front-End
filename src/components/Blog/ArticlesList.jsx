import { useAutoAnimate } from '@formkit/auto-animate/react';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { usePagination } from '../../hooks/usePagination';

export default function ArticlesList({ view, sortBy, direction }) {
  const { articles, isLoading, error } = useArticles();
  const { Pagination, currentPage, rowsPerPage } = usePagination(articles?.length, 'Articles');
  const [parent] = useAutoAnimate({ duration: 500 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div
        className={`mt-10 grid  gap-8 p-3 ${
          view === 'grid'
            ? 'grid-cols-[repeat(auto-fit,minmax(300px,350px))] grid-rows-[repeat(auto-fit,350px)]  justify-center '
            : ''
        }`}
        ref={parent}
      >
        {articles
          .toSorted((a, b) => {
            if (sortBy === 'date') {
              return direction === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
            }
            if (sortBy === 'title') {
              return direction === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
            }
          })
          .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
          .map((article) => (
            <Article key={article.id} article={article} view={view} />
          ))}
      </div>
      {Pagination}
    </>
  );
}
