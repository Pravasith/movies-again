import MoviesList from "@/components/MoviesList/MoviesList";
import { sanitizeMoviesByGenres } from "@/utils/utils";
import { getAllGenres, getByGenre } from "services/movies";

interface Props {
  genre: string;
}
export default async function MoviesByGenre({ params }: { params: Props }) {
  const aggregateData = await Promise.all([
    getByGenre(params.genre),
    getAllGenres(),
  ]);
  const [movies, genres] = aggregateData;
  const modifiedMovies = sanitizeMoviesByGenres(movies, genres);

  return <MoviesList moviesList={modifiedMovies} />;
}
