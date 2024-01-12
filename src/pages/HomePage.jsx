import HeroSection from '../components/HeroSection';
import FilieresSection from '../components/Filieres/FilieresSection';
import ArticlesSection from '../components/Blog/ArticlesSection';
import EvenementsSection from '../components/Evenements/EvenementsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilieresSection />
      <ArticlesSection />
      <EvenementsSection />
    </>
  );
}
