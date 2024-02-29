import { InputField } from './InputField';

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
