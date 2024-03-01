import { FiChevronRight,FiCheck } from 'react-icons/fi';
import { PiSortAscending } from 'react-icons/pi';
import { DropDown } from '../../ui/DropDown';
import { options } from './Actions';

export function SortBy({ sortBy, setSortBy }) {
  return (
    <DropDown.NestedMenu
      toggler={
        <DropDown.Button className='justify-between'>
           <PiSortAscending className='text-lg' />
            <span className='flex-1 text-start'>Sort By</span>
            <FiChevronRight className='text-lg' />
        </DropDown.Button>
      }
      options={{...options,trigger : 'click'}}
      >
      <DropDown.Button
        onClick={() => setSortBy('date')}
        className='justify-between'
        isCurrent={sortBy === 'date'}
      >
        <span>Publication date</span>
        {sortBy === 'date' && <FiCheck />}
      </DropDown.Button>
      <DropDown.Button
        onClick={() => setSortBy('title')}
        className='justify-between'
        isCurrent={sortBy === 'title'}
      >
        <span>Title</span>
        {sortBy === 'title' && <FiCheck />}
      </DropDown.Button>
    </DropDown.NestedMenu>
  );
}
