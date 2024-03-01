import { useFilieres } from '../../hooks/useFilieres';
import { Button } from '../ui/Button';
import { ErrorMessage } from '../ui/ErrorMessage';
import Section from '../ui/Section';
import Slider from '../ui/Slider';
import Filiere from './Filiere';
import FiliereSkeleton from './FiliereSkeleton';

const ids = {
  pagination: 'filieres-pagination',
  prev: 'filieres-button-prev',
  next: 'filieres-button-next',
};

export default function FilieresSection() {
  const { filieres, isLoading, error } = useFilieres();

  if (error) return <ErrorMessage className='h-[70vh] text-xl' />;

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
            <h2 className='text-4xl font-bold tracking-widest text-text-primary sm:text-5xl'>
              Filieres
            </h2>
          </div>
          <Slider.Navigation />
        </div>

        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Slider.Slide key={i}>
                <FiliereSkeleton className='mt-12 justify-center' />
              </Slider.Slide>
            ))
          : filieres?.map((filiere) => (
              <Slider.Slide key={filiere.id}>
                <Filiere filiere={filiere} />
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
    <div className='mx-auto mt-10 flex w-fit flex-col items-center justify-between gap-3 rounded-3xl border-2 border-text-tertiary py-2 pl-6 pr-3 sm:flex-row sm:rounded-full md:gap-5'>
      <p className='text-text-primary'>
        <span className='text-sm  sm:text-base'>
          <span className='font-bold  sm:text-lg'>1,000+</span> Filières compétentes à explorer
        </span>
      </p>
      <Button href='/filieres'>Explorer Tous</Button>
    </div>
  );
}
