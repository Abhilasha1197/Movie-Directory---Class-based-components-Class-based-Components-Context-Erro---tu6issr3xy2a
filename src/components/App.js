import React from "react";
import "../styles/App.css";
import Movie from "./Movie";
import MovieProvider from "./MovieContext";
import MoviesList from "./MoviesList";

const App = () => {
  return (
    <MovieProvider>
      <div id="main">
        <h1>Movie List</h1>
        <MoviesList />
        <Movie />
      </div>
    </MovieProvider>
  );
};

export default App;
