import { connect } from 'react-redux';

import { addMovies } from '../../actions';
import MovieList from '../MovieList';

const getVisibleMovies = (movies = [], query) => (
  movies.filter(movie => (movie.title
    .toLowerCase()
    .includes(
      query.toLowerCase(),
    )))
);

const mapStateToProps = state => ({
  movies: getVisibleMovies(state.movieList, state.searchQuery),
});

const mapDispatchToProps = dispatch => ({
  addMovies: newMovies => dispatch(addMovies(newMovies)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
