import { Button } from './ui/Button';
import Section from './ui/Section';

export default function HeroSection() {
  return (
    <Section>
      <div className='flex h-[70vh]  items-center justify-between gap-14 lg:h-auto'>
        <LeftSide />
        <RightSide />
      </div>
    </Section>
  );
}

function LeftSide() {
  return (
    <div className='flex  max-w-[40%] flex-col items-center lg:items-start '>
      <h3 className='mb-3 font-bold text-text-tertiary'>COURS DU SOIR</h3>
      <h1 className='mb-6 text-center text-5xl font-extrabold tracking-wide text-text-primary lg:text-start lg:text-7xl'>
        Bienvenue à <span className='italic text-secondary'>l&apos;OFPPT </span>
      </h1>
      <p className='mb-6 text-center font-medium text-text-secondary lg:text-start'>
        Vous êtes sur la bonne voie, pour devenir acteur du Maroc des Compétences ! Bien choisir
        votre métier est votre premier pas sur le chemin de la réussite.
      </p>
      <Button>EXPLORE FILIERES</Button>
    </div>
  );
}


function RightSide() {
  return (
    <main
      className='mx-auto overflow-hidden grid grid-cols-[repeat(4,200px)]
    grid-rows-[repeat(3,150px)]  gap-4 p-4'
    >
      <div className='row-start-1 row-end-3'>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${1}.jpeg`}
        />
      </div>
      <div>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${2}.jpeg`}
        />
      </div>
      <div className='col-start-3 col-end-5'>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${3}.jpeg`}
        />
      </div>
      <div>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${4}.jpeg`}
        />
      </div>
      <div className='row-start-2 row-end-4'>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${5}.jpeg`}
        />
      </div>
      <div>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${6}.jpeg`}
        />
      </div>
      <div>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${7}.jpeg`}
        />
      </div>
      <div className='col-start-3 col-end-5'>
        <img
          className='h-full w-full rounded-lg object-cover'
           src={`/images/filiere-image-${8}.jpeg`}
        />
      </div>
    </main>
  );
}
