import MoviesList from "@/components/Pages/MoviesList/MoviesList";
import { getPopularMovies } from "services/movies";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <MoviesList moviesList={movies} />
    </main>
  );
}
