import MoviesList from "@/components/MoviesList/MoviesList";
import { sanitizeMoviesByGenres } from "@/utils/utils";
import { getAllGenres, getByKeyword } from "services/movies";

interface Props {
  keyword: string;
}

export default async function MoviesByKeyword({ params }: { params: Props }) {
  const aggregateData = await Promise.all([
    getByKeyword(params.keyword),
    getAllGenres(),
  ]);
  const [movies, genres] = aggregateData;
  const modifiedMovies = sanitizeMoviesByGenres(movies, genres);

  return <MoviesList moviesList={modifiedMovies} />;
}
