import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCastById } from '../../services/API';
import { ListCast, Wrapper, ItemCast, TextCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCastById(movieId)
      .then(data => setCast(data.data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <Wrapper>
      <ListCast>
        {!cast.length && <div>There is no information about cast</div>}
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <ItemCast key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://i.postimg.cc/4djHMQ19/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg'
                }
                alt={name}
                width="150"
              />
              <TextCast>{name}</TextCast>
              <TextCast>Character: {character}</TextCast>
            </ItemCast>
          );
        })}
      </ListCast>
    </Wrapper>
  );
};

export default Cast;
