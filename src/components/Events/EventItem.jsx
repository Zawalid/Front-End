import { Link } from 'react-router-dom';
import VerticalShareButtons from '../ui/VerticalShareButtons';
import { getMonthName } from '../../utils/helpers';
import { FaCalendar, FaLocationDot } from 'react-icons/fa6';
import HorizontalShareButtons from '../ui/HorizontalShareButtons';
import { FaShareAlt } from 'react-icons/fa';

function EventItem({ event, view = 'grid' }) {
  const eventWeekday = new Date(event?.date)
    .toLocaleDateString('fr-MA', {
      weekday: 'short',
    })
    .replace('.', '');

  const eventMonth = getMonthName(event?.date).replace('.', '');

  const eventDay = `${new Date(event?.date).getDate()}`.padStart(2, 0);

  const eventYear = new Date(event?.date).toLocaleDateString('fr-MA', {
    year: 'numeric',
  });
  const eventStart = event?.event_start_hour;
  const eventLocation = event?.location.split(' ').slice(0, 5).join(' ');
  const eventAvailability = new Date(event?.date) > Date.now();
  const url = `${window.location.origin}/evenements/${event?.id}`;

  if (view === 'grid')
    return (
      <li className='relative h-fit min-w-[300px] max-w-[340px] cursor-pointer list-none overflow-hidden rounded-md shadow-[0px_0px_4px_#cdcdcd] transition-shadow hover:shadow-[0px_0px_14px_#cdcdcd]'>
        <div className='grid h-full grid-rows-[200px_auto]'>
          <Link to={`/evenements/${event?.id}`}>
            <div className='relative h-full'>
              <div className='h-full overflow-hidden'>
                <img
                  src='/images/events.jpg'
                  className='h-full w-full rounded-t-sm object-cover transition-transform hover:scale-105'
                />
              </div>
              <VerticalShareButtons url={url} />
            </div>
          </Link>

          <div className='flex gap-6 bg-white px-4 py-6'>
            <div>
              <div className='font-medium uppercase text-red-500'>{eventMonth}</div>
              <div className='p-color text-center text-2xl font-medium'>{eventDay}</div>
            </div>
            <div>
              <Link to={`/evenements/${event?.id}`}>
                <h3 className='mb-2 text-xl font-medium text-[#323232] transition-colors hover:text-red-500'>
                  {event?.title}
                </h3>
              </Link>
              {eventAvailability && (
                <div className='mb-2 w-fit rounded-sm bg-gradient-to-r from-red-500 to-orange-500 px-4 text-sm font-medium text-white'>
                  A venir
                </div>
              )}
              <div className='mb-1 flex items-center gap-1 text-sm font-medium leading-6 tracking-wide text-text-tertiary'>
                <FaCalendar />
                <div>
                  <span className='capitalize'>{eventWeekday}, </span>
                  <span>{eventMonth} </span>
                  <span>{eventDay} </span>
                  <span>{eventYear}, </span>
                  {eventStart && <span>{eventStart}</span>}
                </div>
              </div>

              <div className='flex items-center gap-1 text-sm font-medium leading-6 tracking-wide text-text-tertiary'>
                <FaLocationDot />
                <span>{eventLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );

  return (
    <li className='list-none'>
      <div className='grid grid-cols-[140px_auto] overflow-hidden rounded-lg border border-border sm:grid-cols-[180px_auto]'>
        <div className='h-full'>
          <Link to={`/evenements/${event?.id}`}>
            <div className='h-full'>
              <img
                src='/images/events.jpg'
                className='h-full w-full object-cover transition-transform hover:scale-105'
              />
            </div>
          </Link>
        </div>
        <div className='px-4 py-4'>
          <Link to={`/evenements/${event?.id}`}>
            <h3 className='mb-3 text-xl font-bold text-[#323232] transition-colors hover:text-red-500'>
              {event?.title}
            </h3>
          </Link>
          <div className='mb-2 flex items-center gap-1 text-sm font-medium leading-6 tracking-wide text-text-tertiary'>
            <FaCalendar />
            <div>
              <span>{eventWeekday}, </span>
              <span>{eventMonth} </span>
              <span>{eventDay} </span>
              <span>{eventYear}, </span>
              {eventStart && <span>{eventStart}</span>}
            </div>
          </div>

          <div className='mb-3 flex items-center gap-1 text-sm font-medium leading-6 tracking-wide text-text-tertiary'>
            <FaLocationDot />
            <span>{eventLocation}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaShareAlt size={16} />
            <HorizontalShareButtons size={26} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
