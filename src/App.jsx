import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DarkModeProvider } from './contexts/DarkModeContext';
import AppLayout from './Layouts/AppLayout';

import Blog from './pages/Blog';
import Filieres from './pages/Filieres';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import PageNotFound from './pages/PageNotFound';
import Event from './pages/Event';

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
      { path: 'evenements', element: <Events /> },
      { path: 'evenements/:id', element: <Event /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
