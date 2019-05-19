import React, { useState, useEffect } from 'react';

import Heading from './Heading';
import Components from './styled/Components';
import movieData from '../exampleData';

const { GlobalStyle } = Components;

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(movies.concat(movieData));
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Heading />
    </div>
  );
};

export default App;
