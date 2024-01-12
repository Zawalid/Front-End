import { Link } from 'react-router-dom';

export default function Article({ id, view }) {
  if (view === 'list')
    return (
      <div className='relative flex max-h-[130px] overflow-hidden rounded-lg bg-background-secondary shadow-md transition-transform duration-500 hover:translate-x-2'>
        <div className='absolute -top-4 right-8 flex flex-col items-center rounded-full bg-secondary px-3 pb-3 pt-8 text-white'>
          <span className='text-xl font-bold leading-3'>20</span>
          <span className='text-sm'>Dec</span>
        </div>
        <img src='/images/news-1.jpg' alt='' className='h-full' />
        <div className='flex flex-col gap-3 p-3'>
          <Link to={`/blog/${id}`}>
            <h4 className='truncate text-xl font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary'>
              The quality role of the elementary teacher in education
            </h4>
          </Link>
          <div className='mb-3 flex gap-5 text-sm text-text-secondary'>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-user text-text-tertiary'></i>
              <span>By Admin</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-comment text-text-tertiary'></i>
              <span>2 Comments</span>
            </div>
          </div>
          <Link
            to={`/blog/${id}`}
            className='flex items-center gap-3 text-sm text-text-primary transition-colors duration-300 hover:text-tertiary'
          >
            <span className='font-medium'>Read More</span>
            <i className='fa-solid fa-arrow-right '></i>
          </Link>
        </div>
      </div>
    );

  if (view === 'grid')
    return (
      <div className='group relative flex flex-col rounded-lg'>
        <div className='relative  overflow-hidden rounded-lg'>
          <div className='absolute -top-4 right-8 flex flex-col items-center rounded-full bg-secondary px-3 pb-3 pt-8 text-white'>
            <span className='text-xl font-bold leading-3'>20</span>
            <span className='text-sm'>Dec</span>
          </div>
          <img src='/images/news-1.jpg' alt='' />
        </div>
        <div className=' -mt-[100px] ml-[50%] flex w-[90%] -translate-x-1/2 flex-col rounded-2xl bg-background-primary p-5 shadow-md transition-transform duration-500 group-hover:-translate-y-2'>
          <div className='mb-3 flex justify-between gap-5 text-sm text-text-secondary'>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-user text-text-tertiary'></i>
              <span>By Admin</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-comment text-text-tertiary'></i>
              <span>2 Comments</span>
            </div>
          </div>
          <Link to={`/blog/${id}`}>
            <h4 className='text-xl font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary'>
              The quality role of the elementary teacher in education
            </h4>
          </Link>
          <hr className='my-4 border-border' />
          <Link
            to={`/blog/${id}`}
            className='flex items-center justify-between text-sm text-text-primary transition-colors duration-300 hover:text-tertiary'
          >
            <span className='font-medium'>Read More</span>
            <i className='fa-solid fa-arrow-right '></i>
          </Link>
        </div>
      </div>
    );
}
