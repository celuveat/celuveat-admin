import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { MainPage } from '../pages/MainPage';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      // errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <MainPage /> },
        // { path: '/a', element: <Example /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
