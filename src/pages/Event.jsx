import { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';

// import SimilarEventsCarousel from './SimilarEventsCarousel';
import { useParams } from 'react-router-dom';
import { useEvent, useEvents } from '../hooks/useEvents';
import TopFixedEvent from '../components/Blog/ArticleDetails/TopFixedEvent';
import Details from '../components/Events/EventDetails/Details';
import { getCover, getMonthName } from '../utils/helpers';
import { FaShareAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { LuCalendarPlus } from 'react-icons/lu';
import VerticalShareButtons2 from '../components/ui/VerticalShareButtons2';
import SimilarEventsSlider from '../components/Events/EventDetails/SimilarEventsSlider';

function Event() {
  const [isHovered, setIsHovered] = useState(false);
  const [movingNum, setMovingNum] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const observedElement = useRef();
  const { id } = useParams();
  const { event } = useEvent(id);
  const { events } = useEvents();

  const eventDate = new Date(event?.date).toLocaleString();

  const eventWeekday = new Date(event?.date)
    .toLocaleDateString('fr-MA', {
      weekday: 'short',
    })
    .replace('.', '');
  const eventMonth = getMonthName(event?.date).replace('.', '');
  const eventMonthLong = new Date(event?.date).toLocaleDateString('fr-MA', {
    month: 'long',
  });
  const eventDay = `${new Date(event?.date).getDate()}`.padStart(2, 0);
  const eventYear = new Date(event?.date).toLocaleDateString('fr-MA', {
    year: 'numeric',
  });
  const eventStart = event?.event_start_hour;
  const eventEnd = event?.event_end_hour;
  const eventDescription = event?.details;
  const eventAvailability = new Date(event?.date) > Date.now();
  const similarEvents = events
    ?.filter((el) => el.type?.at(0)?.name === event?.type?.at(0)?.name && el.id !== event?.id)
    .slice(0, 5);
  useEffect(function () {
    const options = {
      rootMargin: '0px',
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsFixed(false);
        if (!entry.isIntersecting) setIsFixed(true);
      });
    }, options);
    observer.observe(observedElement.current);
  }, []);

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [id],
  );
  console.log(getCover(event?.files));

  return (
    <>
      <div>
        <div
          className='h-[550px]  bg-cover bg-center'
          style={{
            backgroundImage: `url(${getCover(event?.files)})`,
          }}
          ref={observedElement}
        ></div>
        <div className='mx-12 flex items-center justify-between py-12'>
          <div className='flex gap-8'>
            <div>
              <div className='rounded-sm bg-red-500 px-8 text-sm font-medium uppercase text-white'>
                {eventMonth}
              </div>
              <div className='p-color border-x-[1px] border-b-[6px] border-[#bdbdbd] pb-1 pt-2 text-center'>
                <div className='mb-1 text-5xl font-medium'>{eventDay}</div>
                <div className='text-sm capitalize'>{eventWeekday}</div>
              </div>
            </div>
            <div>
              <h3 className='mb-3 text-2xl font-bold'>{event?.title}</h3>
              <div className='flex items-center gap-2'>
                <FaRegClock size={20} className='text-gray-600' />
                <p className='text-lg font-medium'>
                  <span>{eventWeekday}, </span>
                  <span>{eventMonth} </span>
                  <span>{eventDay}, </span>
                  <span>{eventYear}</span>
                  {eventStart && eventEnd && (
                    <span>
                      ({eventStart} - {eventEnd})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between gap-10'>
              <div
                className='group relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className='flex cursor-pointer items-center gap-1 text-[#3a3a3a] hover:text-blue-500'>
                  <FaShareAlt size={16} />
                  <span className='text-xs font-bold uppercase'>Partager</span>
                </div>
                <VerticalShareButtons2 isHovered={isHovered} color='blue' />
              </div>
              <a
                href={`https://addtocalendar.com/atc/google?utz=420&uln=en-US&vjs=1.5&e[0][date_start]=${eventDate}&e[0][date_end]=${eventDate}&e[0][timezone]=&e[0][title]=${event?.title}&e[0][description]=${eventDescription}&e[0][location]=&e[0][organizer]=admin&e[0][email]=`}
                target='_blank'
                className=''
              >
                <div className='flex items-center gap-1 text-[#3a3a3a] hover:text-blue-500'>
                  <LuCalendarPlus size={16} />
                  <span className='text-xs font-bold uppercase'>ajouter un calendrier</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Details
          eventDescription={eventDescription}
          eventDay={eventDay}
          eventMonthLong={eventMonthLong}
          eventWeekday={eventWeekday}
          eventYear={eventYear}
          eventStart={eventStart}
          eventEnd={eventEnd}
          eventAvailability={eventAvailability}
        />
        {similarEvents?.length && <SimilarEventsSlider />}

        <TopFixedEvent
          eventName={event?.title}
          eventDay={eventDay}
          eventMonthLong={eventMonthLong}
          eventWeekday={eventWeekday}
          eventYear={eventYear}
          eventStart={eventStart}
          eventEnd={eventEnd}
          isFixed={isFixed}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
    </>
  );
}

export default Event;
