import React from 'react';

import Heading from './Heading';
import MovieList from './MovieList';
import Components from './styled/Components';

const { GlobalStyle } = Components;

const App = () => (
  <div>
    <GlobalStyle />
    <Heading />
    <MovieList />
  </div>
);


export default App;
