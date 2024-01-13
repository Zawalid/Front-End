import { useAutoAnimate } from '@formkit/auto-animate/react';
import Article from './Article';

export default function ArticlesList({ articles, view }) {
  const [parent] = useAutoAnimate({ duration: 300 });
  return (
    <div
      className={`mt-10 grid  gap-8 p-3 ${
        view === 'grid' ? 'grid-rows-[repeat(auto-fit,350px)] grid-cols-[repeat(auto-fit,minmax(300px,350px))]  justify-center ' : ''
      }`}
      ref={parent}
    >
      {articles.map((article) => (
        <Article key={article.id} article={article} view={view} />
      ))}
    </div>
  );
}
