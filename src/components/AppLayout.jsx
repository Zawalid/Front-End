import Footer from './Footer';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className='flex h-full flex-col'>
      <Header />
      <Footer />
    </div>
  );
}
