import MoviesList from "@/components/MoviesList/MoviesList";
import { GenreType, MoviesWithGenres } from "services/interface";
import { getAllGenres, getPopularMovies } from "services/movies";

export default async function Home() {
  const aggregateData = await Promise.all([getPopularMovies(), getAllGenres()]);
  const [movies, genres] = aggregateData;

  const modifiedMovies: MoviesWithGenres[] = [];

  movies.forEach((movie) => {
    const genreData: GenreType[] = [];
    console.log(movie.genre_ids);

    movie.genre_ids.forEach((id) => {
      const temp = genres.find((genre) => genre.id === id);
      if (temp) genreData.push(temp);
    });

    modifiedMovies.push({
      ...movie,
      genres: genreData,
    });
  });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <MoviesList moviesList={modifiedMovies} />
    </main>
  );
}
