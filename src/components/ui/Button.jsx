import { Link } from 'react-router-dom';

export function Button({ children, className, href, ...props }) {
  const buttonClass = `rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white  transition-all duration-300 hover:bg-indigo-600 ${className}
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary
  `;

  if (href)
    return (
      <Link to={href} className={buttonClass}>
        {children}
      </Link>
    );
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
