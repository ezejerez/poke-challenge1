import React from 'react';
import styled from 'styled-components';

export default function NavbarButton(props) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button`
  background-color: #ee0000;
  color: yellow;
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;

  text-align: center;
  font-family: Pixellari;
  font-size: 22px;
`;
