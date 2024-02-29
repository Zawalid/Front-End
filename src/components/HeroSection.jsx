import { Button } from './ui/Button';
import Section from './ui/Section';

export default function HeroSection() {
  return (
    <Section>
      <div className='flex h-[70vh] items-center gap-8 lg:h-auto'>
        <LeftSide />
        <RightSide />
      </div>
    </Section>
  );
}

function LeftSide() {
  return (
    <div className='flex flex-1 flex-col items-center lg:items-start '>
      <h3 className='mb-3 font-bold text-text-tertiary'>COURS DU SOIR</h3>
      <h1 className='mb-6 text-center text-5xl font-extrabold text-text-primary lg:text-start lg:text-7xl'>
        Bienvenue à <span className='italic text-secondary'>l&apos;OFPPT </span>
      </h1>
      <p className='mb-6 text-center text-text-secondary lg:text-start'>
        Vous êtes sur la bonne voie, pour devenir acteur du Maroc des Compétences ! Bien choisir
        votre métier est votre premier pas sur le chemin de la réussite.
      </p>
      <Button>EXPLORE FILIERES</Button>
    </div>
  );
}
function RightSide() {
  return (
    <div className='hidden flex-1 lg:block'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          {[1, 2, 3].map((e) => (
            <img
              key={e}
              src={`/images/filiere-image-${e}.jpeg`}
              alt='image'
              className='aspect-square w-48 rounded-lg object-cover'
              style={{
                marginTop: `${e * Math.random() * 10}px`,
              }}
            />
          ))}
        </div>
        <div className='flex gap-4'>
          {[4, 5, 6].map((e) => (
            <img
              key={e}
              src={`/images/filiere-image-${e}.jpeg`}
              alt='image'
              className='aspect-square w-48 rounded-lg object-cover'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
