import { useLocation, Link } from 'react-router-dom';

export function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname.split('/').map((crumb) => {
    return (
      <Link
        key={crumb}
        className='font-bold capitalize text-white transition-colors duration-300 before:mr-2 before:text-white before:content-[">"] first:before:content-none hover:text-text-tertiary'
        to={`/${crumb}`}
      >
        {crumb === '' ? 'home' : crumb}
      </Link>
    );
  });

  return <div className='flex gap-2'>{crumbs}</div>;
}
