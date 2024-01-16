export function ErrorMessage({ message,className }) {
  return (
    <div className={`grid place-content-center ${className}`}>
      <h3 className='font-bold text-red-500 dark:text-red-400'>
        <i className='fa-solid fa-triangle-exclamation mr-2'></i>
        {message || 'Something went wrong'}
      </h3>
    </div>
  );
}
