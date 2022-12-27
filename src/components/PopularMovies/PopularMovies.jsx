import { useLocation } from 'react-router-dom';
import { List, Item, LinkItem, Text } from './PopularMovies.styled';

export const PopularMovies = ({ moviesList }) => {
  const location = useLocation();

  return (
    <List>
      {moviesList.map(({ id, title, original_title, poster_path }) => {
        return (
          <Item key={id}>
            <LinkItem to={`/movies/${id}`} state={{ location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
