/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ query, updateQuery }) => (
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

Search.defaultProps = {
  query: '',
  updateQuery: () => {},
};

Search.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
};

export default Search;
