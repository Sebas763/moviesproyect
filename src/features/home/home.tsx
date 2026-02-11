export function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 
                 bg-[url('/giphy.gif')] bg-no-repeat bg-center 
                 bg-contain sm:bg-cover" 
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-200 max-w-md">
          This is the home page of our movie app.
        </p>
      </div>
    </div>
  );
}
