import { Link } from 'react-router-dom';

export default function Article({ article, view = 'grid' }) {
  const { id, title, date, cover, tags, author } = article;

  if (view === 'list')
    return (
      <Link to={`/blog/${id}`}>
        <div className='grid grid-cols-[100px_auto] overflow-hidden rounded-lg bg-background-secondary shadow-md transition-all duration-500 hover:translate-x-2 sm:grid-cols-[140px_auto] md:h-[120px]'>
          <img src={cover} alt={title} className='h-full object-cover' />
          <div className='flex flex-col gap-4 overflow-hidden p-3  transition-all duration-500'>
            <h4
              className='truncate font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary sm:text-lg'
              title={title}
            >
              {title}
            </h4>
            <div className='flex flex-col gap-x-5 gap-y-2 text-xs text-text-secondary min-[420px]:flex-row'>
              <Info author={author} date={date} />
            </div>
            <ArticleTags tags={tags} />
          </div>
        </div>
      </Link>
    );

  if (view === 'grid')
    return (
      <Link to={`/blog/${id}`}>
        <div className='group flex h-full flex-col rounded-lg  transition-all duration-500'>
          <div className='h-[300px] flex-1 overflow-hidden rounded-lg'>
            <img src={cover} alt={title} className='h-full w-full object-cover' />
          </div>
          <div className='-mt-[100px] ml-[50%] flex w-[90%] -translate-x-1/2 flex-col rounded-2xl bg-background-primary p-5 shadow-md transition-transform duration-500 group-hover:-translate-y-2'>
            <div className='mb-3 flex justify-between gap-5 text-xs text-text-secondary'>
              <Info author={author} date={date} />
            </div>
            <h4
              className='max-h-[55px] overflow-hidden text-wrap font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary sm:text-lg'
              title={title}
            >
              {title}
            </h4>

            <hr className='my-4 border-border' />
            <ArticleTags tags={tags} />
          </div>
        </div>
      </Link>
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

function ArticleTags({ tags }) {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.slice(0, 3).map((tag) => (
        <span key={tag} className='text-xs font-semibold capitalize text-secondary '>
          <span className='text-primary'>#</span>
          {tag}
        </span>
      ))}
    </div>
  );
}
