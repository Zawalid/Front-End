import { useAutoAnimate } from '@formkit/auto-animate/react';
import { usePagination } from '../hooks/usePagination';
import { ErrorMessage } from './ui/ErrorMessage';

export function List({ renderList, renderItem, itemsName, error, view }) {
  const { Pagination, currentPage, rowsPerPage } = usePagination(renderList()?.length, itemsName);
  const [parent] = useAutoAnimate({ duration: 500 });

  if (error) return <ErrorMessage className='h-[70vh] text-xl' message={error.message} />;
  if (renderList().length === 0)
    return (
      <div className='flex h-[70vh] flex-col items-center justify-center gap-2'>
        <h1 className='text-3xl font-extrabold text-text-primary'>No {itemsName} Found</h1>
        <p className='font-medium text-text-secondary'>Try searching for something else</p>
      </div>
    );

  return (
    <>
      <div
        className={`min-h-dvh ${
          view === 'grid' ? 'flex flex-wrap  justify-center gap-8 lg:justify-start' : 'space-y-5'
        }`}
        ref={parent}
      >
        {renderList()
          .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
          .map((item) => renderItem(item))}
      </div>
      {Pagination}
    </>
  );
}
