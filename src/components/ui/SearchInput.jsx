export function SearchInput({ placeholder, value, onChange, className, iconClassName }) {
  return (
    <div className='relative'>
      <i
        className={`fa-solid fa-search absolute bottom-0 right-3 top-0 my-auto h-fit text-text-secondary ${iconClassName}`}
      ></i>
      <input
        type='text'
        placeholder={placeholder}
        className={`w-full rounded-lg border border-border bg-background-secondary py-1.5 pl-4 pr-10 font-medium text-text-primary outline-none ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
