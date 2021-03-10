import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return <StyledNavbar />;
}

const StyledNavbar = styled.div`
  height: 110px;
  width: 100%;
  background-color: #ee0000;
  color: #ffdf00;

  display: flex;
  justify-content: space-between;

  > div {
    margin: 40px 0px;
    padding-left: 0.5%;
    padding-right: 0.5%;
  }

  > img {
    width: 333.3333333333px;
    height: 75px;
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
    justify-content: center;
  }
`;
