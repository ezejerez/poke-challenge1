import styled from 'styled-components';

export const PokemonTypeButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const PokemonTypeButton = styled.button`
  color: #fff;
  border: 1px solid grey;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  margin: 5px;

  text-align: center;
  text-transform: uppercase;
  font-size: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 411px) {
    font-size: 14px;
  }

  background-color: ${(props) => {
    if (props.pokemonTypeId === 1) {
      return '#bdbdaf';
    }

    if (props.pokemonTypeId === 2) {
      return '#bf5540';
    }

    if (props.pokemonTypeId === 3) {
      return '#62a5ff';
    }

    if (props.pokemonTypeId === 4) {
      return '#c05da6';
    }

    if (props.pokemonTypeId === 5) {
      return '#fbcf49';
    }

    if (props.pokemonTypeId === 6) {
      return '#d4bd6e';
    }

    if (props.pokemonTypeId === 7) {
      return '#bdd300';
    }

    if (props.pokemonTypeId === 8) {
      return '#7d76db';
    }

    if (props.pokemonTypeId === 9) {
      return '#c5c2dc';
    }

    if (props.pokemonTypeId === 10) {
      return '#ff5540';
    }

    if (props.pokemonTypeId === 11) {
      return '#00afff';
    }

    if (props.pokemonTypeId === 12) {
      return '#59d842';
    }

    if (props.pokemonTypeId === 13) {
      return '#ffe619';
    }

    if (props.pokemonTypeId === 14) {
      return '#ff64b9';
    }

    if (props.pokemonTypeId === 15) {
      return '#52f1ff';
    }

    if (props.pokemonTypeId === 16) {
      return '#9376ff';
    }

    if (props.pokemonTypeId === 17) {
      return '#9a6853';
    }

    if (props.pokemonTypeId === 18) {
      return '#ffaeff';
    }
  }};
`;
