import MoviesList from "@/components/MoviesList/MoviesList";
import { getAllGenres, getPopularMovies } from "services/movies";
import { sanitizeMoviesByGenres } from "./utils/utils";

export default async function Home() {
  const aggregateData = await Promise.all([getPopularMovies(), getAllGenres()]);
  const [movies, genres] = aggregateData;
  const modifiedMovies = sanitizeMoviesByGenres(movies, genres);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <MoviesList moviesList={modifiedMovies} />
    </main>
  );
}
