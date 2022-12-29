import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

import { List, Item, LinkItem, Text } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <List>
      {moviesList.map(({ id, title, original_title, poster_path }) => {
        return (
          <Item key={id}>
            <LinkItem to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://i.postimg.cc/VL0DBTFD/cinema-popcorn-soda-drink-tickets-and-film-strip-movie-poster-with-fast-food-snack-and-cola-beverage.webp'
                }
                alt={title && original_title}
                width="150"
                height="200"
              />
              <Text>{title && original_title}</Text>
            </LinkItem>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
