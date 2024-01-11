import { Link as L } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { routes } from '../utils/constants';
import { Email, PhoneNumber } from './ui/ContactInfo';
import { useEffect, useRef, useState } from 'react';

export function MobileHeader({ isOpen, onClose }) {
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);

  return (
    <>
      <div
        className={
          'fixed left-0 top-0  h-full w-full ' +
          (isOpen ? 'z-50 bg-black bg-opacity-40 ' : 'invisible')
        }
      ></div>
      <div
        className={
          'fixed right-0 top-0 z-50  flex h-full w-full flex-col gap-5 justify-self-end overflow-auto bg-background-primary transition-transform duration-500 sm:w-[320px] ' +
          (isOpen ? 'translate-x-0' : 'translate-x-full')
        }
        ref={ref}
      >
        <div className='flex items-center justify-between  px-5 pt-5'>
          <Logo className='w-32' />
          <button className='text-lg text-text-primary hover:text-text-secondary' onClick={onClose}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
        <Links />
        <ContactInfo />
        <SocialInfo />
      </div>
    </>
  );
}

// Links
function Links() {
  return (
    <ul className=' border-t border-border'>
      {routes.map((route) => (
        <Link key={route.label} route={route} />
      ))}
    </ul>
  );
}
function Link({ route }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li key={route.label}>
      <div className='flex  items-center justify-between border-b border-border py-3 pl-5 font-semibold text-text-primary transition-colors duration-300 hover:text-text-tertiary'>
        <L to={route.path}>{route.label}</L>
        {route.nested && (
          <button
            className='border-l border-border px-4'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <i
              className={`fa-solid fa-chevron-down text-sm transition-transform duration-500 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            ></i>
          </button>
        )}
      </div>
      {route.nested && <DropDown routes={route.nested} isExpanded={isExpanded} />}
    </li>
  );
}
function DropDown({ routes, isExpanded }) {
  return (
    <ul
      className='overflow-hidden bg-background-primary transition-[height]  duration-500'
      style={{
        height: isExpanded ? `${routes.length * 49}px` : '0px',
      }}
    >
      {routes.map((route) => (
        <li
          key={route.label}
          className='border-b border-border px-10 py-3 font-semibold text-text-secondary transition-colors duration-300 hover:text-text-tertiary '
        >
          <L to={route.path}>{route.label}</L>
        </li>
      ))}
    </ul>
  );
}

// Contact Info
function ContactInfo() {
  return (
    <ul className='space-y-2 px-5 '>
      <li className='grid grid-cols-[40px_auto]  items-center '>
        <i className='fas fa-phone text-2xl text-text-tertiary'></i>
        <p className='flex flex-col gap-2 text-text-primary'>
          <span className='text-text-tertiary'>Call Now</span>
          <PhoneNumber />
        </p>
      </li>
      <li className='grid grid-cols-[40px_auto]  items-center '>
        <i className='fas fa-envelope text-2xl text-text-tertiary'></i>
        <p className='flex flex-col gap-2 text-text-primary'>
          <span className='text-text-tertiary'>Send Email</span>
          <Email />
        </p>
      </li>
    </ul>
  );
}
// Social Info
function SocialInfo() {
  return (
    <ul className='mt-auto grid grid-cols-4 border-t border-border'>
      <a
        href='#'
        className='grid place-content-center border-r border-border p-4 text-text-primary transition-colors duration-300 hover:text-tertiary'
      >
        <i className='fab fa-facebook-f'></i>
      </a>
      <a
        href='#'
        className='grid place-content-center border-r border-border p-4 text-text-primary transition-colors duration-300 hover:text-tertiary'
      >
        <i className='fab fa-twitter'></i>
      </a>
      <a
        href='#'
        className='grid place-content-center border-r border-border p-4 text-text-primary transition-colors duration-300 hover:text-tertiary'
      >
        <i className='fab fa-instagram'></i>
      </a>
      <a
        href='#'
        className='grid place-content-center border-r border-border p-4 text-text-primary transition-colors duration-300 hover:text-tertiary'
      >
        <i className='fab fa-linkedin-in'></i>
      </a>
    </ul>
  );
}
