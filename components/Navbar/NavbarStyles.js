import styled from 'styled-components';

// export const StyledNavbar = styled.div`
//   height: 110px;
//   width: 100%;
//   background-color: #ee0000;
//   color: #ffdf00;

//   display: flex;
//   justify-content: space-between;

//   > div {
//     margin: 40px 0px;
//     padding-left: 0.5%;
//     padding-right: 0.5%;
//   }

//   > img {
//     width: 333.3333333333px;
//     height: 75px;
//     margin-top: 1%;
//     margin-bottom: 1%;
//     display: flex;
//     justify-content: center;
//   }
// `;

export const Nav = styled.div`
  background: #ee0000;
  color: #ffdf00;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100vw;
  padding: 0 24px;
  max-width: 1850px;
`;

export const NavLogo = styled.img`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavbarButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavbarButton = styled.button`
  display: flex;
  align-items: center;
  height: 60%;
  cursor: pointer;
  background: #ee0000;
  color: yellow;
  border: none;

  font-size: 1.3rem;
  text-align: center;

  &.active {
    border-bottom: 3px solid yellow;
  }
`;

// fixear la tipografia de manera global, por qué el container tiene 100% y no llega hasta el borde?, al hacer el componente responsive no se ve bien en pantallas mas chicas (le falta llenar el width) fixear el active de los botones
