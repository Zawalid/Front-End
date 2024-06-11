import { MdCalendarToday, MdLocationPin } from 'react-icons/md';
import { GoClockFill } from 'react-icons/go';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import VerticalShareButtons from '../ui/VerticalShareButtons';
import { getMonthName } from '../../utils/helpers';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function EventSliderItem({ event }) {
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
  //   return (
  //     <div className='flex min-w-full flex-col items-center  gap-10  md:flex-row'>
  //       <Images />
  //       <Info />
  //     </div>
  //   );
}

function Info() {
  return (
    <div className='flex-1 space-y-8 text-center md:text-start'>
      <div>
        <h2 className='text-2xl font-bold text-text-primary sm:text-4xl'>
          L’OFPPT réinvente les Pro’Days avec un format 100% digital
        </h2>
      </div>
      <p className='text-text-secondary'>
        Les journées thématiques « Pro’Days » ont pour objectif de créer un espace d’échange entre
        stagiaires et professionnels de divers secteurs pour apporter...
      </p>
      <div className='flex flex-wrap justify-between gap-5 text-start'>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <MdCalendarToday className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>22/05/2024</h4>
        </div>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <MdLocationPin className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>Sale,Hay El Salam</h4>
        </div>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <GoClockFill className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>10 jours</h4>
        </div>
      </div>
      <Button className='w-full md:w-fit'>More Details</Button>
    </div>
  );
}
function Images() {
  return (
    <div className='grid  flex-1 grid-cols-3 grid-rows-2 gap-5'>
      <img
        src='/images/events.jpg'
        alt='about-1'
        className='col-span-2 row-span-2 w-full rounded-2xl object-cover'
      />
      <img src='/images/events.jpg' alt='' className='rounded-xl object-cover' />
      <img src='/images/events.jpg' alt='' className=' rounded-xl object-cover' />
    </div>
  );
}
