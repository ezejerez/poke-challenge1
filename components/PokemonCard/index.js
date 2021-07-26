import React, { useState } from 'react';
import {
  StyledPokemonCard,
  StyledBackCard,
  StyledFrontCard,
  StyledType,
} from './PokemonCardStyles';

export default function PokemonCard({ pokemon }) {
  const [clicked, setClicked] = useState(false);
  const abilitiesNames = pokemon.abilities.map((a) => a.ability.name);

  return (
    <StyledPokemonCard onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <StyledBackCard>
          <div>{pokemon.name}</div>

          <StyledType>
            {pokemon.types.map((a, k) => {
              return (
                <div className={a.type.name} key={k}>
                  {a.type.name}
                </div>
              );
            })}
          </StyledType>

          <div className='stats'>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
            <p>Abilities: {abilitiesNames.join(', ')}</p>
          </div>
        </StyledBackCard>
      ) : (
        <StyledFrontCard>
          <img src={pokemon.sprites.front_default} alt='img' />

          <div>{pokemon.name}</div>
        </StyledFrontCard>
      )}
    </StyledPokemonCard>
  );
}
