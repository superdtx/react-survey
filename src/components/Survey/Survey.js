import React from 'react';
import './Survey.css';

const Survey = ({ question, options, currActive, id, nextSurvey, prevSurvey, activeOption }) => (
  (currActive === id)
  ? <div>
    <div>{question}</div>
    <button
      onClick={prevSurvey}
    >prev</button>
    {Object.keys(options).map((key, index) => (
      <button
        key={index}
        className={(activeOption === index) ? 'active' : ''}
        onClick={nextSurvey.bind(null, index, id)}
      >{options[key]}</button>
    ))}
  </div>
  : null
);

export default Survey;
