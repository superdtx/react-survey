import React from 'react';
import Survey from '../Survey/Survey';

const SurveyLists = ({ surveys, actions }) => (
  <div>
    {surveys.mockSurveys.map((survey, index) => (
      <Survey
        key={index}
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

export default SurveyLists;
