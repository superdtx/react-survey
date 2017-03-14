/*
 * use container components to connect stateless components with redux
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { /* actions */ } from '../../redux/modules/foo';
import Foo from '../../components/Foo/Foo';

function mapStateToProps(state) {
  return { properties: state.properties };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({}, dispatch) };
}

class App extends React.Component {
  render() {
    return (
      <div>
        hello
        <Foo />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
