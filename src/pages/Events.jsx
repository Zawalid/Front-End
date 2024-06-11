import PageLayout from '../Layouts/PageLayout';
import Actions from '../components/Actions';
import EventList from '../components/Events/EventList';
import { useSectors } from '../hooks/useFilieres';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export default function Events() {
  const [view, setView] = useLocalStorageState('grid', 'list-view');
  const { sectors, isLoading } = useSectors();
  const defaultParams = { sortBy: 'title', direction: 'desc' };

  return (
    <PageLayout title='evenements' image='events'>
      <div className='space-y-8'>
        <Actions
          defaults={defaultParams}
          validSortBy={['title', 'date', 'upcoming']}
          view={view}
          setView={setView}
        >
          <Actions.SortBy
            options={[
              { key: 'title', display: 'Title', type: 'string' },
              { key: 'date', display: 'Date', type: 'date' },
              { key: 'upcoming', display: 'Upcoming', type: 'string' },
            ]}
          />
          <Actions.OrderBy />
          <Actions.Filter itemsName='sectors' items={sectors || []} isLoading={isLoading} />
          <Actions.Search placeholder='Search Filieres...' />
        </Actions>
        <EventList defaultParams={defaultParams} view={view} />
      </div>
    </PageLayout>
  );
}
