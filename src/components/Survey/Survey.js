import React from 'react';
import styled from 'styled-components';
import './Survey.css';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';

const SurveyButton = styled(Button)`
  background: black;
  color: ${props => props.disabled ? '#bbb' : 'white'};
  &:hover {
    background: ${props => props.disabled ? 'black' : 'Cornsilk'};
    color: ${props => props.disabled ? '#bbb' : 'black'};
  }
`;

const Survey = ({ question, options, currActive, id, nextSurvey, prevSurvey, activeOption }) => (
  (currActive === id)
  ? <Wrapper>
    <h1>{question}</h1>
    <div>
      {
        currActive !== 0
          ? <SurveyButton onClick={prevSurvey}>prev</SurveyButton>
          : <SurveyButton onClick={prevSurvey} disabled>prev</SurveyButton>
      }
      {Object.keys(options).map((key, index) => (
        <SurveyButton
          key={key}
          className={(activeOption === index) ? 'active' : ''}
          onClick={nextSurvey.bind(null, index, id)}
        >{options[key]}</SurveyButton>
      ))}
      {
        activeOption > -1
        ? <SurveyButton onClick={nextSurvey}>next</SurveyButton>
        : null
      }
    </div>
  </Wrapper>
  : null
);

export default Survey;
