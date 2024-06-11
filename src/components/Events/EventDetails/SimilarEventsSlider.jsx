import { useEvents } from '../../../hooks/useEvents';
import Slider from '../../ui/Slider';
import Section from '../../ui/Section';
import EventSliderItem from '../EventSliderItem';

const ids = {
  pagination: 'events-pagination',
  prev: 'events-button-prev',
  next: 'events-button-next',
};

function SimilarEventsSlider() {
  const { events } = useEvents();
  return (
    <Section>
      <Slider
        defaultSlidesPerView={3}
        navigationIds={{
          prev: ids.prev,
          next: ids.next,
        }}
        paginationId={ids.pagination}
      >
        <div className='mt-3 flex items-end justify-center md:justify-between'>
          <div className='text-center md:text-start'>
            <h2 className='text-4xl font-bold tracking-widest text-text-primary sm:text-5xl'>
              Similar Events
            </h2>
          </div>
          <Slider.Navigation />
        </div>
        {events
          ?.toSorted((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 7)
          .map((event) => (
            <Slider.Slide key={event?.id}>
              <EventSliderItem event={event} />{' '}
            </Slider.Slide>
          ))}

        <Slider.Pagination />
      </Slider>
    </Section>
  );
}

export default SimilarEventsSlider;
