import { DropDown } from "../../ui/DropDown";
import {options} from './Actions'

export function OrderBy({ direction, setDirection, sortBy}) {
    return (
      <DropDown.NestedMenu
        toggler={
          <DropDown.Button className='justify-between'>
            <i className='fa-solid fa-arrow-down-z-a'></i>{' '}
            <span className='flex-1 text-start'>Order By</span>
            <i className='fa-solid fa-chevron-right'></i>
          </DropDown.Button>
        }
        options={options}
      >
        <DropDown.Button onClick={() => setDirection('asc')
      } className='justify-between'
      isCurrent={direction === 'asc'}
      >
          <span>{sortBy === 'title' ? 'A-Z' : 'Oldest-Newest'}</span>
          {direction === 'asc' && <i className='fa-solid fa-check'></i>}
        </DropDown.Button>
        <DropDown.Button onClick={() => setDirection('desc')} className='justify-between'
        isCurrent={direction === 'desc'}
        >
          <span>{sortBy === 'title' ? 'Z-A' : 'Newest-Oldest'}</span>
          {direction === 'desc' && <i className='fa-solid fa-check'></i>}
        </DropDown.Button>
      </DropDown.NestedMenu>
    );
  }