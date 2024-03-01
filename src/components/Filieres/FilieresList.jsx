import { useFilieres } from '../../hooks/useFilieres';
import Filiere from './Filiere';
import FiliereSkeleton from './FiliereSkeleton';
import { List } from '../List';

export default function FilieresList({ searchQuery }) {
  const { filieres, isLoading, error } = useFilieres();
  function render() {
    return (
      filieres?.search(searchQuery || '') ||
      //   .customSort(sortBy, direction).customFilter(filter, tags)
      []
    );
  }

  if (isLoading) return <FilieresSkeleton />;
  return (
    <List
      renderList={render}
      renderItem={(filiere) => <Filiere key={filiere.id} filiere={filiere} />}
      itemsName='Articles'
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
