import type { Movie } from "../../models/movie.model";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <a href={`/movies/${movie.id}`} className="flex items-center gap-4 py-6 hover:bg-gray-50 transition">
      <img src={movie.posterUrl} alt={movie.title} className="w-24 h-36 object-cover rounded-md" />
      <div>
        <p className="text-xl font-semibold">{movie.title}</p>
        <p className="text-gray-600">{movie.description}</p>
      </div>
    </a>
  );
}
