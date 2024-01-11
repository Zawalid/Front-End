export function Heading({ h3, h2 }) {
  return (
    <>
      <h3 className='font-bold mb-3 text-text-tertiary'>{h3}</h3>
      <h2 className='text-4xl font-bold text-text-primary sm:text-5xl'>{h2}</h2>
    </>
  );
}
