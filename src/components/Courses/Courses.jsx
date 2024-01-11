import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Course from './Course';

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
        <div className='hidden gap-3 md:flex'>
          <button className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-colors duration-300 hover:border-text-primary hover:text-text-primary '>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='h-12 w-12 rounded-full border-2 border-text-tertiary text-text-tertiary transition-colors duration-300 hover:border-text-primary hover:text-text-primary '>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
      <div className='mt-10 flex gap-8 overflow-auto p-3'>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
      <div className="flex justify-center gap-3 my-8">
        <button className='h-3 w-3 sm:w-4 sm:h-4 rounded-full bg-text-primary'></button>
        <button className='h-3 w-3 sm:w-4 sm:h-4 rounded-full bg-text-tertiary'></button>
        <button className='h-3 w-3 sm:w-4 sm:h-4 rounded-full bg-text-tertiary'></button>
        <button className='h-3 w-3 sm:w-4 sm:h-4 rounded-full bg-text-tertiary'></button>
        <button className='h-3 w-3 sm:w-4 sm:h-4 rounded-full bg-text-tertiary'></button>
      </div>
      <div className='border-text-button mx-auto flex flex-col items-center gap-3 rounded-3xl border-2 p-2 md:w-fit md:flex-row md:gap-5 md:rounded-full'>
        <p className='flex flex-col items-center gap-2 md:flex-row md:pl-7'>
          <span className='font-bold text-text-secondary sm:text-lg'>23,000+</span>
          <span className='text-sm text-text-secondary sm:text-base'>
            more skillful courses you can explore
          </span>
        </p>
        <Button>Explore All Courses</Button>
      </div>
    </Section>
  );
}
