/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./features/home/home";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";
import { NotFound } from "./shared/NotFound";
import Movies from "./features/movies/Movies";
import MoviesDetails from "./features/movies/MoviesDetails";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
