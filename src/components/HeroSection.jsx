import Section from './ui/Section';

export default function HeroSection() {
  return (
    <Section>
      <div className='flex gap-8 items-center'>
        <LeftSide />
        <RightSide />
      </div>
    </Section>
  );
}

function LeftSide() {
  return (
    <div className='flex-1 flex flex-col items-center sm:items-start '>
      <h3 className='mb-3 font-bold text-text-tertiary'>START TO NEW JOURNEY</h3>
      <h1 className='mb-6 text-5xl text-center sm:text-start text-sm:text-7xl font-bold text-text-primary'>
        Best <span className='italic text-tertiary'>online </span>
        courses from
        eduLerns
      </h1>
      <p className='mb-6 text-text-secondary text-center sm:text-start'>
        World-class training and development programs
        <br />
        developed by top teachers
      </p>
      <button className='bg-text-button flex-1 rounded-full  text-sm font-bold text-white transition-colors duration-300 hover:bg-text-secondary px-12 py-4 '>
        FIND COURSE
      </button>
    </div>
  );
}
function RightSide() {
  return (
    <div className='hidden lg:block flex-1'>
      <img src='/images/hero.svg' alt='hero' className='w-full h-[400px]' />
    </div>
  );
}
