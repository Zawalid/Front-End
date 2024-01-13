import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from './Layouts/AppLayout';

import Blog from './pages/Blog';
import Filieres from './pages/Filieres';
import Evenements from './pages/Evenements';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import PageNotFound from './pages/PageNotFound';
// const Blog = lazy(() => import('./pages/Blog'));
// const Filieres = lazy(() => import('./pages/Filieres'));
// const Evenements = lazy(() => import('./pages/Evenements'));
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
// const HomePage = lazy(() => import('./pages/HomePage'));
// const Article = lazy(() => import('./pages/Article'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { element: <Navigate replace to='home' />, index: true },
      {
        path: 'home',
        element: <HomePage />,
      },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <Article /> },
      { path: 'filieres', element: <Filieres /> },
      { path: 'filieres/:id', element: <Filieres /> },
      { path: 'evenements', element: <Evenements /> },
      { path: 'evenements/:id', element: <Evenements /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
