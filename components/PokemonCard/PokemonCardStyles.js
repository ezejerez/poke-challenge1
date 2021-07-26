import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
  height: 450px;
  width: 280px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #009ba2;
  cursor: pointer;
`;

export const StyledFrontCard = styled.div`
  > img {
    display: flex;
    height: 260px;
    background-color: white;
    border: 1px solid grey;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  > div {
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 60px;
    font-size: 40px;
    text-transform: uppercase;
  }
`;

export const StyledBackCard = styled.div`
  > div {
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 30px;
    font-size: 30px;
    text-transform: uppercase;
  }

  .stats {
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 25%;
    margin-left: 5%;
    font-size: 110%;
  }
`;

export const StyledType = styled.div`
  > div {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 1%;
    font-size: 70%;
    border: 1px solid grey;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 1%;
  }

  > div.normal {
    background-color: #bdbdaf;
  }

  > div.fighting {
    background-color: #bf5540;
  }

  > div.flying {
    background-color: #62a5ff;
  }

  > div.poison {
    background-color: #c05da6;
  }

  > div.ground {
    background-color: #fbcf49;
  }

  > div.rock {
    background-color: #d4bd6e;
  }

  > div.bug {
    background-color: #bdd300;
  }

  > div.ghost {
    background-color: #7d76db;
  }

  > div.steel {
    background-color: #c5c2dc;
  }

  > div.fire {
    background-color: #ff5540;
  }

  > div.water {
    background-color: #00afff;
  }

  > div.grass {
    background-color: #59d842;
  }

  > div.electric {
    background-color: #ffe619;
  }

  > div.psychic {
    background-color: #ff64b9;
  }

  > div.ice {
    background-color: #52f1ff;
  }

  > div.dragon {
    background-color: #9376ff;
  }

  > div.dark {
    background-color: #9a6853;
  }

  > div.fairy {
    background-color: #ffaeff;
  }
`;
