import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
  height: 450px;
  width: 280px;
  border: 1px solid black;
  border-radius: 10px;
  background: #009ba2;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1366px) {
    height: 350px;
    width: 220px;
  }

  @media only screen and (max-width: 1280px) {
    height: 320px;
    width: 220px;
  }

  @media only screen and (max-width: 411px) {
    height: 200px;
    width: 110px;
  }
`;

export const StyledFrontCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;

  > img {
    width: 256px;
    background: #fff;
    border: 1px solid black;
    border-radius: 10px;
    margin: auto;
  }

  > h1 {
    margin: auto;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: 1366px) {
    > img {
      width: 200px;
    }
  }

  @media only screen and (max-width: 411px) {
    > img {
      width: 90px;
    }

    > h1 {
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const StyledBackCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;

  > h1 {
    margin: auto;
    color: white;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  .stats {
    color: white;
    text-align: left;

    display: flex;
    flex-direction: column;
    margin: 0px 10px 10px 10px;
  }

  @media only screen and (max-width: 1366px) {
    > h1 {
      font-size: 23px;
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 411px) {
    .stats {
      font-size: 8px;
    }

    > h1 {
      margin-top: 10px;
      font-size: 14px;
    }
  }

  .type {
    display: flex;
    justify-content: space-between;
    margin: auto;

    > div {
      text-transform: uppercase;
      color: white;
      font-size: 20px;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
      margin: 5px;
    }

    @media only screen and (max-width: 1366px) {
      > div {
        font-size: 16px;
        margin: 10px;
      }
    }

    @media only screen and (max-width: 411px) {
      > div {
        font-size: 10px;
        padding: 1px;
        margin: 2px;
      }
    }

    > div.normal {
      background: #bdbdaf;
    }

    > div.fighting {
      background: #bf5540;
    }

    > div.flying {
      background: #62a5ff;
    }

    > div.poison {
      background: #c05da6;
    }

    > div.ground {
      background: #fbcf49;
    }

    > div.rock {
      background: #d4bd6e;
    }

    > div.bug {
      background: #bdd300;
    }

    > div.ghost {
      background: #7d76db;
    }

    > div.steel {
      background: #c5c2dc;
    }

    > div.fire {
      background: #ff5540;
    }

    > div.water {
      background: #00afff;
    }

    > div.grass {
      background: #59d842;
    }

    > div.electric {
      background: #ffe619;
    }

    > div.psychic {
      background: #ff64b9;
    }

    > div.ice {
      background: #52f1ff;
    }

    > div.dragon {
      background: #9376ff;
    }

    > div.dark {
      background: #9a6853;
    }

    > div.fairy {
      background: #ffaeff;
    }
  }
`;
