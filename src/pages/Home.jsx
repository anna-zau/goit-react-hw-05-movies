import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { fetchPopularMovies } from 'services/API';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies()
      .then(setMovies)
      .catch(error => alert('Please, try again - reload the page'));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList moviesList={movies} />
    </>
  );
};

export default Home;
