import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Event from './Event';

export default function Events() {
  return (
    <Section>
      <div className='mt-3 flex items-end justify-center md:justify-between'>
        <div className='text-center md:text-start'>
          <Heading h3='EVENTS' h2='Events' />
        </div>
        <div className='hidden gap-3 md:flex'>
          <button className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-colors duration-300 hover:border-text-primary hover:text-text-primary '>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-colors duration-300 hover:border-text-primary hover:text-text-primary '>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
      <div className='mt-10 flex gap-8 overflow-auto pb-3'>
        <Event />
        <Event />
        <Event />
      </div>
      <div className='mt-8 flex justify-center gap-3'>
        <button className='h-3 w-3 rounded-full bg-text-primary sm:h-4 sm:w-4'></button>
        <button className='h-3 w-3 rounded-full bg-text-tertiary sm:h-4 sm:w-4'></button>
        <button className='h-3 w-3 rounded-full bg-text-tertiary sm:h-4 sm:w-4'></button>
        <button className='h-3 w-3 rounded-full bg-text-tertiary sm:h-4 sm:w-4'></button>
        <button className='h-3 w-3 rounded-full bg-text-tertiary sm:h-4 sm:w-4'></button>
      </div>
    </Section>
  );
}
