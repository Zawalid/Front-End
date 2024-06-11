import { FaShareAlt } from 'react-icons/fa';
import VerticalShareButtons2 from '../../ui/VerticalShareButtons2';

function TopFixedEvent({
  isHovered,
  setIsHovered,
  isFixed,
  eventName,
  eventDay,
  eventMonthLong,
  eventWeekday,
  eventYear,
  eventStart,
  eventEnd,
}) {
  return (
    <div
      className={`top-0 flex w-full items-center gap-8 bg-white px-36 py-3 opacity-0 shadow-md transition-all duration-700 ${
        isFixed ? 'fixed translate-y-0 opacity-100' : 'translate-y-[-100%]'
      }`}
    >
      <div
        className='group relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex cursor-pointer items-center gap-1 text-[#898989] transition-transform hover:rotate-[-90deg]'>
          <FaShareAlt size={24} fill='#898989' />
        </div>

        <VerticalShareButtons2 isHovered={isHovered} color='red' />
      </div>

      <div>
        <div className='font-medium'>{eventName}</div>
        <div className='text-sm'>
          <span>{eventWeekday}, </span>
          <span>{eventMonthLong} </span>
          <span>{eventDay}, </span>
          <span>{eventYear}</span>
          {eventStart && eventEnd && (
            <span>
              ({eventStart} - {eventEnd})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopFixedEvent;
