import { Outlet } from 'react-router';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AppLayout() {
  const [parent] = useAutoAnimate({ duration: 400, easing: 'ease-in-out' });

  return (
    <div className='flex overflow-x-hidden overflow-y-auto h-full flex-col'>
      <Header />
      <main className='flex-1' ref={parent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
