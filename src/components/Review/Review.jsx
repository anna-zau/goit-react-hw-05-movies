import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviewById } from '../../services/API';
import { WrapperReview, ListReview, ItemReview } from './Review.styled';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchMovieReviewById(movieId)
      .then(data => setReview(data.data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <WrapperReview>
      <ListReview>
        {!review.length && <div>There are no reviews for this movie</div>}
        {review.map(({ id, author, content }) => {
          return (
            <ItemReview key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ItemReview>
          );
        })}
      </ListReview>
    </WrapperReview>
  );
};

export default Review;
