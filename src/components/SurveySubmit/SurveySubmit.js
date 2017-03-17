import React from 'react';
import styled from 'styled-components';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';
import Question from '../Elements/Question';

const SubmitButton = styled(Button)`
  background: rgba(255,255,255,0.2);
  color: white;
  &:hover {
    background: white;
    color: black;
  }
`;

const SurveySubmit = ({ actions: { prevSurvey, submitSurvey } }) => (
  <Wrapper>
    <Question>do you want to submit?</Question>
    <SubmitButton onClick={prevSurvey}>go back</SubmitButton>
    <SubmitButton onClick={submitSurvey}>submit</SubmitButton>
  </Wrapper>
);

SurveySubmit.propTypes = {
  actions: React.PropTypes.objectOf(
    React.PropTypes.func.isRequired,
  ).isRequired,
};

export default SurveySubmit;
