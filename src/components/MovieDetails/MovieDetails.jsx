import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';

import { fetchMovieById } from '../../services/API';
import { Box, List, Item, LinkItem, Additional } from './MovieDetails.styled';
import { BackLink } from '../BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieInfo, setMovieInfo] = useState([]);

  const pageFrom = location.state?.from ?? '/';
  const refLocation = useRef(location.state?.location);

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
      <BackLink to={refLocation.current ?? pageFrom}>Go back</BackLink>
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
              {title && original_title} ({new Date(release_date).getFullYear()})
            </h2>
            <p>User score: {Math.floor(vote_average * 10)}%</p>
          </Item>
          <Item>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Item>
          <Item>
            <h3>Genres</h3>
            <p>{genres ? genres.map(genre => genre.name).join(', ') : '-'}</p>
          </Item>
        </List>
      </Box>

      <Additional>
        <h3>Additional information</h3>
        <List>
          <li>
            <LinkItem to={'cast'} state={{ from: pageFrom }}>
              Cast
            </LinkItem>
          </li>
          <li>
            <LinkItem to={'reviews'} state={{ from: pageFrom }}>
              Reviews
            </LinkItem>
          </li>
        </List>
      </Additional>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
