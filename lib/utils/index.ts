import { Genre, PopularMovies, ProcessedPopularMovie } from '@/types';

import { getGenres } from '../api';

export async function formatSectionMovies(
  popularMovies: PopularMovies
): Promise<ProcessedPopularMovie[]> {
  try {
    if (popularMovies.results.length === 0) {
      return [];
    }

    const genres: Genre[] = await getGenres();

    const popularMoviesProcessed = popularMovies.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: 'https://image.tmdb.org/t/p/' + 'w500' + movie.poster_path,
      release_year: movie.release_date.split('-')[0],
      overview: movie.overview,
      genres: movie.genre_ids.map(genreId => {
        const genre = genres?.find(genre => genre.id === genreId);
        return genre!.name;
      }),
    }));

    return popularMoviesProcessed;
  } catch (error) {
    console.error('Error processing popular movies:', error);
    throw error;
  }
}
