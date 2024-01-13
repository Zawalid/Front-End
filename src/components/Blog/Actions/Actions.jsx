import { DropDown } from '../../ui/DropDown';
import { SortBy } from './SortBy';
import { OrderBy } from './OrderBy';
import { Filter } from './Filter';

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  className: 'w-52 sm:w-60 max-h-[280px] overflow-auto',
  placement: 'auto-start',
};

export default function Actions({ sortBy, setSortBy, direction, setDirection, filter, onFilterChange }) {
  return (
    <DropDown
      toggler={<i className='fa-solid fa-ellipsis-v text-'></i>}
      togglerClassName='button-icon'
      options={{ ...options, placement: 'bottom-start', shouldCloseOnClick: false }}
    >
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      <OrderBy direction={direction} setDirection={setDirection} sortBy={sortBy} />
      <DropDown.Divider />
      <Filter filter={filter} onChange={onFilterChange} />
    </DropDown>
  );
}
