export function Loading({ className }) {
  return (
    <div className={` grid place-content-center ${className}`}>
      <h3 className='font-bold text-text-primary'>
        <i className='fa-solid fa-spinner mr-2 animate-spin'></i> Loading...
      </h3>
    </div>
  );
}
