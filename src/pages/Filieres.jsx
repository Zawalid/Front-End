import { useSearchParams } from 'react-router-dom';
import PageLayout from '../Layouts/PageLayout';
import FilieresList from '../components/Filieres/FilieresList';
import { Search } from '../components/ui/Search';

export default function Filieres() {
  const [searchParams, setParam] = useSearchParams();
  const query = searchParams.get('s') || '';

  return (
    <PageLayout title='filieres' image='filieres'>
      <div className='space-y-8'>
        <div className='flex items-center justify-between gap-8'>
          <Search
            placeholder='Search Filieres...'
            query={query}
            onChange={(query) => setParam({ s: query })}
          />
        </div>
        <FilieresList />
      </div>
    </PageLayout>
  );
}
