import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { MainPage } from '../pages/MainPage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import CelebPage from '../pages/CelebPage/CelebPage';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      // errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'restaurant', element: <RestaurantPage /> },
        { path: 'celeb', element: <CelebPage /> },
        // { path: '/a', element: <Example /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
