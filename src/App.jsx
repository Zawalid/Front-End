import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';

// Todo : Add lazy loading
import Blog from './pages/Blog';
import Filieres from './pages/Filieres';
import Evenements from './pages/Evenements';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Article from './pages/Article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { element: <Navigate replace to='home' />, index: true },
      { path: 'home', element: <HomePage /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <Article /> },
      { path: 'filieres', element: <Filieres /> },
      { path: 'filieres/:id', element: <Filieres /> },
      { path: 'evenements', element: <Evenements /> },
      { path: 'evenements/:id', element: <Evenements /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
