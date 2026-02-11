import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../services/movies.service";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="animate-pulse text-xl font-semibold tracking-widest">
          Cargando catálogo...
        </div>
      </div>
    );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10 text-white"
      style={{
        background:
          "radial-gradient(circle at center, rgba(10, 10, 10, 0.9) 0%, rgba(0, 0, 0, 1) 100%), url('https://images.unsplash.com')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <h1 className="text-5xl font-extrabold mb-4 text-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
        Catálogo de Películas
      </h1>

      <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl drop-shadow-md">
        Selecciona una producción para ver su ficha técnica, sinopsis y detalles adicionales.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto w-full">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 p-3 rounded-2xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Contenedor de la Imagen */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Texto de la Tarjeta */}
            <div className="text-center px-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-tighter mb-1 group-hover:text-gray-200">
                Cine Premium
              </p>
              <h2 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-yellow-500 transition-colors duration-300">
                {movie.title}
              </h2>
            </div>

            {/* Brillo sutil al pasar el mouse */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </Link>
        ))}
      </div>
    </div>
  );
}
