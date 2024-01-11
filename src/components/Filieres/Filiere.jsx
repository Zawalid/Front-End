export default function Filiere() {
  return (
    <div className='relative flex min-w-[300px] flex-col overflow-hidden rounded-lg  shadow-md'>
      <div className='absolute z-10 -right-3 top-4 rounded-full bg-secondary px-5 py-1.5 text-sm font-semibold text-white'>
        $49.99
      </div>
      <a href='#'>
        <img
          src='/images/course-4.jpg'
          alt=''
          className='w-full transition-transform duration-300 hover:scale-105'
        />
      </a>
      <div className='relative flex flex-col bg-background-primary p-8'>
        <div className='absolute -top-4 rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-white'>
          Advanced
        </div>
        <div className='mb-3 flex justify-between text-sm text-text-secondary'>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-book text-text-tertiary'></i>
            <span>8 Lessons</span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-user-group text-text-tertiary'></i>
            <span>16 Students</span>
          </div>
        </div>
        <a href='#'>
          <h4 className='text-xl font-bold leading-snug text-text-primary transition-colors duration-300 hover:text-secondary'>
            Starting seo as your home based business
          </h4>
        </a>
        <hr className='my-4 border-border' />
        <div className='text-sm text-text-secondary'>
          <div className='mb-2 flex justify-between'>
            <span>(4.9/8 Rating)</span>
            <span>3 weeks</span>
          </div>
          <div className='flex gap-1'>
            <i className='fa-solid fa-star text-sm text-tertiary'></i>
            <i className='fa-solid fa-star text-sm text-tertiary'></i>
            <i className='fa-solid fa-star text-sm text-tertiary'></i>
            <i className='fa-solid fa-star text-sm text-tertiary'></i>
            <i className='fa-solid fa-star text-sm text-tertiary'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
