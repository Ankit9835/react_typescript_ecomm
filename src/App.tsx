
import { ErrorElement } from './components';
import { Button } from './components/ui/button';
import { useAppSelector } from './hooks';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: () => {
          console.log('landing page');
          // need to return something (at least null)
          return null;
          },
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      { path: 'about', 
        element: <About />,
        errorElement: <ErrorElement />
       },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;