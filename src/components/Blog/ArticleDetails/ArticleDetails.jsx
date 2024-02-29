import { useArticle } from '../../../hooks/useArticles';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { Tags } from './Tags';
import { LatestArticles } from './LatestArticles';
import { Details, DetailsSkeleton } from './Details';
import { Breadcrumbs } from '../../ui/BreadCrumbs';

export default function ArticleDetails({ id }) {
  const { article, isLoading, error } = useArticle(id);

  return (
    <>
      <Breadcrumbs />
      <div className=' mt-3 grid-cols-3 gap-10 lg:grid '>
        {isLoading && <DetailsSkeleton />}
        {error && <ErrorMessage className='col-span-2 h-full text-xl' message={error.message} />}
        {!error && !isLoading && Object.keys(article).length > 0 && <Details article={article} />}
        <Aside currentArticleId={id} />
      </div>
    </>
  );
}

function Aside({ currentArticleId }) {
  return (
    <aside className='mt-10 space-y-8 lg:mt-0'>
      <LatestArticles currentArticleId={currentArticleId} />
      <Tags />
    </aside>
  );
}
