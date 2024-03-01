import { Link } from 'react-router-dom';

export function Button({ children, className, href }) {
  return (
    <button
      className={`rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white  transition-colors duration-300 hover:bg-indigo-600 ${className}`}
    >
      {href ? <Link to={href}>{children}</Link> : children}
    </button>
  );
}
