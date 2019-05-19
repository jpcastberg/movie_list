import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieListItem = (props) => {
  const { className, movie } = props;
  const { title } = movie;
  return (
    <div className={className}>
      {title}
    </div>
  );
};

MovieListItem.defaultProps = {
  className: '',
  movie: {
    title: '',
  },
};

MovieListItem.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
};

const StyledMovieListItem = styled(MovieListItem)`
  background-color: #ECECEC;
  color: #9F482E;
  border: solid;
  border-width: thin;
  border-color: #383838;
  margin: 10px;
  width: 10%;
`;

export default StyledMovieListItem;
