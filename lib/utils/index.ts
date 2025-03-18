import type { Genre, PopularMovies, ProcessedPopularMovie, TrendingMovie } from '@/types';

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

export function formatCarousalContent(trendingContent: TrendingMovie[]) {
  try {
    if (!trendingContent || trendingContent.length === 0) {
      return [];
    }

    const formattedContent = trendingContent.map(content => ({
      title: content.title,
      description: content.overview,
      image: 'https://image.tmdb.org/t/p/original' + content.backdrop_path,
      id: content.id.toString(),
      categories: [
        content.original_language.toUpperCase(),
        content.adult ? '18+' : 'All Ages',
        new Date(content.release_date).getFullYear().toString(),
      ],
    }));

    return formattedContent;
  } catch (error) {
    console.error('Error processing trending content:', error);
    throw error;
  }
}
