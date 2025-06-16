import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Avengers');

  const searchMovies = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>🎬 ZOOMOUT MOVIES</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>🔍</button>
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
