import { useState } from 'react';
import { FiCheck, FiChevronRight, FiFilter } from 'react-icons/fi';
import { MdOutlineSortByAlpha } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
import { PiSortAscending } from 'react-icons/pi';
import { DropDown } from './ui/DropDown';

const dropDownOptions = {
  className: 'w-52 sm:w-60 max-h-[280px] overflow-auto',
  placement: 'auto-start',
  shouldCloseOnClick: false,
};

export default function Actions({ children }) {
  return (
    <DropDown
      toggler={<IoEllipsisVertical />}
      togglerClassName='button-icon'
      options={{ ...dropDownOptions, placement: 'bottom-start' }}
    >
      {children}
    </DropDown>
  );
}

// Sort By
function SortBy({ sortBy, setSortBy, options }) {
  return (
    <DropDown.NestedMenu
      toggler={
        <DropDown.Button className='justify-between'>
          <PiSortAscending className='text-lg' />
          <span className='flex-1 text-start'>Sort By</span>
          <FiChevronRight className='text-lg' />
        </DropDown.Button>
      }
      options={{ ...dropDownOptions, trigger: 'click' }}
    >
      {options.map((option) => (
        <DropDown.Button
          key={option.value}
          onClick={() => setSortBy(option.value)}
          className='justify-between'
          isCurrent={sortBy === option.value}
        >
          <span>{option.name}</span>
          {sortBy === option.value && <FiCheck />}
        </DropDown.Button>
      ))}
    </DropDown.NestedMenu>
  );
}

// Order By
function OrderBy({ direction, setDirection, sortBy }) {
  let ascPhrase, descPhrase;

  switch (sortBy) {
    case 'title':
      ascPhrase = 'A-Z';
      descPhrase = 'Z-A';
      break;
    case 'date':
      ascPhrase = 'Oldest-Newest';
      descPhrase = 'Newest-Oldest';
      break;
    case 'duration':
      ascPhrase = 'Shortest-Longest';
      descPhrase = 'Longest-Shortest';
      break;
    default:
      ascPhrase = 'Lowest-Highest';
      descPhrase = 'Highest-Lowest';
      break;
  }

  return (
    <DropDown.NestedMenu
      toggler={
        <DropDown.Button className='justify-between'>
          <MdOutlineSortByAlpha className='text-lg' />
          <span className='flex-1 text-start'>Order By</span>
          <FiChevronRight className='text-lg' />
        </DropDown.Button>
      }
      options={{ ...dropDownOptions, trigger: 'click' }}
    >
      <DropDown.Button
        onClick={() => setDirection('asc')}
        className='justify-between'
        isCurrent={direction === 'asc'}
      >
        <span>{ascPhrase}</span>
        {direction === 'asc' && <FiCheck />}
      </DropDown.Button>
      <DropDown.Button
        onClick={() => setDirection('desc')}
        className='justify-between'
        isCurrent={direction === 'desc'}
      >
        <span>{descPhrase}</span>
        {direction === 'desc' && <FiCheck />}
      </DropDown.Button>
      {/* One for numbers */}
    </DropDown.NestedMenu>
  );
}

// Filter
function DropDownSearch({ items, isLoading, itemsName, selected, onSelect }) {
  const [searchedTag, setSearchedTag] = useState('');
  const updatedItems = items
    .map((item) => item.toLowerCase())
    .filter((item) => item.includes(searchedTag.toLowerCase()));


  return (
    <DropDown
      toggler={
        <DropDown.Button className='justify-between'>
          <FiFilter />
          <span className='flex-1 text-start font-medium capitalize'>{selected || 'All'}</span>
          <FiChevronRight className='text-lg' />
        </DropDown.Button>
      }
      options={{
        ...dropDownOptions,
        className: `${dropDownOptions.className} relative h-[280px]`,
      }}
    >
      <DropDown.SearchBar
        placeholder={`Search ${itemsName}`}
        value={searchedTag}
        onChange={(e) => setSearchedTag(e.target.value)}
      />

      {isLoading && (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='flex items-center gap-1 text-sm font-medium text-text-secondary'>
            <FaSpinner className='mr-2 animate-spin' /> Loading...
          </p>
        </div>
      )}

      {updatedItems.length === 0 && !isLoading && (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='text-sm font-medium text-text-secondary'>No {itemsName} found</p>
        </div>
      )}

      {updatedItems.map((item) => (
        <DropDown.Button
          key={item}
          onClick={() => onSelect(item)}
          className='justify-between'
          isCurrent={selected === item}
        >
          <span className='capitalize'>{item}</span>
          {selected === item && <FiCheck />}
        </DropDown.Button>
      ))}
    </DropDown>
  );
}
function Filter({ filter, onFilterChange, items, isLoading }) {
  return (
    <DropDownSearch
      items={items}
      isLoading={isLoading}
      itemsName='tags'
      selected={filter}
      onSelect={onFilterChange}
    />
  );
}

Actions.SortBy = SortBy;
Actions.OrderBy = OrderBy;
Actions.Filter = Filter;
Actions.Divider = DropDown.Divider;
