import { Link } from "react-router-dom";

export function Logo({ className }) {
  return (
  <Link to='/home'>
    <img src='/images/logo.png' alt='logo' className={className} />
  </Link>
  );
}
