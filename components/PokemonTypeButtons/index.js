import React, { useEffect, useState } from "react";
import "./pokemonTypeButtons.css";
import axios from "axios";

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
    <div
      className="pokemon-type-buttons-wrapper"
      pokemonTypeCardsIds={pokemonTypeCardsIds}
    >
      {pokemonTypeCardsIds.map((ptcId, k) => (
        <button
          className="pokemon-type-button"
          key={k}
          pokemonTypeId={ptcId}
          onClick={() => {
            onTypeButtonClick(pokemonTypeNames[ptcId]);
          }}
        >
          {pokemonTypeNames[ptcId]}
        </button>
      ))}
    </div>
  );
}
