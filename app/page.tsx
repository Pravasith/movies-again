import MoviesList from "@/components/Pages/MoviesList/MoviesList";

// async function getMovies() {
//         const res = await fetch
//     }

export default function Home() {
  return (
    <main className="flex bg-yellow-300 flex-col items-center justify-between p-24">
      Search bar
      <MoviesList />
    </main>
  );
}
