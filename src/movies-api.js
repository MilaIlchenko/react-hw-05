import axios from "axios";

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDViZWNmNTE4NzBmYzNhNzgwN2E1NmRhN2QzMmM4ZSIsInN1YiI6IjY2NGIzZGNmNjU2ZjRjYjhmYWYyYWU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQcyYTAGY5j0CMV1-a4Q4YGsX1Zxtqj9wLwOw0WWiN8";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiToken}`;
  return config;
});

export const getMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMoviesSearch = async (searchQuery) => {
  const response = await axios.get("3/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US",
      // page: 1,
    },
  });
  return response.data.results;
};

export const getMovieId = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdCredits = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      // page: 1,
    },
  });
  return response.data;
};