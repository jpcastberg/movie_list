import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Heading from './components/Heading';
import { GlobalStyle } from './components/styled/Components';
import MovieList from './components/containers/MovieList';
import Search from './components/containers/Search';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <GlobalStyle />
    <Heading />
    <Search />
    <MovieList />
  </Provider>,
  document.getElementById('app'),
);
