import { GenreType, MovieType, MoviesWithGenres } from "services/interface";

export const worldsStupidestUuidGenerator = () => {
  const max = Number.MAX_SAFE_INTEGER;
  return Math.floor(Math.random() * max).toString();
};

export const sanitizeMoviesByGenres = (
  movies: MovieType[],
  genres: GenreType[],
): MoviesWithGenres[] => {
  const modifiedMovies: MoviesWithGenres[] = [];

  movies.forEach((movie) => {
    const genreData: GenreType[] = [];

    movie.genre_ids.forEach((id) => {
      const temp = genres.find((genre) => genre.id === id);
      if (temp) genreData.push(temp);
    });

    modifiedMovies.push({
      ...movie,
      genres: genreData,
    });
  });

  return modifiedMovies;
};
