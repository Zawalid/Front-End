import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../Layouts/PageLayout';
import ArticlesList from '../components/Blog/ArticlesList';
import Actions from '../components/Blog/Actions/Actions';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { Search } from '../components/ui/Search';
import { ViewControl } from '../components/ui/ViewControl';

export default function Blog() {
  const [view, setView] = useLocalStorageState('grid', 'blog-view');
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'date';
  const direction = searchParams.get('direction') || 'desc';
  const filter = searchParams.get('filter') || 'all';
  const query = searchParams.get('s') || '';

  const setParam = (param) => {
    const params = { s: query, filter, sortBy, direction };
    setSearchParams(
      {
        ...params,
        ...param,
      },
      { replace: true },
    );
  };

  useEffect(() => {
    setSearchParams(
      (prev) => {
        if (
          !['date', 'title'].includes(sortBy) ||
          !['asc', 'desc'].includes(direction) ||
          (sortBy === 'date' && direction === 'desc')
        ) {
          prev.delete('sortBy');
          prev.delete('direction');
        }
        if (query === '') prev.delete('s');
        if (filter === 'all') prev.delete('filter');
        return prev;
      },
      { replace: true },
    );
  }, [setSearchParams, sortBy, direction, query, filter]);

  return (
    <PageLayout title='blog' image='blog'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between gap-8'>
          <div className='flex flex-1 items-center gap-3 sm:w-[40%] sm:flex-none'>
            <Actions
              sortBy={sortBy}
              setSortBy={(sortBy) => setParam({ sortBy })}
              direction={direction}
              setDirection={(direction) => setParam({ direction })}
              filter={filter}
              onFilterChange={(filter) => setParam({ filter })}
            />
            <Search
              placeholder='Search Articles...'
              query={query}
              onChange={(query) => setParam({ s: query })}
            />
          </div>
          <ViewControl view={view} setView={setView} />
        </div>
        <ArticlesList
          view={view}
          filter={filter}
          searchQuery={query || ''}
          sortBy={sortBy}
          direction={direction}
        />
      </div>
    </PageLayout>
  );
}
