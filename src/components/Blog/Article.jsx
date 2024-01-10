export default function Article() {
  return (
    <div className='relative flex flex-col rounded-lg'>
      <div className='relative  overflow-hidden rounded-lg'>
        <div className='absolute -top-4 right-8 flex flex-col items-center rounded-full bg-secondary px-3 pb-3 pt-8 text-white'>
          <span className='text-xl font-bold leading-3'>20</span>
          <span className='text-sm'>Dec</span>
        </div>
        <a href='#'>
          <img src='/images/news-1.jpg' alt='' className='w-full' />
        </a>
      </div>
      <div className=' -bottom-20 -mt-[100px] ml-[50%] flex w-[90%] -translate-x-1/2 flex-col rounded-2xl bg-background-primary p-5 shadow-md'>
        <div className='mb-3 flex justify-between gap-5 text-sm text-text-secondary'>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-user text-text-tertiary'></i>
            <span>By Admin</span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-comment text-text-tertiary'></i>
            <span>2 Comments</span>
          </div>
        </div>
        <a href='#'>
          <h4 className='text-xl font-bold leading-tight text-text-primary transition-colors duration-300 hover:text-secondary'>
            The quality role of the elementary teacher in education
          </h4>
        </a>
        <hr className='my-4 border-border' />
        <a
          href='#'
          className='flex items-center justify-between text-sm text-text-primary transition-colors duration-300 hover:text-tertiary'
        >
          <span className='font-medium'>Read More</span>
          <i className='fa-solid fa-arrow-right '></i>
        </a>
      </div>
    </div>
  );
}
