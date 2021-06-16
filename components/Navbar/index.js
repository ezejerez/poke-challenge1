import React from 'react';
import Logo from '../../img/PokeChallengeLogo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarButtonsContainer,
  NavbarButton,
} from './NavbarStyles';

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarButtonsContainer>
          <NavbarButton>SPANISH</NavbarButton>
          <NavbarButton>ENGLISH</NavbarButton>
        </NavbarButtonsContainer>

        <NavLogo img src={Logo} alt='Logo' />

        <NavbarButtonsContainer>
          <NavbarButton>ORIGINAL</NavbarButton>
          <NavbarButton>DARK THEME</NavbarButton>
        </NavbarButtonsContainer>
      </NavbarContainer>
    </Nav>
  );
}
