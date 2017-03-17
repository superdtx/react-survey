import React from 'react';
import styled from 'styled-components';
import './Survey.css';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';
import Question from '../Elements/Question';

const SurveyButton = styled(Button)`
  background: ${props => props.disabled ? 'black' : 'rgba(255,255,255,0.2)'};
  color: ${props => props.disabled ? '#bbb' : 'white'};
  &:hover {
    background: ${props => props.disabled ? 'black' : 'white'};
    color: ${props => props.disabled ? '#bbb' : 'black'};
  }
`;

const Survey = ({ question, options, currActive, id, nextSurvey, prevSurvey, activeOption }) => (
  (currActive === id)
  ? <Wrapper>
    <Question>{question}</Question>
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
