import React from 'react';
import styled from 'styled-components';
import './Survey.css';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';
import Question from '../Elements/Question';

/* eslint-disable no-confusing-arrow */
const SurveyButton = styled(Button)`
  background: ${props => props.disabled ? 'black' : 'rgba(255,255,255,0.2)'};
  color: ${props => props.disabled ? '#bbb' : 'white'};
  &:hover {
    background: ${props => props.disabled ? 'black' : 'white'};
    color: ${props => props.disabled ? '#bbb' : 'black'};
  }
`;
/* eslint-enable */

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
          /* eslint-disable react/jsx-no-bind */
          onClick={nextSurvey.bind(null, index, id)}
          /* eslint-enable */
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

Survey.propTypes = {
  question: React.PropTypes.string.isRequired,
  options: React.PropTypes.objectOf(
    React.PropTypes.string.isRequired,
  ).isRequired,
  currActive: React.PropTypes.number.isRequired,
  id: React.PropTypes.number.isRequired,
  nextSurvey: React.PropTypes.func.isRequired,
  prevSurvey: React.PropTypes.func.isRequired,
  activeOption: React.PropTypes.number,
};

Survey.defaultProps = {
  activeOption: -1,
};

export default Survey;
