import { useFilieres, useSectors } from '../../hooks/useFilieres';
import Filiere from './Filiere';
import FiliereSkeleton from './FiliereSkeleton';
import { List } from '../List';
import { useSearchParams } from 'react-router-dom';
import { getParams } from '../../utils/helpers';

export default function FilieresList({ view, defaultParams }) {
  const { filieres, isLoading, error } = useFilieres();
  console.log(filieres);
  const { sectors } = useSectors();
  const [searchParams] = useSearchParams();
  const { sortBy, direction, filter, query } = getParams(searchParams, defaultParams);

  const render = () =>
    filieres?.search(query).customSort(sortBy, direction).customFilter(filter, sectors, 'sector') ||
    [];

  if (isLoading) return <FilieresSkeleton />;
  return (
    <List
      renderList={render}
      renderItem={(filiere) => <Filiere key={filiere.id} filiere={filiere} view={view} />}
      itemsName='Filieres'
      error={error}
      view={view}
    />
  );
}

function FilieresSkeleton() {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {Array.from({ length: 3 }, (_, i) => (
        <FiliereSkeleton key={i} />
      ))}{' '}
    </div>
  );
}
