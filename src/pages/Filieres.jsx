import PageLayout from '../Layouts/PageLayout';
import FilieresList from '../components/Filieres/FilieresList';
import Actions from '../components/Actions';
import { useSectors } from '../hooks/useFilieres';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export default function Filieres() {
  const [view, setView] = useLocalStorageState('grid', 'list-view');
  const { sectors, isLoading } = useSectors();
  const defaultParams = { sortBy: 'title', direction: 'desc' };

  return (
    <PageLayout title='filieres' image='filieres'>
      <div className='space-y-8'>
        <Actions
          defaults={defaultParams}
          validSortBy={['title', 'duration', 'interns']}
          view={view}
          setView={setView}
        >
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
        <FilieresList defaultParams={defaultParams} view={view} />
      </div>
    </PageLayout>
  );
}
