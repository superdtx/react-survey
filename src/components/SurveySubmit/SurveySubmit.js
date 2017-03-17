import React from 'react';
import Button from '../Elements/Button';
import Wrapper from '../Elements/Wrapper';

const SurveySubmit = ({ actions: { prevSurvey } }) => (
  <Wrapper>
    <h1>do you want to submit?</h1>
    <Button onClick={prevSurvey}>go back</Button>
    <Button>submit</Button>
  </Wrapper>
);

export default SurveySubmit;
