import Articles from './Blog/Articles';
import Courses from './Courses/Courses';
import Events from './Events/Events';
import HeroSection from './HeroSection';

export default function Main() {
  return (
    <main className='flex-1'>
      <HeroSection />
      <Courses />
      <Events />
      <Articles />
    </main>
  );
}
