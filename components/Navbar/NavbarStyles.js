import styled from 'styled-components';

export const Nav = styled.div`
  background: #ee0000;
  color: #ffdf00;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  margin: 24px;

  @media only screen and (max-width: 411px) {
    margin: 5px;

    > img {
      height: 55%;
      width: 55%;
      margin: auto;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #ee0000;
    color: #ffff00;
    border: none;

    font-size: 20px;
    text-align: center;

    :active {
      border-bottom: 1px solid #ffff00;
      border-right: 1px solid #ffff00;
    }
  }

  @media only screen and (max-width: 411px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-shrink: 0;

    > button {
      font-size: 15px;
  }
`;
