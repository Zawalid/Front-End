import { Link } from 'react-router-dom';

export function Button({ children, className, href }) {
  const buttonClass = `rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white  transition-colors duration-300 hover:bg-indigo-600 ${className}`;

  if (href)
    return (
      <Link to={href} className={buttonClass}>
        {children}
      </Link>
    );
  return <button className={buttonClass}>{children}</button>;
}
