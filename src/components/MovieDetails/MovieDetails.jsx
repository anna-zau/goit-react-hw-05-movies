import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieById } from '../../services/API';
import { Box, List, Item } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  //   const location = useLocation();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(data => setMovieInfo(data.data))
      .catch(error => alert('Please reload the page'));
  }, [movieId]);

  if (!movieInfo || !movieId) {
    return null;
  }

  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;

  return (
    <div>
      <Link>Go back</Link>
      <Box>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://i.postimg.cc/VL0DBTFD/cinema-popcorn-soda-drink-tickets-and-film-strip-movie-poster-with-fast-food-snack-and-cola-beverage.webp'
          }
          alt={title && original_title}
          width="200"
        />
        <List>
          <Item>
            <h2>
              {title && original_title} ({release_date})
            </h2>
            <p>User score: {vote_average}</p>
          </Item>
          <Item>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Item>
          <Item>
            <h3>Genres</h3>
            <p>{genres ? genres.map(genre => genre.name).join('  ') : '-'}</p>
          </Item>
        </List>
      </Box>
    </div>
  );
};
