export const routes = [
  {
    path: '/home',
    label: 'Home',
  },
  {
    path: '/filieres',
    label: 'Filieres',
    nested: [
      {
        path: '/filieres/1',
        label: 'Filiere 1',
      },
      {
        path: '/filieres/2',
        label: 'Filiere 2',
      },
      {
        path: '/filieres/3',
        label: 'Filiere 3',
      },
    ],
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/evenements',
    label: 'Evenements',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];
