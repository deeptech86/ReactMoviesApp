import "./App.css";

import Movie from "./components/movie";
import { useEffect, useState } from "react";

// const TRENDING_MOVIES =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f0cfc80d539a024353c87293a229eed3&language=bn";

const TRENDING_MOVIES =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=f0cfc80d539a024353c87293a229eed3";

const SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=f0cfc80d539a024353c87293a229eed3&query=";

function App() {
  const [movieslst, setMovieLst] = useState([]);
  const [searchTerm, setsearchTerm] = useState([]);

  const fetchData = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieLst(data.results);
      });
  };

  useEffect(async () => {
    fetchData(TRENDING_MOVIES);
  }, []);

  const handleonSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchData(SEARCH + searchTerm);

      setsearchTerm("");
    }
  };

  const handleonChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleonSubmit}>
        <header>
          <input
            type="text"
            name="search"
            id="searcg"
            placeholder="search.."
            value={searchTerm}
            onChange={handleonChange}
          />
        </header>
      </form>
      <div className="app-container">
        {movieslst.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}

export default App;
