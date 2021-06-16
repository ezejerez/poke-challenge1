import React, { useEffect, useState } from 'react';
import {
  PokemonTypeButtonsContainer,
  PokemonTypeButton,
} from './PokemonTypeButtonsStyles';
import axios from 'axios';

export default function PokemonTypeButtons({ pokemonTypeId }) {
  const [pokemonType, setPokemonType] = useState('');

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type/${pokemonTypeId}/`;

    axios.get(url).then((result) => {
      setPokemonType(result.data.name);
    });
  }, []);

  return (
    <PokemonTypeButtonsContainer>
      {pokemonTypeCardsIds.map((pokemonTypeId, i) => (
        <PokemonTypeButton
          key={i}
          pokemonTypeId={pokemonTypeId}
          {...pokemonType.toUpperCase()}></PokemonTypeButton>
      ))}
    </PokemonTypeButtonsContainer>
  );
}
