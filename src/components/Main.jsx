import Articles from './Blog/Articles';
import Courses from './Courses/Courses';

export default function Main() {
  return (
    <main className='flex-1'>
      <Courses />
      <Articles />
    </main>
  );
}
