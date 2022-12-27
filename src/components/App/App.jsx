import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { PopularMovies } from 'components/PopularMovies/PopularMovies';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
// import { lazy } from 'react';

import { GlobalStyle } from '../GlobalStyle';

import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
