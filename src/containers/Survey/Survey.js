/*
 * use container components to connect stateless components with redux
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prevSurvey, nextSurvey, submitSurvey } from '../../redux/modules/surveys';
import SurveyLists from '../../components/SurveyLists/SurveyLists';
import SurveySubmit from '../../components/SurveySubmit/SurveySubmit';

function mapStateToProps(state) {
  return { surveys: state.surveys };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ prevSurvey, nextSurvey, submitSurvey }, dispatch) };
}

const Survey = props => (
  <div>
    {
      props.surveys.currActive === props.surveys.mockSurveys.length
      ? <SurveySubmit {...props} />
      : <SurveyLists {...props} />
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
