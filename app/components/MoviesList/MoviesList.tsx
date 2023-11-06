import ICard from "@/components/UI/ICard/ICard";
import { MoviesWithGenres } from "services/interface";

interface Props {
  moviesList: MoviesWithGenres[];
}

const MoviesList = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between px-24 pb-24 pt-12">
      <div
        className={` 
        grid grid-cols-1 gap-3 my-10 max-w-[1280px] px-5
        tablet:grid-cols-2
        laptop:grid-cols-3
      `}
      >
        {props.moviesList.map((movie, i) => {
          return (
            <ICard
              key={movie.id + i}
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              isLoading={false}
              genres={movie.genres}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
