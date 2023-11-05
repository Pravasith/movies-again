import ICard from "@/components/UI/ICard/ICard";

const MoviesList = () => {
  return (
    <div
      className={` 
        grid grid-cols-1 gap-3 my-10 max-w-[1280px] px-5
        tablet:grid-cols-2
        laptop:grid-cols-3
      `}
    >
      <ICard
        title="This is title"
        overview="THisi is akdjsakdj"
        releaseDate="asdas"
        poster="https://picsum.photos/200/300"
        isLoading={false}
        genre="thriller"
      />
    </div>
  );
};

export default MoviesList;
