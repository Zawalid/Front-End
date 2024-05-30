import { SocialMedia } from './ui/SocialMedia';
import { Logo } from './ui/Logo';

export default function Footer() {
  return (
    <footer className='relative flex mt-auto items-center justify-between gap-6  border-t shadow-md border-border bg-background-primary px-5 py-3'>
      <Logo className='w-20' link='https://www.ofppt.ma' />
      <div className='flex justify-end gap-4'>
        <SocialMedia />
      </div>
    </footer>
  );
}

// function Link({ children }) {
//   return (
//     <li className='relative h-8 w-fit overflow-hidden text-text-tertiary transition-colors duration-300 before:absolute  before:bottom-0 before:left-0 before:h-[1px] before:w-full  before:-translate-x-full before:bg-white before:transition-transform before:duration-500 hover:text-text-tertiary hover:text-white hover:before:translate-x-0'>
//       {children}
//     </li>
//   );
// }
