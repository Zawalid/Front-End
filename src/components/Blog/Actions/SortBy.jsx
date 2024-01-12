import { DropDown } from "../../ui/DropDown";
import {options} from './Actions'

export function SortBy({ sortBy, setSortBy, }) {
    return (
      <DropDown.NestedMenu
        toggler={
          <DropDown.Button className='justify-between'>
            <i className='fa-solid fa-arrow-down-wide-short'></i>{' '}
            <span className='flex-1 text-start'>Sort By</span>
            <i className='fa-solid fa-chevron-right'></i>
          </DropDown.Button>
        }
        options={options}
      >
        <DropDown.Button onClick={() => setSortBy('')} className='justify-between'>
          <span>Publication date</span>
          {sortBy === 'createdAt' && <i className='fa-solid fa-check'></i>}
        </DropDown.Button>
        <DropDown.Button onClick={() => setSortBy('title')} className='justify-between'>
          <span>Title</span>
          {sortBy === 'title' && <i className='fa-solid fa-check'></i>}
        </DropDown.Button>
      </DropDown.NestedMenu>
    );
  }