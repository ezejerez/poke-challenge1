import React, { useState } from 'react';
import styled from 'styled-components';

export default function PokemonCard({ pokemon }) {
  const [clicked, setClicked] = useState(false);
  const abilitiesNames = pokemon.abilities.map((a) => a.ability.name);

  return (
    <StyledPokemonCard onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <StyledBackCard>
          <div>{pokemon.name.toUpperCase()}</div>

          <StyledType>
            {pokemon.types.map((a) => {
              return (
                <div className={a.type.name}>{a.type.name.toUpperCase()}</div>
              );
            })}
          </StyledType>

          <StyledStats>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
            <p>Abilities: {abilitiesNames.join(', ')}</p>
          </StyledStats>
        </StyledBackCard>
      ) : (
        <StyledFrontCard>
          <img src={pokemon.sprites.front_default} alt='img' />

          <div>{pokemon.name.toUpperCase()}</div>
        </StyledFrontCard>
      )}
    </StyledPokemonCard>
  );
}

const StyledPokemonCard = styled.div`
  height: 450px;
  width: 280px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #009ba2;
  cursor: pointer;
`;

const StyledFrontCard = styled.div`
  > img {
    height: 260px;
    background-color: white;
    border: 1px solid grey;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;

    display: flex;
  }

  > div {
    color: white;
    margin-top: 60px;
    font-size: 40px;

    display: flex;
    justify-content: center;
  }
`;

const StyledBackCard = styled.div`
  > div {
    color: white;
    margin-top: 30px;
    font-size: 30px;

    display: flex;
    justify-content: center;
  }
`;

const StyledStats = styled.p`
  color: white;
  margin-top: 25%;
  margin-left: 5%;
  font-size: 110%;

  display: flex;
  flex-direction: column;
`;

const StyledType = styled.div`
  > div {
    display: flex;
    justify-content: center;

    .normal {
      background-color: #bdbdaf;
    }

    .fighting {
      background-color: #bf5540;
    }

    .flying {
      background-color: #62a5ff;
    }

    .poison {
      background-color: #c05da6;
    }

    .ground {
      background-color: #fbcf49;
    }

    .rock {
      background-color: #d4bd6e;
    }

    .bug {
      background-color: #bdd300;
    }

    .ghost {
      background-color: #7d76db;
    }

    .steel {
      background-color: #c5c2dc;
    }

    .fire {
      background-color: #ff5540;
    }

    .water {
      background-color: #00afff;
    }

    .grass {
      background-color: #59d842;
    }

    .electric {
      background-color: #ffe619;
    }

    .psychic {
      background-color: #ff64b9;
    }

    .ice {
      background-color: #52f1ff;
    }

    .dragon {
      background-color: #9376ff;
    }

    .dark {
      background-color: #9a6853;
    }

    .fairy {
      background-color: #ffaeff;
    }

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
`;

// useEffect(() => {
//   const url = `https://pokeapi.co/api/v2/pokemon`;

//   axios.get(url).then((result) => {
//     setPokemonName(result.data.name);
//     setPokemonImg(result.data.sprites.front_default);
//   });
// }, []);
