import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../Layouts/PageLayout';
import ArticlesList from '../components/Blog/ArticlesList';
import Actions from '../components/Blog/Actions/Actions';
import { SearchInput } from '../components/ui/SearchInput';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

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
    <PageLayout title='blog'>
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
            <Search query={query} onChange={(query) => setParam({ s: query })} />
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

function ViewControl({ view, setView }) {
  return (
    <div className='flex items-center gap-3'>
      <button
        className={`button-icon ${view === 'list' ? 'active' : ''}`}
        onClick={() => setView('list')}
      >
        <i className='fa-solid fa-list'></i>
      </button>
      <button
        className={`button-icon ${view === 'grid' ? 'active' : ''}`}
        onClick={() => setView('grid')}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='16px'
          width='16px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z'></path>
        </svg>
      </button>
    </div>
  );
}
function Search({ query, onChange }) {
  const [searchQuery, setSearchQuery] = useState(query || '');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onChange(searchQuery);
      }}
      className='w-full '
    >
      <SearchInput
      placeholder='Search Articles'
        value={searchQuery}
        onChange={(e) => {
          const query = e.target.value;
          setSearchQuery(query);
          onChange(query);
        }}
        iconClassName='text-lg'
      />
    </form>
  );
}
