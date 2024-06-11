import parse from 'html-react-parser';
import LatestEvents from './LatestEvents';

function Details({
  eventDescription,
  eventWeekday,
  eventMonthLong,
  eventDay,
  eventYear,
  eventStart,
  eventEnd,
  eventAvailability,
}) {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-12 bg-[#ededed] p-12'>
      <div>
        <div className='mb-10 rounded-sm bg-white p-8'>
          <h3 className="after:content[''] relative mb-6 w-fit pb-3 text-xl font-medium text-[#282828] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-3/12 after:bg-red-600">
            Description
          </h3>
          {eventDescription && <p className='text-lg leading-relaxed'>{parse(eventDescription)}</p>}
          {!eventDescription && (
            <p className='text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corporis ex ipsum
              eveniet quibusdam. Laudantium corrupti suscipit illo veritatis quis, hic consequatur
              atque maiores explicabo modi sapiente deleniti aut nesciunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Distinctio odio optio facere quia sed voluptatum
              cupiditate id beatae eum et corrupti commodi tenetur repellendus enim nisi, quisquam
              accusantium. Natus, ducimus.
            </p>
          )}
        </div>

        <div className='rounded-sm bg-white p-8'>
          <h3 className="after:content[''] relative mb-6 w-fit pb-3 text-xl font-medium text-[#282828] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-3/12 after:bg-red-600">
            Calendrier Des Événements
          </h3>
          <div className='flex items-center justify-between rounded-sm border-[1px] border-[#dddddd] px-4 py-5'>
            <div>
              <div className='text-sm font-medium'>
                <span>{eventWeekday}, </span>
                <span>{eventMonthLong} </span>
                <span>{eventDay}, </span>
                <span>{eventYear}</span>
              </div>
              {eventStart && eventEnd && (
                <div className='text-sm'>
                  <span>{eventStart}</span>
                  <span> - </span>
                  <span>{eventEnd}</span>
                </div>
              )}
            </div>
            {eventAvailability && (
              <span className='text-sm font-bold tracking-wide text-green-500'>Open</span>
            )}
            {!eventAvailability && (
              <span className='text-sm font-bold tracking-wide text-red-500'>Closed</span>
            )}
          </div>
        </div>
      </div>
      <LatestEvents />
    </div>
  );
}

export default Details;
