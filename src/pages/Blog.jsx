import PageLayout from '../Layouts/PageLayout';
import ArticlesList from '../components/Blog/ArticlesList';
import Actions from '../components/Actions';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { ViewControl } from '../components/ui/ViewControl';
import { useTags } from '../hooks/useArticles';

export default function Blog() {
  const [view, setView] = useLocalStorageState('grid', 'blog-view');
  const { tags, isLoading } = useTags();
  const defaultParams = { sortBy: 'date', direction: 'desc' };

  return (
    <PageLayout title='blog' image='blog'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between gap-8'>
          <Actions defaults={defaultParams} validSortBy={['date', 'title']}>
            <Actions.SortBy
              options={[
                {
                  name: 'Publication date',
                  value: 'date',
                },
                {
                  name: 'Title',
                  value: 'title',
                },
              ]}
            />
            <Actions.OrderBy />
            <Actions.Filter itemsName='tags' items={tags || []} isLoading={isLoading} />
            <Actions.Search placeholder='Search Articles...' />
          </Actions>
          <ViewControl view={view} setView={setView} />
        </div>
        <ArticlesList view={view} defaultParams={defaultParams} />
      </div>
    </PageLayout>
  );
}
