import { Breadcrumbs } from './BreadCrumbs';

export function PageTitle({ title }) {
  return (
    <div className='h-[150px] w-full bg-[url("/images/page-title.jpg")] bg-cover bg-no-repeat sm:h-[200px]'>
      <div className='flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-70 px-10'>
        <h1 className='text-4xl font-bold capitalize text-white sm:text-6xl'>{title}</h1>
        <Breadcrumbs />
      </div>
    </div>
  );
}
