import { BiError } from 'react-icons/bi';

export function ErrorMessage({ message, className }) {
  return (
    <div className={`grid place-content-center ${className}`}>
      <h3 className='font-bold flex gap-3 items-center text-red-500 dark:text-red-400'>
        <BiError className='text-5xl'/>
        {message || 'Something went wrong'}
      </h3>
    </div>
  );
}
