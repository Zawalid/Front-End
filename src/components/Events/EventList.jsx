import { useEvents } from '../../hooks/useEvents';
import { List } from '../List';
import { useSearchParams } from 'react-router-dom';
import { getParams } from '../../utils/helpers';
import EventSkeleton from './EventSkeleton';
import EventItem from './EventItem';

export default function EventList({ view, defaultParams }) {
  const { events, isLoading, error } = useEvents();
  const [searchParams] = useSearchParams();
  const { sortBy, direction, filter, query } = getParams(searchParams, defaultParams);

  const render = () =>
    events?.search(query).customSort(sortBy, direction).customFilter(filter, '', 'sector') || [];

  if (isLoading) return <EventsSkeleton />;
  return (
    <List
      renderList={render}
      renderItem={(event) => <EventItem key={event.id} event={event} view={view} />}
      itemsName='Events'
      error={error}
      view={view}
    />
  );
}

function EventsSkeleton() {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {Array.from({ length: 3 }, (_, i) => (
        <EventSkeleton key={i} />
      ))}{' '}
    </div>
  );
}
