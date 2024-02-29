import HeroSection from '../components/HeroSection';
import FilieresSection from '../components/Filieres/FilieresSection';
import ArticlesSection from '../components/Blog/ArticlesSection';
import EventsSection from '../components/Events/EventsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilieresSection />
      <ArticlesSection />
      <EventsSection />
    </>
  );
}
