import { SearchInput } from '../ui/SearchInput';

export default function ArticleDetails() {
  return (
    <div className=' grid-cols-3 gap-10 lg:grid '>
      <Details />
      <Aside />
    </div>
  );
}

// Details
function Details() {
  return (
    <div className='col-span-2'>
      <div className='space-y-4'>
        <img
          src='/images/blog.jpg'
          alt='blog'
          className='h-72 w-full rounded-xl object-cover sm:h-96'
        />
        <div className='mb-3 flex gap-8 text-sm text-text-secondary'>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-user text-text-tertiary'></i>
            <span>By Admin</span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-comment text-text-tertiary'></i>
            <span>2 Comments</span>
          </div>
        </div>
        <h2 className='mb-3 text-3xl font-medium text-text-primary'>
          SEO is a Cost-Effective Advertising Strategy
        </h2>
        <p className='leading- text-lg text-text-secondary'>
          Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis
          purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
          at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus
          vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl
          pellentesque semper. Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia
          nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at
          euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
          rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo
          vitae nisl pellentesque semper. Mauris non dignissim purus, ac commodo diam. Donec sit
          amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
          sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum
          tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et
          nunc. Sed vitae leo vitae nisl pellentesque semper.
        </p>
      </div>
      <hr className='my-8 border-border' />

      <div className='flex items-center gap-3'>
        <h5 className='text-text-primary'>Tags:</h5>
        <div className='flex flex-wrap items-center gap-3'>
          {['SEO', 'Marketing', 'Digital'].map((tag, index) => (
            <Tag
              key={index}
              tag={tag}
              className='bg-text-secondary text-white hover:bg-text-secondary'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Aside
function Aside() {
  return (
    <aside className='mt-10 space-y-8 lg:mt-0'>
      <Search />
      <LatestArticles />
      <Categories />
      <AllTags />
    </aside>
  );
}
function Search() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className=''>
      <SearchInput className='rounded-xl py-3' />
    </form>
  );
}
function LatestArticles() {
  return (
    <div className='rounded-xl bg-background-secondary p-4 '>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Latest Articles</h4>
      <ul>
        <Article />
        <Article />
        <Article />
      </ul>
    </div>
  );
}
function Article() {
  return (
    <li>
      <a
        href='#'
        className='grid grid-cols-[100px_auto] gap-5 rounded-lg p-4 transition-colors duration-300 hover:bg-background-primary'
      >
        <img src='/images/blog.jpg' alt='blog' className='h-20 w-full rounded-lg object-cover' />
        <div className='space-y-2'>
          <h4 className='text-sm font-bold text-text-primary sm:text-base'>
            Top crypto exchange influencers
          </h4>
          <div className='flex items-center gap-2'>
            <div className='relative grid  h-5 w-5 place-content-center overflow-hidden rounded-full bg-text-tertiary'>
              <i className='fa-solid fa-user text-xs text-white'></i>
            </div>
            <span className='text-sm font-bold text-text-secondary'>Admin</span>
          </div>
        </div>
      </a>
    </li>
  );
}
function Categories() {
  return (
    <div className='rounded-xl bg-background-secondary p-4 '>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Categories</h4>
      <ul>
        {['SEO', 'Marketing', 'Digital', 'Artificial Intelligence'].map((category, index) => (
          <li key={index} className='w-full'>
            <a
              href='#'
              className='block rounded-lg px-4 py-3 font-semibold text-text-secondary transition-colors duration-300 hover:bg-background-primary hover:text-text-primary'
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function AllTags() {
  return (
    <div className='gap-5 rounded-xl bg-background-secondary p-4'>
      <h4 className='mb-6 text-lg font-bold text-text-primary'>Tags</h4>
      <div className='flex flex-wrap gap-3'>
        {['SEO', 'Marketing', 'Digital', 'Artificial Intelligence'].map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
}

function Tag({ tag, className }) {
  return (
    <a
      href='#'
      className={`rounded-full bg-background-primary px-5 py-2 text-sm font-medium text-text-primary transition-colors duration-300 hover:bg-text-primary hover:text-background-primary ${className}`}
    >
      {tag}
    </a>
  );
}
