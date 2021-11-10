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
    <div className="pokemon-type-buttons-wrapper">
      {Object.keys(pokemonTypeNames).map((ptcId) => {
        const typeName = pokemonTypeNames[ptcId];

        return (
          <button
            className={`pokemon-type-button ${typeName}`}
            key={typeName}
            onClick={() => {
              onTypeButtonClick(typeName);
            }}
          >
            {typeName}
          </button>
        );
      })}
    </div>
  );
}
