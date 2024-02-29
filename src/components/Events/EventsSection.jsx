import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Slider from '../ui/Slider';
import Event from './Event';

const ids = {
  pagination: 'events-pagination',
  prev: 'events-button-prev',
  next: 'events-button-next',
};

export default function EventsSection() {
  return (
    <Section>
      <Slider
        defaultSlidesPerView={1}
        navigationIds={{
          prev: ids.prev,
          next: ids.next,
        }}
        paginationId={ids.pagination}
      >
        <div className='mt-3 flex items-end justify-center md:justify-between'>
          <div className='text-center md:text-start'>
            <Heading h3='EVENTS' h2='Events' />
          </div>
          <Slider.Navigation />
        </div>
        <Slider.Slide>
          <Event />
        </Slider.Slide>
        <Slider.Slide>
          <Event />
        </Slider.Slide>
        <Slider.Slide>
          <Event />
        </Slider.Slide>

        <Slider.Pagination />
      </Slider>
    </Section>
  );
}
