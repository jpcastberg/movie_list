import { connect } from 'react-redux';
import Search from '../Search';
import { updateQuery } from '../../actions';

const mapStateToProps = state => ({
  query: state.searchQuery,
});

const mapDispatchToProps = dispatch => ({
  updateQuery: query => dispatch(updateQuery(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
