import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MovieListItem from './MovieListItem';
import movieData from '../exampleData';

const MovieList = ({ movies, addMovies }) => {
  useEffect(() => {
    addMovies(movieData);
  }, []);
  const movieListItems = movies.map(movie => <MovieListItem key={movie.title} movie={movie} />);
  return (
    <div>
      {
        movieListItems.length
          ? movieListItems
          : 'No movies matching that name were found'
      }
    </div>
  );
};

MovieList.defaultProps = {
  movies: [],
  addMovies: () => {},
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf([
    PropTypes.objectOf({
      title: PropTypes.string,
    }),
  ]),
  addMovies: PropTypes.func,
};

export default MovieList;
