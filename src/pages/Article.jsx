import { useLocation } from 'react-router';
import PageLayout from '../Layouts/PageLayout';
import ArticleDetails from '../components/Blog/ArticleDetails';

export default function Article() {
  const id = useLocation().pathname.split('/')[2];

  return (
    <PageLayout title={`Article #${id}`}>
      <ArticleDetails id={id} />
    </PageLayout>
  );
}
