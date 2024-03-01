import { MdLocalPhone, MdMail } from 'react-icons/md';
import { SocialMedia } from './ui/SocialMedia';
import { Logo } from './ui/Logo';

export default function Footer() {
  return (
    <footer className='relative  flex  flex-col gap-6 bg-[#191e24]'>
      <div className='relative z-10 flex-1 justify-between space-y-8 px-7 pt-14 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-5'>
        <Info />
        <Explore />
        <Contact />
      </div>
      <div className='flex justify-center gap-4'>
      <SocialMedia color='text-white' />
      </div>
      <div className='relative z-10 border-t border-border p-5'>
        <p className='text-center text-text-tertiary'>© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// Info
function Info() {
  return (
    <div className='flex flex-col items-center gap-5 text-center md:items-start md:text-start'>
      <Logo className='w-32' />
    </div>
  );
}

// Explore
function Explore() {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-white '>Explore</h2>
      <ul className='space-y-2'>
        {[].map((item) => (
          <Link key={item}>{item}</Link>
        ))}
      </ul>
    </div>
  );
}

function Link({ children }) {
  return (
    <li className='relative h-8 w-fit overflow-hidden text-text-tertiary transition-colors duration-300 before:absolute  before:bottom-0 before:left-0 before:h-[1px] before:w-full  before:-translate-x-full before:bg-white before:transition-transform before:duration-500 hover:text-text-tertiary hover:text-white hover:before:translate-x-0'>
      {children}
    </li>
  );
}
// Contact
function Contact() {
  return (
    <div className='space-y-6 lg:col-span-2'>
      <h2 className='text-2xl font-bold text-white '>Contact</h2>
      <ul className='space-y-2'>
        <li className='grid grid-cols-[30px_auto]  items-center text-text-tertiary  duration-200 hover:text-white'>
          <MdLocalPhone />
          <a href='tel:+212537814207' className='font-medium '>
            +212 0537814207
          </a>
        </li>
        <li className='grid grid-cols-[30px_auto]  items-center text-text-tertiary  duration-200 hover:text-white'>
          <MdMail />
          <a href='mailto:contact@ofppt.ma' className='font-medium'>
            contact@ofppt.ma
          </a>
        </li>
      </ul>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6612.656190811825!2d-6.784859!3d34.035454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76a365e377477%3A0x412ef7592257e154!2sISTA%20%3A%20Institut%20Sp%C3%A9cialis%C3%A9%20de%20Technologie%20Appliqu%C3%A9e_Hay%20Salam%20Sal%C3%A9!5e0!3m2!1sfr!2sma!4v1705526202818!5m2!1sfr!2sma'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
