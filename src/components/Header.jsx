import Tippy from '@tippyjs/react';
import { NavLink, useHref } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LuMoonStar, LuSun } from 'react-icons/lu';
import { Logo } from './ui/Logo';
import { routes } from '../utils/constants';
import { MobileHeader } from './MobileHeader';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = useHref().split('/')[1];
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header className='flex items-center justify-between  border-b border-border bg-background-primary p-5 shadow-md'>
      <Logo className='w-20' />
      <Links />

      <div className='flex items-center gap-4'>
        <button
          onClick={toggleDarkMode}
          className='text-xl text-text-primary transition-colors duration-300 hover:text-text-tertiary'
        >
          {isDarkMode ? <LuSun /> : <LuMoonStar />}
        </button>
        <button onClick={() => setIsMobileMenuOpen(true)} className='lg:hidden'>
          <RxHamburgerMenu className='text-xl text-text-primary transition-colors duration-300 hover:text-text-tertiary ' />
        </button>
      </div>

      <MobileHeader isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}

// Links

function Links() {
  return (
    <ul className='hidden gap-8 lg:flex lg:flex-1 lg:justify-center '>
      {routes.map((route) => (
        <NavLink key={route.label} to={route.path}>
          <li className='relative flex items-center gap-3 font-semibold text-text-secondary transition-colors duration-300 before:absolute before:-bottom-2 before:left-1/2 before:h-[2px] before:w-full before:-translate-x-1/2 before:scale-0 before:bg-text-tertiary before:transition-transform before:duration-500 hover:text-text-tertiary hover:before:scale-100'>
            <span>{route.label}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
