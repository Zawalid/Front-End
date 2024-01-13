import { Button } from './ui/Button';
import Section from './ui/Section';

export default function HeroSection() {
  return (
    <Section>
      <div className='flex h-[70vh] lg:h-auto items-center gap-8'>
        <LeftSide />
        <RightSide />
      </div>
    </Section>
  );
}

function LeftSide() {
  return (
    <div className='flex flex-1 flex-col items-center lg:items-start '>
      <h3 className='mb-3 font-bold text-text-tertiary'>START TO NEW JOURNEY</h3>
      <h1 className='lg:text-7xl mb-6 text-center text-5xl font-extrabold text-text-primary lg:text-start'>
        Best <span className='italic text-tertiary'>online </span>
        courses from eduLerns
      </h1>
      <p className='mb-6 text-center text-text-secondary lg:text-start'>
        World-class training and development programs
        <br />
        developed by top teachers
      </p>
      <Button>FIND COURSE</Button>
    </div>
  );
}
function RightSide() {
  return (
    <div className='hidden flex-1 lg:block'>
      <img src='/images/hero.svg' alt='hero' className='h-[400px] w-full' />
    </div>
  );
}
