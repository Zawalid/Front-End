export function Logo({ className, type = 1 }) {
  return (
    <img src={`/images/${type === 1 ? 'logo' : 'logo-2'}.png`} alt='logo' className={className} />
    // <img src='/images/Logo.svg' alt='logo' className={className} />
  );
}
