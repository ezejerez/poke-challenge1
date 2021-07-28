import React, { useEffect, useState } from 'react';
import {
  PokemonTypeButtonsContainer,
  PokemonTypeButton,
} from './PokemonTypeButtonsStyles';
import axios from 'axios';

export default function PokemonTypeButtons({
  pokemonTypeCardsIds,
  onTypeButtonClick,
}) {
  const [pokemonTypeNames, setPokemonTypeNames] = useState({});

  useEffect(() => {
    pokemonTypeCardsIds.forEach((ptcId) => {
      const url = `https://pokeapi.co/api/v2/type/${ptcId}/`;
      axios.get(url).then((result) => {
        pokemonTypeNames[ptcId] = result.data.name;
        setPokemonTypeNames({ ...pokemonTypeNames });
      });
    });
  }, []);

  return (
    <PokemonTypeButtonsContainer pokemonTypeCardsIds={pokemonTypeCardsIds}>
      {pokemonTypeCardsIds.map((ptcId, k) => (
        <PokemonTypeButton
          key={k}
          pokemonTypeId={ptcId}
          onClick={() => {
            onTypeButtonClick(pokemonTypeNames[ptcId]);
          }}>
          {pokemonTypeNames[ptcId]}
        </PokemonTypeButton>
      ))}
    </PokemonTypeButtonsContainer>
  );
}
