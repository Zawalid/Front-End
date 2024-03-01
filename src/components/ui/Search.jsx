import { useState } from 'react';
import { InputField } from './InputField';

export function Search({ placeholder,query, onChange }) {
  const [searchQuery, setSearchQuery] = useState(query || '');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onChange(searchQuery);
      }}
      className='w-full '
    >
      <SearchInput
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          const query = e.target.value;
          setSearchQuery(query);
          onChange(query);
        }}
        iconClassName='text-lg'
      />
    </form>
  );
}

export function SearchInput({ placeholder, value, onChange, className, iconClassName }) {
  return (
    <div className='relative'>
      <i
        className={`fa-solid fa-search absolute bottom-0 right-3 top-0 my-auto h-fit text-text-secondary ${iconClassName}`}
      ></i>
      <InputField
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
