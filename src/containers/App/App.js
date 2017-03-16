/*
 * use container components to connect stateless components with redux
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prevSurvey, nextSurvey } from '../../redux/modules/surveys';
import SurveyLists from '../../components/SurveyLists/SurveyLists';

function mapStateToProps(state) {
  return { surveys: state.surveys };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ prevSurvey, nextSurvey }, dispatch) };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SurveyLists {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
