export function SearchInput({ className }) {
  return (
    <div className='relative'>
      <i className='fa-solid fa-search absolute bottom-0 right-3 top-0 my-auto h-fit text-lg text-text-secondary'></i>
      <input
        type='text'
        placeholder='Search'
        className={`w-full rounded-lg border border-border bg-background-secondary py-1.5 pr-10 pl-4 font-medium text-text-primary outline-none ${className}`}
      />
    </div>
  );
}
