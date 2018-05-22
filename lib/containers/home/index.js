import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {
    // user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // someAction: actionCreator
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Benefits);
