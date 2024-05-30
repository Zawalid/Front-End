import { Link } from "react-router-dom";

export function Logo({ className,link='/home' }) {
  return (
  <Link to={link}>
    <img src='/images/Logo.svg' alt='logo' className={className} />
  </Link>
  );
}
