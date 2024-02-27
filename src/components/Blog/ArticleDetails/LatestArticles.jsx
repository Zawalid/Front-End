import { Link } from 'react-router-dom';
import { useArticles } from '../../../hooks/useArticles';
import { ErrorMessage } from '../../ui/ErrorMessage';

export function LatestArticles({ currentArticleId }) {
  const { articles, isLoading, error } = useArticles();

  return (
    <div className='relative min-h-[400px]  rounded-xl bg-background-secondary p-4'>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Latest Articles</h4>
      {isLoading ? (
        <LatestArticlesSkeleton />
      ) : error ? (
        <ErrorMessage className='absolute top-0 h-full w-full' message={error.message} />
      ) : (
        <ul>
          {articles
            .filter((article) => +article.id !== +currentArticleId)
            .slice(-3)
            .map((article) => (
              <Article key={article.id} article={article} />
            ))}
        </ul>
      )}
    </div>
  );
}
function Article({ article: { id, title, cover, author, date } }) {
  return (
    <li>
      <Link
        to={`/blog/${id}`}
        className='grid grid-cols-[100px_auto] gap-5 rounded-lg p-4 transition-colors duration-300 hover:bg-background-primary'
      >
        <img src={cover} alt='blog' className='h-20 w-full rounded-lg object-cover' />
        <div className=' space-y-2 overflow-hidden'>
          <h4 className='truncate text-sm font-bold text-text-primary sm:text-base' title={title}>
            {title}
          </h4>

          <div className='flex items-center gap-2'>
            <div className='relative grid  h-5 w-5 place-content-center overflow-hidden rounded-full bg-text-tertiary'>
              <i className='fa-solid fa-user text-xs text-white'></i>
            </div>
            <span className='text-sm font-bold text-text-secondary'>{author}</span>
          </div>
          <div className='grid grid-cols-[20px_auto] items-center gap-2 text-xs font-medium text-text-secondary'>
            <i className='fa-solid fa-calendar justify-self-center text-sm text-text-tertiary'></i>
            <span>
              {new Date(date).toLocaleString('default', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

function LatestArticlesSkeleton() {
  return (

      <div className='grid grid-cols-1 animate-pulse gap-4'>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </div>
 
  );
}

function ArticleSkeleton() {
  return (
    <div className='grid grid-cols-[100px_auto] gap-5 rounded-lg p-4'>
      <div className='h-16 w-full rounded-lg bg-background-primary' />
      <div className='space-y-3'>
        <div className='h-3 rounded-md w-4/5 bg-text-primary' />
        <div className='h-2 rounded-md w-3/4 bg-text-tertiary' />
        <div className='h-2 rounded-md w-3/4 bg-text-secondary' />
      </div>
    </div>
  );
}
