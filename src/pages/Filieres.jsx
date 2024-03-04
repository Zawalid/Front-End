import { useSearchParams } from 'react-router-dom';
import PageLayout from '../Layouts/PageLayout';
import FilieresList from '../components/Filieres/FilieresList';
import { Search } from '../components/ui/Search';
import Actions from '../components/Actions';
import { useEffect } from 'react';
import { useSectors } from '../hooks/useFilieres';

export default function Filieres() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sectors, isLoading } = useSectors();

  const sortBy = searchParams.get('s') || 'title';
  const direction = searchParams.get('d') || 'asc';
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
          !['title', 'duration', 'interns'].includes(sortBy) ||
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
    <PageLayout title='filieres' image='filieres'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between gap-8'>
          <div className='flex flex-1 items-center gap-3 sm:w-[40%] sm:flex-none'>
            <Actions>
              <Actions.SortBy
                sortBy={sortBy}
                setSortBy={(sortBy) => setParam({ s: sortBy })}
                options={[
                  {
                    name: 'Title',
                    value: 'title',
                  },
                  {
                    name: 'Duration',
                    value: 'duration',
                  },
                  {
                    name: 'Interns',
                    value: 'interns',
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
                itemsName='sectors'
                items={sectors || []}
                isLoading={isLoading}
              />
            </Actions>
            <Search
              placeholder='Search Filieres...'
              query={query}
              onChange={(query) => setParam({ q: query })}
            />
          </div>
        </div>
        <FilieresList searchQuery={query} sortBy={sortBy} direction={direction} />
      </div>
    </PageLayout>
  );
}
