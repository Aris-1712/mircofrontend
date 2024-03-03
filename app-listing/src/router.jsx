import { createBrowserRouter } from 'react-router-dom';
import LisitngId from './LisitingId';
import Listing from './listing';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Listing />,
    },
    {
      path: '/:id',
      element: <LisitngId />,
    },
  ],
  { basename: '/listing' }
);
