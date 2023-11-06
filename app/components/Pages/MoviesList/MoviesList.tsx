import ICard from "@/components/UI/ICard/ICard";
import { MovieType } from "services/interface";

interface Props {
  moviesList: MovieType[];
}

const MoviesList = (props: Props) => {
  return (
    <div
      className={` 
        grid grid-cols-1 gap-3 my-10 max-w-[1280px] px-5
        tablet:grid-cols-2
        laptop:grid-cols-3
      `}
    >
      {props.moviesList.map((movie) => {
        return (
          <ICard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            poster={movie.poster_path}
            isLoading={false}
            genre="thriller"
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
