import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 25px;
  margin: 5px;
  outline: none;
  border-radius: 10px;
  color: white;
  background: rgba(255,255,255,0.5);
  font-size: 3vw;
  font-family: 'Cormorant Garamond';
  transition: .5s background ease-in-out;

  &:hover {
    cursor: pointer;
    background: rgba(0,0,0,0);
    transition: .5s all ease-in-out;
  }
`;

export default Button;
