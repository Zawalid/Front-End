import { Heading } from '../ui/Heading';
import Section from '../ui/Section';
import Article from './Article';

export default function Articles() {
  return (
    <Section>
      <div className='text-center'>
        <Heading
          h3='DIRECTLY FROM BLOG'
          h2={
            <>
              Our latest news &
              <br />
              upcoming blog posts
            </>
          }
        />
      </div>
      <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-center  gap-8 p-3 '>
        <Article />
        <Article />
        <Article />
      </div>
    </Section>
  );
}
