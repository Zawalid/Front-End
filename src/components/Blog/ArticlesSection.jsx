import { useArticles } from '../../hooks/useArticles';
import { ErrorMessage } from '../ui/ErrorMessage';
import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Article from './Article';
import ArticlesListSkeleton from '../ui/ArticlesListSkeleton';

export default function ArticlesSection() {
  const { articles, isLoading, error } = useArticles();

  if (error) return <ErrorMessage className='h-[70vh] text-xl' />;

  return (
    <Section>
      <div className='text-center'>
        <Heading
          h3='DIRECTLY FROM BLOG'
          h2={
            <>
              Our latest news &
              <br />
              upcoming blog posts
            </>
          }
        />
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
