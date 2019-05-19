import React, { useState, useEffect } from 'react';

import MovieListItem from './MovieListItem';
import movieData from '../exampleData';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(movies.concat(movieData));
  }, []);
  return (
    <div>
      {movies.map(movie => <MovieListItem key={movie.title} movie={movie} />)}
    </div>
  );
};

export default MovieList;
