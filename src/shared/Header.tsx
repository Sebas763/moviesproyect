export default function Header() {
  return (
    <div className="bg-red-600 p-4 flex justify-center">
      <nav className="flex items-center gap-2 text-white text-lg font-semibold">
        <a href="/" className="hover:bg-red-800 px-2 py-1 rounded transition flex items-center gap-1">
          🏠 Home
        </a>
        <span className="mx-2 text-white">|</span>
        <a href="/movies" className="hover:bg-red-800 px-2 py-1 rounded transition flex items-center gap-1">
          🎬 Movies
        </a>
      </nav>
    </div>
  );
}
