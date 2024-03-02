import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../Layouts/PageLayout';
import ArticlesList from '../components/Blog/ArticlesList';
import Actions from '../components/Actions';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { Search } from '../components/ui/Search';
import { ViewControl } from '../components/ui/ViewControl';
import { useTags } from '../hooks/useArticles';

export default function Blog() {
  const [view, setView] = useLocalStorageState('grid', 'blog-view');
  const { tags, isLoading } = useTags();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('s') || 'date';
  const direction = searchParams.get('d') || 'desc';
  const filter = searchParams.get('f') || 'all';
  const query = searchParams.get('q') || '';

  const setParam = (param) => {
    const params = { q: query, f: filter, s: sortBy, d: direction };
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
          prev.delete('s');
          prev.delete('d');
        }
        if (query === '') prev.delete('q');
        if (filter === 'all') prev.delete('f');
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
            <Actions>
              <Actions.SortBy
                sortBy={sortBy}
                setSortBy={(sortBy) => setParam({ s: sortBy })}
                options={[
                  {
                    name: 'Publication date',
                    value: 'date',
                  },
                  {
                    name: 'Title',
                    value: 'title',
                  },
                ]}
              />
              <Actions.OrderBy
                direction={direction}
                setDirection={(direction) => setParam({ d: direction })}
                sortBy={sortBy}
              />
              <Actions.Filter
                filter={filter}
                onFilterChange={(filter) => setParam({ f: filter })}
                items={tags ? ['all', ...tags.map((t) => t.name).toSorted(), 'other'] : []}
                isLoading={isLoading}
              />
            </Actions>
            <Search
              placeholder='Search Articles...'
              query={query}
              onChange={(query) => setParam({ q: query })}
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
