import { GET } from "services/api";
import { MoviesType, MovieType } from "./interface";

export async function getPopularMovies() {
  let movies: MovieType[] = [];

  try {
    const response = await GET<MoviesType>();
    movies = response.results;
  } catch {
    console.error("Error: error in fetching movies");
  }

  return movies;
}
