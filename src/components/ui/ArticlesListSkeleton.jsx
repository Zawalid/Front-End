import { twMerge } from 'tailwind-merge';

export default function ArticlesListSkeleton({ className }) {
  return (
    <div className={twMerge('flex animate-pulse flex-wrap justify-center gap-8', className)}>
      <Article />
      <Article />
      <Article />
    </div>
  );
}

function Article() {
  return (
    <div className='group flex h-[350px] min-w-[320px] max-w-[350px] flex-col rounded-lg border-border transition-all duration-500'>
      <div className='h-[300px] rounded-lg bg-background-secondary'></div>
      <div className='-mt-[100px] ml-[50%] flex w-[90%] -translate-x-1/2 flex-col rounded-2xl border border-border bg-background-secondary p-5 shadow-md transition-transform duration-500 group-hover:-translate-y-2'>
        <div className='mb-3 flex justify-between gap-5 text-xs text-text-secondary'>
          <div className='h-2 w-20 rounded-md bg-text-tertiary' />
          <div className='h-2 w-20 rounded-md bg-text-tertiary' />
        </div>
        <div className='h-3.5 w-full rounded-lg bg-text-primary' />

        <hr className='my-4 border-border' />
        <div className='flex gap-2'>
          <div className='h-2 w-14 rounded-md bg-text-tertiary' />
          <div className='h-2 w-14 rounded-md bg-text-tertiary' />
        </div>
      </div>
    </div>
  );
}
