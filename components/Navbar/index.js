import React from 'react';
import Logo from '../../public/img/PokeChallengeLogo.png';
import { Nav, NavbarContainer, ButtonsContainer } from './NavbarStyles';

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <ButtonsContainer>
          <button>SPANISH</button>
          <button>ENGLISH</button>
        </ButtonsContainer>

        <img src={Logo} alt='Logo' />

        <ButtonsContainer>
          <button>ORIGINAL</button>
          <button>DARK THEME</button>
        </ButtonsContainer>
      </NavbarContainer>
    </Nav>
  );
}
