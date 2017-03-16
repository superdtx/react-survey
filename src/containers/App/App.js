/*
 * use container components to connect stateless components with redux
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prevSurvey, nextSurvey } from '../../redux/modules/surveys';
import SurveyLists from '../../components/SurveyLists/SurveyLists';
import SurveySubmit from '../../components/SurveySubmit/SurveySubmit';

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
        {
          this.props.surveys.currActive === this.props.surveys.mockSurveys.length
          ? <SurveySubmit {...this.props} />
          : <SurveyLists {...this.props} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
