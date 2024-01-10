import { Address, Email, PhoneNumber } from './ui/ContactInfo';
import { Logo } from './ui/Logo';

export default function Footer() {
  return (
    <footer className='relative mt-auto flex min-h-[575px] flex-col gap-6  bg-text-primary'>
      <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/4.jpg')] bg-cover bg-no-repeat"></div>
      <div className='relative z-10 flex-1 justify-between space-y-8 px-7 pt-20 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 md:pt-32 lg:grid-cols-5'>
        <Info />
        <Explore />
        <Links />
        <Contact />
      </div>
      <div className='relative z-10 border-t border-border p-5'>
        <p className='text-center text-text-tertiary'>
          © 2024 All Rights Reserved. Made by Walid Zakan & Hassan El Mehdioui
        </p>
      </div>
    </footer>
  );
}

// Info
function Info() {
  return (
    <div className='flex flex-col items-center gap-5 text-center md:items-start md:text-start'>
      <Logo type={2} className='w-48' />
      <h2 className='text-xl font-bold text-white '>Get 26,000+ best online courses from us</h2>
      <div className='flex gap-3'>
        <a
          href='#'
          className='grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-[#2a3037] transition-colors duration-300 hover:bg-tertiary'
        >
          <i className='fab fa-facebook-f text-white'></i>
        </a>
        <a
          href='#'
          className='grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-[#2a3037] transition-colors duration-300 hover:bg-tertiary'
        >
          <i className='fab fa-twitter text-white'></i>
        </a>
        <a
          href='#'
          className='grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-[#2a3037] transition-colors duration-300 hover:bg-tertiary'
        >
          <i className='fab fa-instagram text-white'></i>
        </a>
        <a
          href='#'
          className='grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-[#2a3037] transition-colors duration-300 hover:bg-tertiary'
        >
          <i className='fab fa-linkedin-in text-white'></i>
        </a>
      </div>
    </div>
  );
}
// Explore
function Explore() {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-white '>Explore</h2>
      <ul className='space-y-2'>
        {[
          'Gallery',
          'News & Articles',
          "FAQ's",
          'Sign In/Registration',
          'Coming Soon',
          'Contacts',
        ].map((item) => (
          <Link key={item}>{item}</Link>
        ))}
      </ul>
    </div>
  );
}
// Links
function Links() {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold text-white '>Links</h2>
      <ul className='space-y-2'>
        {['About', 'Courses', 'Instructor', 'Events', 'Instructor Profile'].map((item) => (
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
          <i className='fas fa-phone'></i>
          <PhoneNumber />
        </li>
        <li className='grid grid-cols-[30px_auto]  items-center text-text-tertiary  duration-200 hover:text-white'>
          <i className='fas fa-envelope'></i>
          <Email />
        </li>
        <li className='grid grid-cols-[30px_auto]  items-center text-text-tertiary  duration-200 hover:text-white'>
          <i className='fas fa-map-marker-alt'></i>
          <Address />
        </li>
      </ul>
      <div className='flex  items-center overflow-hidden rounded-full bg-background-primary p-2'>
        <input
          type='text'
          className='h-10 flex-1 px-3 py-5 outline-none placeholder:text-sm'
          placeholder='Enter your email'
        />
        <button className='h-10 w-10 rounded-full bg-secondary text-white transition-colors duration-300 hover:bg-text-tertiary'>
          <i className='fas fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
}
