import { connect } from 'react-redux';
import MovieList from '../MovieList';

const getVisibleMovies = (movies = [], query) => (
  movies.filter(movie => movie.title.includes(query))
);

const mapStateToProps = state => ({
  movies: getVisibleMovies(state.movieList, state.searchQuery),
});

export default connect(
  mapStateToProps,
)(MovieList);
