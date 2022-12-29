import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { MovieHeader } from 'components/MovieHeader/MovieHeader';

export const SharedLayout = () => {
  return (
    <div display="flex">
      <MovieHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
