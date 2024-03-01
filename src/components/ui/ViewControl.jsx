import { PiGridFourFill, PiListBold } from 'react-icons/pi';

export function ViewControl({ view, setView }) {
  return (
    <div className='flex items-center gap-3'>
      <button
        className={`button-icon ${view === 'list' ? 'active' : ''}`}
        onClick={() => setView('list')}
      >
        <PiListBold className='text-lg' />
      </button>
      <button
        className={`button-icon ${view === 'grid' ? 'active' : ''}`}
        onClick={() => setView('grid')}
      >
        <PiGridFourFill className='text-lg' />
      </button>
    </div>
  );
}
