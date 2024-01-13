import { Link } from 'react-router-dom';
import { useArticle, useArticles, useTags } from '../../hooks/useArticles';
import { Tag } from '../ui/Tag';

export default function ArticleDetails({ id }) {
  const { article, isLoading, error } = useArticle(id);
  if (error) return <p>{error}</p>;

  return (
    <div className=' grid-cols-3 gap-10 lg:grid '>
      {isLoading ? (
        <p>Loading...</p>
      ) : Object.keys(article).length > 0 ? (
        <Details article={article} />
      ) : (
        <p>Article not found</p>
      )}
      <Aside />
    </div>
  );
}

// Details
function Details({ article: { title, content, date, cover, tags, author } }) {
  return (
    <div className='col-span-2'>
      <div className='mb-5 space-y-4'>
        <img src={cover} alt={title} className='h-72 w-full rounded-xl object-cover sm:h-96' />
        <div className='mb-3 flex gap-8 text-sm text-text-secondary'>
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
            </span>{' '}
          </div>
        </div>
        <h2 className='mb-3 text-3xl font-medium text-text-primary'>{title}</h2>
        <p className='leading- text-lg text-text-secondary'>{content}</p>
      </div>
      <ArticleTags tags={tags} />
    </div>
  );
}
function ArticleTags({ tags }) {
  return (
    <div className='flex flex-wrap items-center gap-y-2 gap-x-3'>
      {tags?.map((tag) => (
        <Link key={tag} to={`/blog?filter=${tag.toLowerCase()}`}>
          <Tag tag={tag} />
        </Link>
      ))}
    </div>
  );
}

// Aside
function Aside() {
  return (
    <aside className='mt-10 space-y-8 lg:mt-0'>
      <LatestArticles />
      <Tags />
    </aside>
  );
}

function LatestArticles() {
  const { articles, isLoading, error } = useArticles();
  if (isLoading) return <p>Loading...</p>;
  if (error || !articles) return <p>{error}</p>;

  return (
    <div className='rounded-xl bg-background-secondary p-4 '>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Latest Articles</h4>
      <ul>
        {articles.slice(articles.length - 3).map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
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
function Tags() {
  const { tags, isLoading, error } = useTags();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='rounded-xl bg-background-secondary p-4 '>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Tags</h4>
      <ul className='flex max-h-[250px] flex-wrap gap-y-1 gap-x-3 overflow-auto py-1.5'>
        {tags.map(({name}) => (
          <Link key={name} to={`/blog?filter=${name.toLowerCase()}`}>
            <Tag tag={name} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
