import React from 'react';
import Survey from '../Survey/Survey';

const SurveyLists = ({ surveys, actions }) => (
  <div>
    {surveys.mockSurveys.map((survey, index) => (
      <Survey
        key={survey.id}
        id={index}
        question={survey.text}
        options={survey.options}
        activeOption={survey.activeOption}
        currActive={surveys.currActive}
        prevSurvey={actions.prevSurvey}
        nextSurvey={actions.nextSurvey}
      />
    ))}
  </div>
);

SurveyLists.propTypes = {
  surveys: React.PropTypes.objectOf(
    React.PropTypes.any.isRequired,
  ).isRequired,
  actions: React.PropTypes.objectOf(
    React.PropTypes.func.isRequired,
  ).isRequired,
};

export default SurveyLists;
