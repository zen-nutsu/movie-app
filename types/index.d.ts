export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PopularMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type ProcessedPopularMovie = {
  id: number;
  title: string;
  image: string;
  release_year: string;
  overview: string;
  genres: string[];
};

export type TrendingMovie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv' | 'person';
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TrendingMoviesResponse = {
  results: TrendingMovie[];
  page: number;
  total_pages: number;
  total_results: number;
};
