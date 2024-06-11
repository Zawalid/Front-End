import { GiDuration } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { AiOutlineAntDesign } from 'react-icons/ai';

import { Button } from '../ui/Button';
import { getCover } from '../../utils/helpers';

export default function Filiere({ filiere, view = 'grid' }) {
  const { id, title, description, isOpen, duration, files, sector, max_stagiaires, formationYear } =
    filiere || {};

  if (view === 'grid') {
    return (
      <div className='relative h-fit min-w-[300px] max-w-[340px] overflow-hidden rounded-lg border-border shadow-md '>
        {isOpen && (
          <div className='absolute -right-[55px] top-[38px] z-20 rotate-45 bg-red-500  px-10 py-1.5 text-sm font-semibold text-white'>
            Inscription Fermée
          </div>
        )}
        <div className='relative grid  grid-rows-[250px_auto] overflow-hidden rounded-lg'>
          <img
            src={getCover(files)}
            // src={image}
            alt=''
            className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
          />
          <div className='relative flex flex-col bg-background-primary p-5 pt-8 '>
            <div className='absolute -top-4 rounded-full bg-secondary px-5 py-1.5 text-sm font-semibold text-white'>
              {formationYear}
            </div>
            <Details duration={duration} interns={max_stagiaires} sector={sector} />
            <hr className='my-3 border-t border-border' />
            <h4 className='text-xl font-bold leading-snug text-text-primary'>{title}</h4>
            <p className='mt-3 line-clamp-3 text-text-secondary'>{description}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='relative w-full overflow-hidden rounded-lg border border-border shadow-sm '>
      {isOpen && (
        <div className='absolute -left-[55px] top-[38px] z-20 -rotate-45 bg-red-500  px-10 py-1.5 text-sm font-semibold text-white'>
          Inscription Fermée
        </div>
      )}
      <div className='relative grid grid-cols-[140px_auto] overflow-hidden  rounded-lg  sm:grid-cols-[180px_auto] '>
        <img
          src={getCover(files)}
          // src={image}
          alt=''
          className='h-full object-cover transition-transform duration-300 hover:scale-105'
        />
        <div className='relative flex flex-col justify-between gap-5 bg-background-primary p-5 sm:flex-row sm:items-center'>
          <div className=' flex flex-col gap-3 '>
            <h4 className='text-xl font-bold leading-snug text-text-primary'>{title}</h4>
            <Details duration={duration} interns={max_stagiaires} sector={sector} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Details({ interns, sector }) {
  return (
    <div className='space-y-2 text-sm '>
      <div className='flex items-center gap-2 text-text-tertiary'>
        <FaPeopleGroup className='text-lg' />
        <span className='font-semibold'>Stagiares :</span>
        <span className='font-medium text-text-secondary'>{interns}</span>
      </div>
      <div className='flex items-center gap-2 text-text-tertiary'>
        <AiOutlineAntDesign className='text-lg' />
        <span className='font-semibold'>Secteur :</span>
        <span className='font-medium text-text-secondary'>{sector}</span>
      </div>
    </div>
  );
}
