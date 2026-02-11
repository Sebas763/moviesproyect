import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((movies) => {
        const found = movies.find((m) => m.id === id);
        setMovie(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Cargando...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Película no encontrada
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl bg-white/10 p-6 rounded-lg shadow-lg">
        {/* Imagen de la película */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-64 h-auto rounded-md object-cover flex-shrink-0"
        />

        {/* Información de la película */}
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.title} ({movie.year})</h1>
          <p className="text-gray-300 mb-4">{movie.description}</p>

          <div className="flex flex-wrap gap-4 text-gray-200 text-sm">
            <span><strong>Género:</strong> {movie.genre}</span>
            {movie.duration && <span><strong>Duración:</strong> {movie.duration} min</span>}
            {movie.director && <span><strong>Director:</strong> {movie.director}</span>}
            <span><strong>Rating:</strong> {movie.rating}/10 ⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}
