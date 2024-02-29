import { useArticles } from '../../hooks/useArticles';
import { ErrorMessage } from '../ui/ErrorMessage';
import Section from '../ui/Section';
import Article from './Article';
import ArticlesListSkeleton from '../ui/ArticlesListSkeleton';

export default function ArticlesSection() {
  const { articles, isLoading, error } = useArticles();

  if (error) return <ErrorMessage className='h-[70vh] text-xl' />;

  return (
    <Section>
      <div className='text-center'>
        <h2 className='text-4xl font-bold tracking-widest text-text-primary sm:text-5xl'>
          Latest Articles
        </h2>
      </div>
      {isLoading ? (
        <ArticlesListSkeleton className='mt-12 justify-center' />
      ) : (
        <div className='mt-12 flex flex-wrap justify-center  gap-8 p-3 '>
          {articles?.slice(articles?.length - 3)?.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      )}
    </Section>
  );
}
