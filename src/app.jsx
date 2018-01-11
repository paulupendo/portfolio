import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
  color: darkslategray;
  margin: 10px;
  border: 2px solid coral;
  font-size: 1em;
  font-family: 'Lato', sans-serif;
  background-color: transparent;
  border-radius: 3px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    color: darkred;
  }

  @media (max-width: 412px) {
    color: tomato;
    border-color: tomato;
  }
`;

const App = () => <Button>Upload Resumè</Button>;

render(<App />, document.getElementById('root'));
