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
`;

export const StyledFrontCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;

  > img {
    width: 16em;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: auto;
  }

  > h1 {
    margin: auto;
    color: white;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
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
