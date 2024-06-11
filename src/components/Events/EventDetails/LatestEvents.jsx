import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEvents } from '../../../hooks/useEvents';
import { getMonthName } from '../../../utils/helpers';

function LatestEvents() {
  return (
    <div className='self-start rounded-sm bg-white p-8'>
      <div className='mb-7 flex items-center justify-between'>
        <h3 className="after:content[''] relative w-fit pb-2 text-lg font-medium tracking-wider text-[#282828] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-6/12 after:bg-red-600">
          Derniers Evenements
        </h3>
        <Link to='/evenements' className='text-xs font-medium uppercase text-[#4531e9]'>
          voir tous
        </Link>
      </div>
      <LatestEventList />
    </div>
  );
}

function LatestEventList() {
  const { events } = useEvents();
  const { id } = useParams();
  console.log(events);
  const latestEvents = events?.filter((event) => event.id !== +id).slice(0, 3);
  return (
    <ul className='flex flex-wrap items-center gap-x-2 gap-y-8'>
      {latestEvents?.map((event, i) => (
        <LatestEventItem event={event} key={i} />
      ))}
    </ul>
  );
}

function LatestEventItem({ event }) {
  const eventMonth = getMonthName(event?.date).replace('.', '');
  const eventDay = `${new Date(event?.date).getDate()}`.padStart(2, 0);
  return (
    <li className='group flex items-center gap-6'>
      <div className='rounded-sm px-3 py-2 text-center text-red-500 transition-all group-hover:translate-y-[-10%] group-hover:bg-red-500 group-hover:text-white'>
        <div className='text-xs uppercase'>{eventMonth}</div>
        <div className='text-xl font-medium'>{eventDay}</div>
      </div>
      <div>
        <Link to={`/evenements/${event?.id}`}>
          <h3 className='font-medium'>{event?.title}</h3>
        </Link>
      </div>
    </li>
  );
}

export default LatestEvents;
