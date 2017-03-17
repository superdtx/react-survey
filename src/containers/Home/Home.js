import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/Elements/Button';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('./background.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Wrapper>
    <Link to="/survey"><Button>Start Survey</Button></Link>
  </Wrapper>
);

export default Home;
