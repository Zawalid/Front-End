import { useAutoAnimate } from '@formkit/auto-animate/react';
import Article from './Article';

export default function ArticlesList({ articles, view }) {
  const [parent] = useAutoAnimate({ duration: 300 });
  return (
    <div
      className={`mt-10 grid  gap-8 p-3 ${
        view === 'grid' ? 'grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-center ' : ''
      }`}
      ref={parent}
    >
      {articles.map((_, index) => (
        <Article key={index} id={index + 1} view={view} />
      ))}
    </div>
  );
}
