import { SearchBox } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from '../components/MoviesList/MoviesList';
import { fetchMovieByName } from '../services/API';

const Movies = () => {
  const [moviesList, setMoviesList] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchMovieByName(movieName)
      .then(data => setMoviesList(data.data.results))
      .catch(error => console.log(error.message));
  }, [movieName]);

  return (
    <div>
      <SearchBox onSubmit={updateQueryString} />
      {moviesList.length > 0 && <MoviesList moviesList={moviesList} />}
    </div>
  );
};

export default Movies;
