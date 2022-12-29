import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '0ffc72445f4cf4ad84f6636a20d6ec36';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response =
    await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US
  `);
  return response;
};

export const fetchMovieByName = async query => {
  const response =
    await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false
  `);
  return response;
};

export const fetchMovieCastById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const fetchMovieReviewById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
};
