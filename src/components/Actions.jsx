import { createContext, useContext, useState } from 'react';
import { FiCheck, FiChevronRight, FiFilter } from 'react-icons/fi';
import { MdOutlineSortByAlpha } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
import { PiSortAscending } from 'react-icons/pi';
import { DropDown } from './ui/DropDown';
import { Search as S } from './ui/Search';
import { useSearchParams } from 'react-router-dom';
import { getParams } from '../utils/helpers';
import { ViewControl } from './ui/ViewControl';

const dropDownOptions = {
  className: 'w-52 sm:w-60 max-h-[280px] overflow-auto',
  placement: 'auto-start',
  shouldCloseOnClick: false,
};

const ActionsContext = createContext();

export default function Actions({ children, defaults, validSortBy, view, setView }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortBy, direction, filter, query } = getParams(searchParams, defaults);

  const formatSearchParams = (params) => {
    const { sortBy, direction, filter, query } = getParams(params, defaults);
    const { sortBy: defaultSortBy, direction: defaultDirection } = defaults;

    // Remove the sort and direction if they are the default values or invalid
    if (
      !validSortBy.includes(sortBy) ||
      !['asc', 'desc'].includes(direction) ||
      (sortBy === defaultSortBy && direction === defaultDirection)
    ) {
      params.delete('s');
      params.delete('d');
    }
    // Remove the query if it is empty
    if (query === '') params.delete('q');
    // Remove the filter if it is the default value
    if (filter === 'all') params.delete('f');

    return params;
  };

  const setParam = (param) => {
    setSearchParams(
      (prev) => {
        prev.set(...Object.entries(param)[0]);
        return formatSearchParams(prev);
      },
      { replace: true },
    );
  };

  return (
    <ActionsContext.Provider
      value={{
        sortBy,
        setSortBy: (sortBy) => setParam({ s: sortBy }),
        direction,
        setDirection: (direction) => setParam({ d: direction }),
        filter,
        setFilter: (filter) => setParam({ f: filter }),
        query,
        setQuery: (query) => setParam({ q: query }),
      }}
    >
      <div className='flex items-center justify-between gap-8'>
        <div className='flex flex-1 items-center gap-3 sm:w-1/2 sm:flex-none md:w-[40%]'>
          <DropDown
            toggler={<IoEllipsisVertical />}
            togglerClassName='button-icon'
            options={{ ...dropDownOptions, placement: 'bottom-start' }}
          >
            {children.filter((child) => child.type.name !== 'Search')}
          </DropDown>
          {children.filter((child) => child.type.name === 'Search')?.[0]}
        </div>
        <ViewControl view={view} setView={setView} />
      </div>
    </ActionsContext.Provider>
  );
}

// Sort By
function SortBy({ options }) {
  const { sortBy, setSortBy } = useContext(ActionsContext);
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
          key={option.key}
          onClick={() => setSortBy(option.key)}
          className='justify-between'
          isCurrent={sortBy === option.key}
        >
          <span>{option.display}</span>
          {sortBy === option.key && <FiCheck />}
        </DropDown.Button>
      ))}
    </DropDown.NestedMenu>
  );
}

// Order By
function OrderBy() {
  const { direction, setDirection, sortBy } = useContext(ActionsContext);
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
    .map((item) => item?.toLowerCase())
    .filter((item) => item?.includes(searchedTag.toLowerCase()));

  const render = () => {
    if (isLoading)
      return (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='flex items-center gap-1 text-sm font-medium text-text-secondary'>
            <FaSpinner className='mr-2 animate-spin' /> Loading...
          </p>
        </div>
      );

    if (updatedItems.length === 0)
      return (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='text-sm font-medium text-text-secondary'>No {itemsName} found</p>
        </div>
      );

    return updatedItems.map((item) => (
      <DropDown.Button
        key={item}
        onClick={() => onSelect(item)}
        className='justify-between'
        isCurrent={selected === item}
      >
        <span className='capitalize'>{item}</span>
        {selected === item && <FiCheck />}
      </DropDown.Button>
    ));
  };

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

      {render()}
    </DropDown>
  );
}
function Filter({ itemsName, items, isLoading }) {
  const { filter, setFilter } = useContext(ActionsContext);
  return (
    <DropDownSearch
      items={['all', ...items.map((t) => t.name).toSorted(), 'other']}
      isLoading={isLoading}
      itemsName={itemsName}
      selected={filter}
      onSelect={setFilter}
    />
  );
}

// Search
function Search({ placeholder }) {
  const { query, setQuery } = useContext(ActionsContext);
  return <S placeholder={placeholder} query={query} onChange={setQuery} />;
}

Actions.SortBy = SortBy;
Actions.OrderBy = OrderBy;
Actions.Filter = Filter;
Actions.Search = Search;
Actions.Divider = DropDown.Divider;
