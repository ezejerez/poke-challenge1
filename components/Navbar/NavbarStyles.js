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
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
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
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1850px;
  background-color: blue;
`;

export const NavLogo = styled.img`
  display: flex;
  align-items: center;
  height: 100%;
  background: #000;
`;

export const NavbarButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  background: #ee0000;
  color: yellow;
  border: none;

  text-align: center;
  font-family: Pixellari;
  font-size: 22px;

  &.active {
    border: 3px solid #01bf71;
  }
`;
