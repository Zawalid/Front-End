import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Slider, { CustomNavigation, CustomPagination } from '../ui/Slider';
import Event from './Event';

const ids = {
  pagination: 'events-pagination',
  prev: 'events-button-prev',
  next: 'events-button-next',
};

export default function Events() {
  return (
    <Section>
      <div className='mt-3 flex items-end justify-center md:justify-between'>
        <div className='text-center md:text-start'>
          <Heading h3='EVENTS' h2='Events' />
        </div>
        <CustomNavigation prevId={ids.prev} nextId={ids.next} />
      </div>
      <Slider
      defaultSlidesPerView={1}
        slide={<Event />}
        navigationIds={{
          prev: ids.prev,
          next: ids.next,
        }}
        paginationId={ids.pagination}
      />
      <CustomPagination id={ids.pagination} />
    </Section>
  );
}
