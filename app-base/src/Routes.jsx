import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense } from 'react';
import Home from './Home';
const Listing = React.lazy(() => import('app-listing/list'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/listing/*',
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Listing />
      </Suspense>
    ),
  },
]);

export default router;
