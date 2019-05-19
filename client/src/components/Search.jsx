/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const SearchDisplay = ({ query, updateQuery }) => (
  <div>
    <label>
        Search Movies:
      <input
        type="text"
        id="search"
        value={query}
        onChange={e => updateQuery(e.target.value)}
      />
    </label>
  </div>
);

SearchDisplay.defaultProps = {
  query: '',
  updateQuery: () => {},
};

SearchDisplay.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
};

export default SearchDisplay;
