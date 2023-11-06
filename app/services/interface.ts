import { z } from "zod";

export const MoviePattern = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  release_date: z.string(),
  poster_path: z.string(),
  genre: z.array(z.string()),
});

export const MoviesPattern = z.object({
  results: z.array(MoviePattern),
});

export type MovieType = z.infer<typeof MoviePattern>;
export type MoviesType = z.infer<typeof MoviesPattern>;
