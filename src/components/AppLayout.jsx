import Footer from './Footer';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className='h-full flex flex-col'>
      <Header />
      <Footer />
    </div>
  );
}