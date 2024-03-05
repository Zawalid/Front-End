import { Link } from 'react-router-dom';
import { useTags } from '../../../hooks/useArticles';
import { Tag } from '../../ui/Tag';
import { ErrorMessage } from '../../ui/ErrorMessage';

export function Tags() {
  const { tags, isLoading, error } = useTags();

  const render = () => {
    if (isLoading) return <TagsSkeleton />;
    if (error) {
      return <ErrorMessage className='absolute top-0 h-full w-full' message={error.message} />;
    }
    if (!tags.length)
      return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
          <p className='font-bold text-text-tertiary'>No tags found</p>
        </div>
      );
    return (
      <ul className='flex max-h-[250px] flex-wrap gap-x-3 gap-y-1 overflow-auto py-1.5'>
      {tags?.map(({ id,name }) => (
        <Link key={id} to={`/blog?f=${name.toLowerCase()}`}>
          <Tag tag={name} />
        </Link>
      ))}
    </ul>
    );
  };

  return (
    <div className='relative min-h-[200px]  rounded-xl bg-background-secondary p-4'>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Tags</h4>
      {render()}
    </div>
  );
}


function TagsSkeleton() {
  const sizes = ['w-10', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28'];
  return (
    <div className='flex h-full w-full animate-pulse flex-wrap gap-2 rounded-md '>
      {Array.from({ length: 20 }, (_, i) => {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        return <div key={i} className={`h-2 ${size} rounded-md bg-text-tertiary`} />;
      })}
    </div>
  );
}
