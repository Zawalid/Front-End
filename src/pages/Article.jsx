import { useLocation } from 'react-router';
import PageLayout from '../Layouts/PageLayout';
import ArticleDetails from '../components/Blog/ArticleDetails/ArticleDetails';

export default function Article() {
  const id = useLocation().pathname.split('/')[2];

  return (
    <PageLayout >
      <ArticleDetails id={id} />
    </PageLayout>
  );
}
