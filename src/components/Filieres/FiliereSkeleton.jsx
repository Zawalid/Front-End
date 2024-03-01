export default function FiliereSkeleton() {
  return (
    <div className='flex h-[450px] animate-pulse min-w-[350px] flex-col rounded-xl bg-background-secondary transition-all duration-500'>
      <div className='relative h-[250px] border-b border-border'>
        <div className="absolute rounded-full bg-text-secondary -bottom-2.5 left-5 w-28 py-3"></div>
      </div>
      <div className='flex flex-col  rounded-2xl p-5 pt-8'>
        <div className='space-y-3'>
          <div className='h-2 w-28 rounded-md bg-text-tertiary' />
          <div className='h-2 w-28 rounded-md bg-text-tertiary' />
          <div className='h-2 w-28 rounded-md bg-text-tertiary' />
        </div>
        <hr className='my-4 border-border' />
        <div className='space-y-3'>
          <div className='h-3.5 w-full rounded-lg bg-text-primary' />
          <div className='h-2.5 w-full rounded-lg bg-text-secondary' />
        </div>

        <hr className='my-4 border-border' />
        <div className='mx-auto w-40 rounded-full bg-text-secondary py-5'></div>
      </div>
    </div>
  );
}
