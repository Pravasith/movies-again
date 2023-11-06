import { z } from "zod";

export const GenrePattern = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenresPattern = z.object({
  genres: z.array(GenrePattern),
});

export type GenreType = z.infer<typeof GenrePattern>;
export type GenresType = z.infer<typeof GenresPattern>;

export const MoviePattern = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  release_date: z.string(),
  poster_path: z.string(),
  genre_ids: z.array(z.number()),
});

export const MoviesPattern = z.object({
  results: z.array(MoviePattern),
});

export type MovieType = z.infer<typeof MoviePattern>;
export type MoviesType = z.infer<typeof MoviesPattern>;

export interface MoviesWithGenres extends MovieType {
  genres: GenreType[];
}
