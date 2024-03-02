import { useFilieres } from '../../hooks/useFilieres';
import Filiere from './Filiere';
import FiliereSkeleton from './FiliereSkeleton';
import { List } from '../List';

export default function FilieresList({ searchQuery, sortBy, direction }) {
  const { filieres, isLoading, error } = useFilieres();

  const render = () => filieres?.search(searchQuery || '').customSort(sortBy, direction) || [];
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
