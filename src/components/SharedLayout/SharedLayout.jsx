import { MovieHeader } from 'components/MovieHeader/MovieHeader';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div display="flex">
      <MovieHeader />
      <Outlet />
    </div>
  );
};
