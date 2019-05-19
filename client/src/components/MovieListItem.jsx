import React from 'react';
import PropTypes from 'prop-types';

import Components from './styled/Components';

const { StyledMovieListItem } = Components;

const MovieListItem = (props) => {
  const { movie } = props;
  const { title } = movie;
  return (
    <StyledMovieListItem>
      {title}
    </StyledMovieListItem>
  );
};

MovieListItem.defaultProps = {
  movie: {
    title: '',
  },
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default MovieListItem;
