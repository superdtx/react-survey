import React from 'react';

const SurveySubmit = ({ actions: { prevSurvey } }) => (
  <div>
    <h1>do you want to submit?</h1>
    <button onClick={prevSurvey}>go back</button>
    <button>submit</button>
  </div>
);

export default SurveySubmit;
