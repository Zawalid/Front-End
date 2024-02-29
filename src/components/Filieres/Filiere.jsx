export default function Filiere({ index }) {
  return (
    <div className='relative flex min-w-[300px] flex-col overflow-hidden rounded-lg  shadow-md'>
      <a href='#'>
        <img
          src={`/images/filiere-image-${index + 1}.jpeg`}
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
       
      </div>
    </div>
  );
}
