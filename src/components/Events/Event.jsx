import { MdCalendarToday, MdLocationPin } from 'react-icons/md';
import { GoClockFill } from 'react-icons/go';
import { Button } from '../ui/Button';

export default function Event() {
  return (
    <div className='flex min-w-full flex-col items-center  gap-10  md:flex-row'>
      <Images />
      <Info />
    </div>
  );
}

function Info() {
  return (
    <div className='flex-1 space-y-8 text-center md:text-start'>
      <div>
        <h2 className='text-2xl font-bold text-text-primary sm:text-4xl'>
          L’OFPPT réinvente les Pro’Days avec un format 100% digital
        </h2>
      </div>
      <p className='text-text-secondary'>
        Les journées thématiques « Pro’Days » ont pour objectif de créer un espace d’échange entre
        stagiaires et professionnels de divers secteurs pour apporter...
      </p>
      <div className='flex justify-between flex-wrap gap-5 text-start'>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <MdCalendarToday className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>22/05/2024</h4>
        </div>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <MdLocationPin className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>Sale,Hay El Salam</h4>
        </div>
        <div className='grid grid-cols-[40px_auto] items-center'>
          <span className='grid h-8 w-8 place-content-center rounded-full bg-secondary'>
            <GoClockFill className='text-white' />
          </span>
          <h4 className='font-medium text-text-tertiary'>10 jours</h4>
        </div>
      </div>
      <Button className='w-full md:w-fit'>MORE DETAILS</Button>
    </div>
  );
}
function Images() {
  return (
    <div className='grid  flex-1 grid-cols-3 grid-rows-2 gap-5'>
      <img
        src='/images/events.jpg'
        alt='about-1'
        className='col-span-2 row-span-2 w-full rounded-2xl object-cover'
      />
      <img src='/images/events.jpg' alt='' className='rounded-xl object-cover' />
      <img src='/images/events.jpg' alt='' className=' rounded-xl object-cover' />
    </div>
  );
}
