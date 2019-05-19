import React from 'react';

import Heading from './Heading';
import Components from './styled/Components';
import VisibleMovieList from './containers/VisibleMovieList';
import Search from './containers/SearchContainer';

const { GlobalStyle } = Components;

const App = () => (
  <div>
    <GlobalStyle />
    <Heading />
    <Search />
    <VisibleMovieList />
  </div>
);


export default App;
