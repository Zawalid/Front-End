import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Slider from '../ui/Slider';
import Filiere from './Filiere';

const ids = {
  pagination: 'filieres-pagination',
  prev: 'filieres-button-prev',
  next: 'filieres-button-next',
};

export default function FilieresSection() {
  return (
    <Section>
      <Slider
        navigationIds={{
          prev: ids.prev,
          next: ids.next,
        }}
        paginationId={ids.pagination}
      >
        <div className='mt-3 flex items-end justify-center md:justify-between'>
          <div className='text-center md:text-start'>
            <Heading
              h3='POPULAR COURSES'
              h2={
                <>
                  Pick a Filiere to
                  <br />
                  get started your study
                </>
              }
            />
          </div>
          <Slider.Navigation />
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <Slider.Slide key={i}>
            <Filiere index={i} />
          </Slider.Slide>
        ))}

        <Slider.Pagination />
      </Slider>
      <More />
    </Section>
  );
}

function More() {
  return (
    <div className='mx-auto mt-10 flex flex-col items-center gap-3 rounded-3xl border-2 border-text-tertiary p-2 md:w-fit md:flex-row md:gap-5 md:rounded-full'>
      <p className='flex flex-col items-center gap-2 text-text-primary md:flex-row md:pl-7'>
        <span className='font-bold  sm:text-lg'>23,000+</span>
        <span className='text-sm  sm:text-base'>more skillful filieres you can explore</span>
      </p>
      <Button>Explore All Filieres</Button>
    </div>
  );
}
