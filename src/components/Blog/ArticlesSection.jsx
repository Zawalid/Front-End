import { useArticles } from '../../hooks/useArticles';
import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Article from './Article';

export default function ArticlesSection() {
  const { articles, isLoading, error } = useArticles();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

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
      <div className='mt-12 grid grid-rows-[repeat(auto-fit,350px)] grid-cols-[repeat(auto-fit,minmax(300px,350px))] justify-center  gap-8 p-3 '>
        {articles.slice(articles.length - 3).map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </Section>
  );
}
