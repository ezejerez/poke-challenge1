import React from 'react';
import Logo from '../../img/PokeChallengeLogo.png';
import { Nav, NavbarContainer, NavLogo, NavbarButton } from './NavbarStyles';

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarButton>SPANISH</NavbarButton>
        <NavbarButton>ENGLISH</NavbarButton>

        <NavLogo img src={Logo} alt='Logo' />

        <NavbarButton>ORIGINAL</NavbarButton>
        <NavbarButton>DARK THEME</NavbarButton>
      </NavbarContainer>
    </Nav>
  );
}
