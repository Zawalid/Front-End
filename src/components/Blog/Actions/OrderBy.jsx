import { FiCheck, FiChevronRight } from "react-icons/fi";
import { MdOutlineSortByAlpha } from 'react-icons/md';

import { DropDown } from "../../ui/DropDown";
import {options} from './Actions'

export function OrderBy({ direction, setDirection, sortBy}) {
    return (
      <DropDown.NestedMenu
        toggler={
          <DropDown.Button className='justify-between'>
            <MdOutlineSortByAlpha className='text-lg' />
            <span className='flex-1 text-start'>Order By</span>
            <FiChevronRight className='text-lg' />
          </DropDown.Button>
        }
        options={{...options,trigger : 'click'}}
      >
        <DropDown.Button onClick={() => setDirection('asc')
      } className='justify-between'
      isCurrent={direction === 'asc'}
      >
          <span>{sortBy === 'title' ? 'A-Z' : 'Oldest-Newest'}</span>
          {direction === 'asc' && <FiCheck />}
        </DropDown.Button>
        <DropDown.Button onClick={() => setDirection('desc')} className='justify-between'
        isCurrent={direction === 'desc'}
        >
          <span>{sortBy === 'title' ? 'Z-A' : 'Newest-Oldest'}</span>
          {direction === 'desc' && <FiCheck />}
        </DropDown.Button>
      </DropDown.NestedMenu>
    );
  }