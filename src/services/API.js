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
