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
          Grow your skills learn
          <br />
          with us from anywhere
        </h2>
      </div>
      <p className='text-text-secondary'>
        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore
        dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend
        molestie metus pharetra eleifend.
      </p>
      <div className='grid grid-cols-2 gap-5 text-start'>
        <div className='grid grid-cols-[50px_auto] items-center'>
          <span className='grid h-10 w-10 place-content-center rounded-full bg-secondary'>
            <i className='fa-solid fa-calendar text-white'></i>
          </span>
          <h4 className='font-semibold text-text-primary sm:text-lg'>22/05/2024</h4>
        </div>
        <div className='grid grid-cols-[50px_auto] items-center'>
          <span className='grid h-10 w-10 place-content-center rounded-full bg-secondary'>
            <i className='fa-solid fa-location-dot text-white'></i>
          </span>
          <h4 className='font-semibold text-text-primary sm:text-lg'>Sale,Hay El Salam</h4>
        </div>
        <div className='grid grid-cols-[50px_auto] items-center'>
          <span className='grid h-10 w-10 place-content-center rounded-full bg-secondary'>
            <i className='fa-solid fa-clock text-white'></i>
          </span>
          <h4 className='font-semibold text-text-primary sm:text-lg'>10 jours</h4>
        </div>
        <div className='grid grid-cols-[50px_auto] items-center'>
          <span className='grid h-10 w-10 place-content-center rounded-full bg-secondary'>
            <i className='fa-solid fa-tag text-white'></i>
          </span>
          <h4 className='font-semibold text-text-primary sm:text-lg'>Upcoming</h4>
        </div>
      </div>
      <Button className='w-full md:w-fit'>READ MORE</Button>
    </div>
  );
}
function Images() {
  return (
    <div className='grid  flex-1 grid-cols-3 grid-rows-2 gap-5'>
      <img
        src='/images/about-2.jpg'
        alt='about-1'
        className='col-span-2 row-span-2 w-full rounded-2xl object-cover'
      />
      <img src='/images/about-2.jpg' alt='about-2' className='rounded-xl object-cover' />
      <img src='/images/about-2.jpg' alt='about-2' className=' rounded-xl object-cover' />
    </div>
  );
}
