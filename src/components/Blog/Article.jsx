import { Link } from 'react-router-dom';

export default function Article({ article, view = 'grid' }) {
  const { id, title, date, author } = article;

  if (view === 'list')
    return (
      <div className='grid max-h-[140px] grid-cols-[100px_auto] overflow-hidden rounded-lg bg-background-secondary shadow-md transition-transform duration-500 hover:translate-x-2 sm:grid-cols-[140px_auto]'>
        <img
          src='/images/blog.jpg'
          // src={cover}
          alt={title}
          className='h-full object-contain sm:object-cover'
        />
        <div className='flex flex-col gap-3 overflow-hidden p-3'>
          <Link to={`/blog/${id}`}>
            <h4
              className='truncate font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary sm:text-lg'
              title={title}
            >
              {title}
            </h4>
          </Link>
          <div className='mb-3 flex gap-x-5 gap-y-2 min-[420px]:flex-row flex-col text-xs text-text-secondary'>
            <Info author={author} date={date} />
          </div>
          <Link
            to={`/blog/${id}`}
            className='flex items-center gap-3 text-xs sm:text-sm text-text-primary transition-colors duration-300 hover:text-tertiary'
          >
            <span className='font-medium'>Read More</span>
            <i className='fa-solid fa-arrow-right '></i>
          </Link>
        </div>
      </div>
    );

  if (view === 'grid')
    return (
      <div className='group flex  h-full flex-col rounded-lg'>
        <div className='h-full overflow-hidden rounded-lg'>
          <img
            src='/images/blog.jpg'
            // src={cover}
            alt={title}
          />
        </div>
        <div className='-mt-[100px] ml-[50%] flex w-[90%] -translate-x-1/2 flex-col rounded-2xl bg-background-primary p-5 shadow-md transition-transform duration-500 group-hover:-translate-y-2'>
          <div className='mb-3 flex justify-between gap-5 text-xs text-text-secondary'>
            <Info author={author} date={date} />
          </div>
          <Link to={`/blog/${id}`}>
            <h4
              className='max-h-[55px] overflow-hidden text-wrap font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary sm:text-lg'
              title={title}
            >
              {title}
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

function Info({ author, date }) {
  return (
    <>
      <div className='flex items-center gap-2'>
        <i className='fa-solid fa-user text-text-tertiary'></i>
        <span>{`By ${author}`}</span>
      </div>
      <div className='flex items-center gap-2'>
        <i className='fa-solid fa-calendar text-text-tertiary'></i>
        <span>
          {new Date(date).toLocaleString('default', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
    </>
  );
}
