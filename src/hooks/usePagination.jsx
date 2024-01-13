import { useCallback, useEffect, useReducer, useRef } from 'react';
import { DropDown } from '../components/ui/DropDown';
const rowsPerPageOptions = [5, 10, 20, 30];

const paginationState = {
  currentPage: 1,
  rowsPerPage: 5,
  disabledButton: 'previous',
};
function paginationReducer(state, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'PREVIOUS_PAGE':
      return { ...state, currentPage: state.currentPage - 1 };
    case 'CHANGE_PAGE':
      return { ...state, currentPage: action.payload };
    case 'CHANGE_ROWS_PER_PAGE':
      return { ...state, rowsPerPage: action.payload, currentPage: 1 };
    case 'DISABLE_BUTTON':
      return { ...state, disabledButton: action.payload };
    default:
      throw new Error(
        `Unknown action type: ${action.type}. Make sure to add the action type to the reducer.`,
      );
  }
}

export function usePagination(itemsLength, itemsName) {
  const [pagination, dispatch] = useReducer(paginationReducer, paginationState);
  const { currentPage, rowsPerPage, disabledButton } = pagination;
  const totalPages = useRef(Math.ceil(itemsLength / rowsPerPage));

  function handleNextPage() {
    currentPage * rowsPerPage >= itemsLength ||
      dispatch({ type: 'NEXT_PAGE', payload: currentPage + 1 });
  }
  const handlePreviousPage = useCallback(() => {
    currentPage === 1 || dispatch({ type: 'PREVIOUS_PAGE', payload: currentPage - 1 });
  }, [currentPage, dispatch]);

  // Responsible for disabling the pagination items when the user reaches the first or last page
  useEffect(() => {
    if (currentPage * rowsPerPage >= itemsLength)
      dispatch({ type: 'DISABLE_BUTTON', payload: 'next' });
    if (currentPage === 1) dispatch({ type: 'DISABLE_BUTTON', payload: 'previous' });
    if (currentPage * rowsPerPage >= itemsLength && currentPage === 1)
      dispatch({ type: 'DISABLE_BUTTON', payload: 'both' });
  }, [currentPage, rowsPerPage, itemsLength, dispatch]);

  useEffect(() => {
    totalPages.current = Math.ceil(itemsLength / rowsPerPage);
    currentPage > totalPages.current && handlePreviousPage();

    return () => dispatch({ type: 'DISABLE_BUTTON', payload: 'none' });
  }, [itemsLength, rowsPerPage, currentPage, handlePreviousPage, dispatch]);

  return {
    Pagination: (
      <div className='flex flex-col-reverse items-center justify-between gap-3 md:flex-row'>
        <div className='flex w-full  items-center justify-center gap-2 md:w-fit  md:justify-normal'>
          <span className='text-xs font-medium text-text-secondary sm:text-sm '>
            Rows per page:
          </span>
          <DropDown
            toggler={<span className='text-xs font-medium sm:text-sm'>{rowsPerPage}</span>}
            togglerClassName='bg-primary rounded-lg  px-3  py-1.5 text-white '
            options={{ placement: 'top', className: 'w-fit' }}
          >
            {rowsPerPageOptions.map((option) => (
              <DropDown.Button
                key={option}
                size='small'
                onClick={() => dispatch({ type: 'CHANGE_ROWS_PER_PAGE', payload: option })}
                isCurrent={option === rowsPerPage}
                className='justify-center'
              >
                <span>{option}</span>
              </DropDown.Button>
            ))}
          </DropDown>

          <span className='flex gap-1 text-xs text-text-secondary sm:text-sm'>
            <span className='font-semibold text-text-primary'>{currentPage}</span>
            of
            <span className='font-semibold text-text-primary'>
              {Math.ceil(itemsLength / rowsPerPage)}
            </span>
          </span>
          <span className='flex gap-1 text-xs text-text-secondary sm:text-sm'>
            (<span className='font-semibold text-text-primary'>{itemsLength}</span>
            {` ${itemsName}`})
          </span>
        </div>

        <div className='flex w-full items-center justify-between gap-5 sm:justify-center md:w-fit md:justify-normal'>
          <button
            className='pagination button'
            disabled={disabledButton === 'previous' || disabledButton === 'both'}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <div className='flex gap-1'>
            {Array.from(
              { length: Math.ceil(itemsLength / rowsPerPage) },
              (_, index) => index + 1,
            ).map((number) => (
              <button
                key={number}
                className={`pagination number ${number === currentPage ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'CHANGE_PAGE', payload: number })}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            className='pagination button'
            disabled={disabledButton === 'next' || disabledButton === 'both'}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    ),
    currentPage,
    rowsPerPage,
  };
}
