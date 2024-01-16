import { useArticles } from '../../hooks/useArticles';
import { ErrorMessage } from '../ui/ErrorMessage';
import { Heading } from '../ui/Heading';
import { Loading } from '../ui/Loading';
import Section from '../ui/Section';
import Article from './Article';

export default function ArticlesSection() {
  const { articles, isLoading, error } = useArticles();
  if (isLoading) return  <Loading className='h-[70vh] text-xl' />
  if (error) return <ErrorMessage className='h-[70vh] text-xl' />

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
      <div className='mt-12 grid  grid-cols-[repeat(auto-fit,minmax(300px,350px))] justify-center  gap-8 p-3 '>
        {articles?.slice(articles?.length - 3)?.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </Section>
  );
}
