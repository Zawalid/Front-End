import { useEffect } from "react";
import { DropDown } from "../../ui/DropDown";
import { useSearchParams } from "react-router-dom";
import { options } from "./Actions";

export function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter') || 'all';
  
    const filters = [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterChange('all'),
      },
      {
        label: 'Technology',
        value: 'technology',
        onClick: () => handleFilterChange('technology'),
      },
      {
        label: 'Design',
        value: 'design',
        onClick: () => handleFilterChange('design'),
      },
      {
        label: 'Marketing',
        value: 'marketing',
        onClick: () => handleFilterChange('marketing'),
      },
      {
        label: 'Business',
        value: 'business',
        onClick: () => handleFilterChange('business'),
      },
      {
        label: 'Health',
        value: 'health',
        onClick: () => handleFilterChange('health'),
      },
      {
        label: 'Politics',
        value: 'politics',
        onClick: () => handleFilterChange('politics'),
      },
      {
        label: 'Science',
        value: 'science',
        onClick: () => handleFilterChange('science'),
      },
      {
        label: 'Sports',
        value: 'sports',
        onClick: () => handleFilterChange('sports'),
      },
      {
        label: 'World',
        value: 'world',
        onClick: () => handleFilterChange('world'),
      },
      {
        label: 'Other',
        value: 'other',
        onClick: () => handleFilterChange('other'),
      },
    ];
  
    useEffect(() => {
      if (![].includes(filter))
        setSearchParams(
          (prev) => {
            prev.delete('filter');
            return prev;
          },
          { replace: true },
        );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    function handleFilterChange(filter) {
      const sortParams = {
        sort: searchParams.get('sort'),
        direction: searchParams.get('direction'),
      };
      setSearchParams(
        filter === 'all'
          ? searchParams.has('sort')
            ? sortParams
            : ''
          : searchParams.has('sort')
            ? { filter, ...sortParams }
            : { filter },
        { replace: true },
      );
    }
  
    return (
      <DropDown.NestedMenu
        toggler={
          <DropDown.Button className='justify-between'>
            <i className='fa-solid fa-filter'></i>{' '}
            <span className='flex-1 text-start font-medium '>
              {filters.find(({ value }) => value === filter)?.label || 'All'}
            </span>{' '}
            <i className='fa-solid fa-chevron-right'></i>
          </DropDown.Button>
        }
        options={options}
      >
        {filters.map(({ label, value, onClick }) => (
          <DropDown.Button key={value} onClick={onClick} isCurrent={filter === value}>
            <span>{label}</span>
          </DropDown.Button>
        ))}
      </DropDown.NestedMenu>
    );
  }
  