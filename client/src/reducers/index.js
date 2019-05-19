import { combineReducers } from 'redux';

const movieList = (movies = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [
        ...movies,
        ...action.movies,
      ];
    default:
      return movies;
  }
};

const searchQuery = (query = '', action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return action.query;
    default:
      return query;
  }
};

export default combineReducers({
  movieList,
  searchQuery,
});
