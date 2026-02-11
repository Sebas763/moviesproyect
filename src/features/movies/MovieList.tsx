import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[]}) {
  return (
    <section>
    <div className="flex flex-col gap-4">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
    </section>
  );
}
