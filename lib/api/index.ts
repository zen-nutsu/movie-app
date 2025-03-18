import type { Genre, Genres, PopularMovies, TrendingMoviesResponse } from '@/types';

const API_URL = process.env.EXPO_PUBLIC_TMDB_API_URL!;
const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY!;

export async function getMovies(
  type: 'top_rated' | 'popular' | 'upcoming' | 'now_playing' = 'popular',
  page: number = 1,
  language: string = 'en-US',
  includeAdult: boolean = false,
  includeVideo: boolean = false,
  sortBy: string = 'popularity.desc'
): Promise<PopularMovies> {
  try {
    const params = new URLSearchParams({
      language,
      page: page.toString(),
      include_adult: includeAdult.toString(),
      include_video: includeVideo.toString(),
      sort_by: sortBy,
      api_key: API_KEY,
    });

    const requestUrl = `${API_URL}/movie/${type}?${params.toString()}`;

    const response = await fetch(requestUrl.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
}

export async function getTrending(
  timeWindow: 'day' | 'week' = 'week',
  mediaTypes: ('movie' | 'tv' | 'person')[] = ['movie'],
  count: number = 5
) {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });
    const requestUrl = `${API_URL}/trending/movie/${timeWindow}?${params.toString()}`;
    const response = await fetch(requestUrl.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: TrendingMoviesResponse = await response.json();

    let filteredData = data?.results?.filter(item => mediaTypes.includes(item.media_type));

    filteredData = filteredData?.slice(0, count);

    return filteredData;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}

export async function getGenres(): Promise<Genre[]> {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });
    const requestUrl = `${API_URL}/genre/movie/list?${params.toString()}`;
    const response = await fetch(requestUrl.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: Genres = await response.json();

    return data?.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}
