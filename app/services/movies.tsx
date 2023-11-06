import { GET } from "services/api";
import { GenresType, GenreType, MoviesType, MovieType } from "./interface";

export const API_BASE_URL = "https://api.themoviedb.org/3/";

export const API_URLS = {
  GET_POPULAR_MOVIES: API_BASE_URL + "movie/popular?language=en-US&page=1",
  GET_ALL_GENRES: API_BASE_URL + "genre/movie/list?language=en",
} as const;

export async function getPopularMovies() {
  let movies: MovieType[] = [];

  try {
    const response = await GET<MoviesType>(API_URLS.GET_POPULAR_MOVIES);
    movies = response.results;
  } catch {
    console.error("Error: error in fetching movies");
  }

  return movies;
}

export async function getAllGenres() {
  let genres: GenreType[] = [];

  try {
    const response = await GET<GenresType>(API_URLS.GET_ALL_GENRES);
    genres = response.genres;
  } catch {
    console.error("Error: error in fetching Genres");
  }

  return genres;
}

// export async function getMoviesByGenre() {
//   let movies: MovieType[] = [];
//
//   try {
//     const response = await GET<MoviesType>();
//     movies = response.results;
//   } catch {
//     console.error("Error: error in fetching movies");
//   }
//
//   return movies;
// }
