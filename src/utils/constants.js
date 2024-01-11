export const routes = [
  {
    path: '/',
    label: 'Home',
    nested: [
      {
        path: '/nested-home-1',
        label: 'Nested Home 1',
      },
      {
        path: '/nested-home-2',
        label: 'Nested Home 2',
      },
      {
        path: '/nested-home-3',
        label: 'Nested Home 3',
      },
    ],
  },
  {
    path: '/pages',
    label: 'Pages',
    nested: [
      {
        path: '/nested-pages-1',
        label: 'Nested Pages 1',
      },
      {
        path: '/nested-pages-2',
        label: 'Nested Pages 2',
      },
    ],
  },
  {
    path: '/courses',
    label: 'Courses',
  },
  {
    path: '/shop',
    label: 'Shop',
  },
  {
    path: '/news',
    label: 'News',
    nested: [
      {
        path: '/nested-news-1',
        label: 'Nested News 1',
      },
      {
        path: '/nested-news-2',
        label: 'Nested News 2',
      },
      {
        path: '/nested-news-3',
        label: 'Nested News 3',
      },
    ],
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];
