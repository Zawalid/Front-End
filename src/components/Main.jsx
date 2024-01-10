import Articles from './News/Articles';
import Courses from './Courses/Courses';
import HeroSection from './HeroSection';

export default function Main() {
  return (
    <main className='flex-1'>
      <HeroSection />
      <Courses />
      <Articles />
    </main>
  );
}
