import { useState } from 'react';
import { FiCheck, FiChevronRight, FiFilter } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa6';
import { useTags } from '../../../hooks/useArticles';
import { DropDown } from '../../ui/DropDown';
import { options } from './Actions';

export function Filter({ filter, onChange }) {
  const { tags, isLoading } = useTags();
  const [searchedTag, setSearchedTag] = useState('');

  const updatedTags = tags
    ? ['all', ...tags.map((t) => t.name).toSorted(), 'other']
        .filter((tag) => tag.toLowerCase().includes(searchedTag.toLowerCase()))
        .map((tag) => tag.toLowerCase())
    : [];

  return (
    <DropDown
      toggler={
        <DropDown.Button className='justify-between'>
          <FiFilter />{' '}
          <span className='flex-1 text-start font-medium capitalize'>
            {tags?.find(({ name }) => name.toLowerCase() === filter)?.name || 'All'}
          </span>
          <FiChevronRight className='text-lg' />
        </DropDown.Button>
      }
      options={{
        ...options,
        className: `${options.className} relative h-[280px]`,
        shouldCloseOnClick: false,
      }}
    >
      <DropDown.SearchBar
        placeholder='Search Tags'
        value={searchedTag}
        onChange={(e) => setSearchedTag(e.target.value)}
      />
      {isLoading && (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='text-sm font-medium text-text-secondary'>
            <FaSpinner className='mr-2 animate-spin' /> Loading...
          </p>
        </div>
      )}
      {updatedTags.length === 0 && !isLoading && (
        <div className='absolute  bottom-0 left-0 grid h-[calc(100%-50px)] w-full place-content-center'>
          <p className='text-sm font-medium text-text-secondary'>No tags found</p>
        </div>
      )}
      {updatedTags.map((tag) => (
        <DropDown.Button
          key={tag}
          onClick={() => onChange(tag)}
          className='justify-between'
          isCurrent={filter === tag}
        >
          <span className='capitalize'>{tag}</span>
          {filter === tag && <FiCheck />}
        </DropDown.Button>
      ))}
    </DropDown>
  );
}
