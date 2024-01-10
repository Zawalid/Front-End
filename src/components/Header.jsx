import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { routes } from '../utils/constants';
import { MobileHeader } from './MobileHeader';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className='flex items-center justify-between bg-background-primary p-5 shadow-md'>
      <Logo className='w-32' />
      <Links />
      <div className='flex gap-5'>
        <button>
          <i className='fa-solid fa-search text-xl text-text-primary transition-colors duration-300 hover:text-text-tertiary '></i>
        </button>
        <button>
          <i className='fa-solid fa-user text-xl text-text-primary transition-colors duration-300 hover:text-text-tertiary '></i>
        </button>
        <button onClick={() => setIsMobileMenuOpen(true)} className='lg:hidden'>
          <i className='fa-solid fa-bars text-xl text-text-primary transition-colors duration-300 hover:text-text-tertiary '></i>
        </button>
      </div>
      <MobileHeader isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}

// Links

function Links() {
  return (
    <ul className='hidden gap-8 lg:flex '>
      {routes.map((route) => (
        <Link key={route.label} to={route.path}>
          <DropDown paths={route.nested || []}>
            <li className='relative flex items-center gap-3 font-semibold text-text-secondary transition-colors duration-300 before:absolute before:-bottom-2 before:left-1/2 before:h-[2px] before:w-full before:-translate-x-1/2 before:scale-0 before:bg-text-tertiary before:transition-transform before:duration-500 hover:text-text-tertiary hover:before:scale-100'>
              <span>{route.label}</span>
              {route.nested && <i className='fa-solid fa-chevron-down '></i>}
            </li>
          </DropDown>
        </Link>
      ))}
    </ul>
  );
}

function DropDown({ children, paths }) {
  return (
    <Tippy
      content={
        <ul>
          {paths.map((option) => (
            <li
              key={option.label}
              className='border-t border-zinc-200 px-5 py-3 font-semibold text-text-secondary first:border-none hover:text-text-tertiary '
            >
              {option.label}
            </li>
          ))}
        </ul>
      }
      arrow={false}
      interactive={true}
      trigger='mouseenter'
      className='mt-3 rounded-md border border-zinc-200 bg-white py-2 shadow-lg'
      placement='bottom-start'
    >
      {children}
    </Tippy>
  );
}
