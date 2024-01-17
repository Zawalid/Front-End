import Tippy from '@tippyjs/react';
import { NavLink, useHref } from 'react-router-dom';
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
    <header className='sticky top-0 z-50 flex items-center justify-between  border-b border-border bg-background-primary  p-5 shadow-sm  transition-opacity duration-500'>
      <Logo className='w-32' />
      <Links />

     <div className='flex items-center gap-3'>
      
       <button onClick={toggleDarkMode} className='text-text-primary transition-colors duration-300 hover:text-text-tertiary'>
         {isDarkMode ? (
           <svg
             stroke='currentColor'
             fill='none'
             strokeWidth='2.5'
             viewBox='0 0 24 24'
             strokeLinecap='round'
             strokeLinejoin='round'
             height='1.5rem'
             width='1.5rem'
             xmlns='http://www.w3.org/2000/svg'
           >
             <circle cx='12' cy='12' r='4'></circle>
             <path d='M12 2v2'></path>
             <path d='M12 20v2'></path>
             <path d='m4.93 4.93 1.41 1.41'></path>
             <path d='m17.66 17.66 1.41 1.41'></path>
             <path d='M2 12h2'></path>
             <path d='M20 12h2'></path>
             <path d='m6.34 17.66-1.41 1.41'></path>
             <path d='m19.07 4.93-1.41 1.41'></path>
           </svg>
         ):(
           <svg
             stroke='currentColor'
             fill='currentColor'
             strokeWidth='0.3'
             viewBox='0 0 16 16'
             height='1.25rem'
             width='1.25rem'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'></path>
             <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'></path>
           </svg>
         ) }
      
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
    <ul className='hidden gap-8 lg:flex lg:flex-1 lg:justify-center '>
      {routes.map((route) => (
        <NavLink key={route.label} to={route.path}>
          <DropDown paths={route.nested || []}>
            <li className='relative flex items-center gap-3 font-semibold text-text-secondary transition-colors duration-300 before:absolute before:-bottom-2 before:left-1/2 before:h-[2px] before:w-full before:-translate-x-1/2 before:scale-0 before:bg-text-tertiary before:transition-transform before:duration-500 hover:text-text-tertiary hover:before:scale-100'>
              <span>{route.label}</span>
              {route.nested && <i className='fa-solid fa-chevron-down '></i>}
            </li>
          </DropDown>
        </NavLink>
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
              className='border-t border-border px-5 py-3 font-semibold text-text-secondary first:border-none hover:text-text-tertiary '
            >
              {option.label}
            </li>
          ))}
        </ul>
      }
      arrow={false}
      interactive={true}
      trigger='mouseenter'
      className='mt-3 border border-border bg-background-primary  shadow-lg'
      placement='bottom-start'
    >
      {children}
    </Tippy>
  );
}
