import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function AppLayout() {
  return (
    <div className='flex flex-col xl:container xl:mx-auto'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
