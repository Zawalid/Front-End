import { Link } from 'react-router-dom';
import { useArticles } from '../../../hooks/useArticles';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { getCover } from '../../../utils/helpers';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';

export function LatestArticles({ currentArticleId }) {
  const { articles, isLoading, error } = useArticles();

  const latestArticles = articles?.filter((article) => +article.id !== +currentArticleId).slice(-3);

  const render = () => {
    if (isLoading) return <LatestArticlesSkeleton />;
    if (error) {
      return <ErrorMessage className='absolute top-0 h-full w-full' message={error.message} />;
    }
    if (!latestArticles.length)
      return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
          <p className='font-bold text-text-tertiary'>No articles found</p>
        </div>
      );
    return (
      <ul>
        {latestArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    );
  };

  return (
    <div className='relative min-h-[400px]  rounded-xl bg-background-secondary p-4'>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Latest Articles</h4>
      {render()}
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
        <img src={getCover(cover)} alt='blog' className='h-20 w-full rounded-lg object-cover' />
        <div className=' space-y-2 overflow-hidden'>
          <h4 className='truncate text-sm font-bold text-text-primary sm:text-base' title={title}>
            {title}
          </h4>

          <div className='flex items-center gap-2'>
            <FaUserCircle className='text-text-tertiary' />
            <span className='text-sm font-bold text-text-secondary'>{author}</span>
          </div>
          <div className='grid grid-cols-[16px_auto] items-center gap-2 text-xs font-medium text-text-secondary'>
            <FaCalendar className='text-sm text-text-tertiary' />

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
    <div className='grid animate-pulse grid-cols-1 gap-4'>
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
        <div className='h-3 w-4/5 rounded-md bg-text-primary' />
        <div className='h-2 w-3/4 rounded-md bg-text-tertiary' />
        <div className='h-2 w-3/4 rounded-md bg-text-secondary' />
      </div>
    </div>
  );
}
