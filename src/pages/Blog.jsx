import { useState } from 'react';
import PageLayout from '../Layouts/PageLayout';
import ArticlesList from '../components/Blog/ArticlesList';
import Actions from '../components/Blog/Actions/Actions';
import { SearchInput } from '../components/ui/SearchInput';
import { usePagination } from '../hooks/usePagination';

export default function Blog() {
  const [articles] = useState(Array.from({ length: 30 }));
  const [view, setView] = useState('grid');
  const { Pagination, currentPage, rowsPerPage } = usePagination(articles.length);

  return (
    <PageLayout title='blog'>
      <div className='space-y-8'>
        <div className='flex items-center gap-8 justify-between'>
          <div className='flex items-center gap-3 sm:flex-none sm:w-[40%] flex-1'>
            <Actions />
            <Search />
          </div>
          <ViewControl view={view} setView={setView} />
        </div>
        <ArticlesList
          articles={articles.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)}
          view={view}
        />
        {Pagination}
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
function Search() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='w-full '>
      <SearchInput />
    </form>
  );
}
