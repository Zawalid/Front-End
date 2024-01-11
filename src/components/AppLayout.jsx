import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className='flex flex-col xl:container xl:mx-auto'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
