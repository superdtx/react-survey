import React from 'react';
import styled from 'styled-components';
import './Survey.css';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';
import Question from '../Elements/Question';

/* eslint-disable no-confusing-arrow */
const SurveyButton = styled(Button)`
  background: rgba(255,255,255,0.2);
  color: #bbb;
  &:hover {
    background: white;
    color: black;
  }
`;
const NavButton = styled(Button)`
  background: transparent;
  color: ${props => props.disabled ? '#ccc' : 'white'};
  border-bottom: ${props => props.disabled ? 'none' : '1px solid white'};
  text-transform: uppercase;
  font-size: 2vw;
  &:hover {
    color: ${props => props.disabled ? '#aaa' : 'white'};
  }
`;
/* eslint-enable */

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Survey = ({ question, options, currActive, id, nextSurvey, prevSurvey, activeOption }) => (
  (currActive === id)
  ? <Wrapper>
    <HorizontalWrapper>
      {
        currActive !== 0
          ? <NavButton onClick={prevSurvey}>prev</NavButton>
          : <NavButton onClick={prevSurvey} disabled>prev</NavButton>
      }
      <Question>{question}</Question>
      {
        activeOption > -1
        ? <NavButton onClick={nextSurvey}>next</NavButton>
        : <NavButton onClick={nextSurvey} disabled>next</NavButton>
      }
    </HorizontalWrapper>
    <div>
      {Object.keys(options).map((key, index) => (
        <SurveyButton
          key={key}
          className={(activeOption === index) ? 'active' : ''}
          /* eslint-disable react/jsx-no-bind */
          onClick={nextSurvey.bind(null, index, id)}
          /* eslint-enable */
        >{options[key]}</SurveyButton>
      ))}
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
