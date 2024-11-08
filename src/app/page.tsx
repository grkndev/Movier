import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <div className="w-full p-8  flex items-center justify-center">
      <div className="grid grid-cols-8 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
