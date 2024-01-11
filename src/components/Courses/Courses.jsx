import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Slider, { CustomNavigation, CustomPagination } from '../ui/Slider';
import Course from './Course';

const ids = {
  pagination: 'courses-pagination',
  prev: 'courses-button-prev',
  next: 'courses-button-next',
};

export default function Courses() {
  return (
    <Section>
      <div className='mt-3 flex items-end justify-center md:justify-between'>
        <div className='text-center md:text-start'>
          <Heading
            h3='POPULAR COURSES'
            h2={
              <>
                Pick a course to
                <br />
                get started your study
              </>
            }
          />
        </div>
        <CustomNavigation prevId={ids.prev} nextId={ids.next} />
      </div>
      <Slider
        slide={<Course />}
        navigationIds={{
          prev: ids.prev,
          next: ids.next,
        }}
        paginationId={ids.pagination}
      />
      <CustomPagination id={ids.pagination} />
      <More />
    </Section>
  );
}

function More() {
  return (
    <div className='mx-auto mt-10 flex flex-col items-center gap-3 rounded-3xl border-2 border-text-button p-2 md:w-fit md:flex-row md:gap-5 md:rounded-full'>
      <p className='flex flex-col items-center gap-2 md:flex-row md:pl-7'>
        <span className='font-bold text-text-secondary sm:text-lg'>23,000+</span>
        <span className='text-sm text-text-secondary sm:text-base'>
          more skillful courses you can explore
        </span>
      </p>
      <Button>Explore All Courses</Button>
    </div>
  );
}
