import PageLayout from '../Layouts/PageLayout';
import FilieresList from '../components/Filieres/FilieresList';
import Actions from '../components/Actions';
import { useSectors } from '../hooks/useFilieres';

export default function Filieres() {
  const { sectors, isLoading } = useSectors();
  const defaultParams = { sortBy: 'title', direction: 'desc' };

  return (
    <PageLayout title='filieres' image='filieres'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between gap-8'>
          <Actions defaults={defaultParams} validSortBy={['title', 'duration', 'interns']}>
            <Actions.SortBy
              options={[
                {
                  name: 'Title',
                  value: 'title',
                },
                {
                  name: 'Duration',
                  value: 'duration',
                },
                {
                  name: 'Interns',
                  value: 'interns',
                },
              ]}
            />
            <Actions.OrderBy />
            <Actions.Filter itemsName='sectors' items={sectors || []} isLoading={isLoading} />
            <Actions.Search placeholder='Search Filieres...' />
          </Actions>
        </div>
        <FilieresList defaultParams={defaultParams} />
      </div>
    </PageLayout>
  );
}
