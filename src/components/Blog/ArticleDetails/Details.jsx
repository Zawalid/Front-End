import { Link } from 'react-router-dom';
import { Tag } from '../../ui/Tag';
import { getCover } from '../../../utils/helpers';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';

export function Details({ article: { title, content, date, cover, tags, author } }) {
  console.log(cover);
  return (
    <div className='col-span-2'>
      <div className='mb-5 space-y-4'>
        <img
          src={getCover(cover)}
          alt={title}
          className='h-72 w-full rounded-xl object-cover sm:h-96'
        />
        <div className='mb-3 flex gap-8 text-sm text-text-secondary'>
          <div className='flex items-center gap-2'>
            <FaUserCircle className='text-text-tertiary' />
            <span>{`By ${author}`}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaCalendar className='text-text-tertiary' />
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
    <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
      {tags?.map((tag) => (
        <Link key={tag} to={`/blog?f=${tag.toLowerCase()}`}>
          <Tag tag={tag} />
        </Link>
      ))}
    </div>
  );
}

export function DetailsSkeleton() {
  return (
    <div className='col-span-2 animate-pulse space-y-8'>
      <div className='h-72  rounded-xl bg-background-secondary sm:h-96' />
      <div className='flex gap-8 text-sm text-text-secondary'>
        <div className='h-3 w-20 rounded-md bg-text-tertiary' />
        <div className='h-3 w-20 rounded-md bg-text-tertiary' />
      </div>
      <h2 className='h-5 w-3/4 rounded-lg bg-text-primary' />
      <div className='space-y-4'>
        {[...Array(6)].map((_, i) => (
          <p key={i} className='h-2 w-full rounded-lg bg-text-secondary' />
        ))}
      </div>
      <div className='mt-8 flex gap-3'>
        <div className='h-2 w-20 rounded-md bg-text-tertiary' />
        <div className='h-2 w-20 rounded-md bg-text-tertiary' />
      </div>
    </div>
  );
}
