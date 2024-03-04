import { useFilieres } from '../../hooks/useFilieres';
import Filiere from './Filiere';
import FiliereSkeleton from './FiliereSkeleton';
import { List } from '../List';
import { useSearchParams } from 'react-router-dom';
import { getParams } from '../../utils/helpers';

export default function FilieresList({ defaultParams }) {
  const { filieres, isLoading, error } = useFilieres();
  const [searchParams] = useSearchParams();
  const { sortBy, direction, query } = getParams(searchParams, defaultParams);

  const render = () => filieres?.search(query || '').customSort(sortBy, direction) || [];
  // .customFilter(filter, tags)

  if (isLoading) return <FilieresSkeleton />;
  return (
    <List
      renderList={render}
      renderItem={(filiere) => <Filiere key={filiere.id} filiere={filiere} />}
      itemsName='Filieres'
      error={error}
      className='flex flex-wrap justify-center gap-8 lg:justify-start'
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
