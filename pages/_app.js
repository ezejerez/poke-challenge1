import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllPokemon, getPokemon } from "../services/pokemon";
import Navbar from "../components/Navbar";
import PokemonTypeButtons from "../components/PokemonTypeButtons";
import PokemonCard from "../components/PokemonCard/index";
import PrevPage1 from "../public/img/PrevPage1.svg";
import NextPage1 from "../public/img/NextPage1.svg";
import GlobalStyles from "../globalStyles";
import "./App.css";
import Login from "../components/Login";

export default function App() {
  const pokemonTypeCardsIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setprevUrl] = useState("");
  const [pokeIndex, setPokeIndex] = useState(0);
  const [selectedPokemonType, setSelectedPokemonType] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon();
      setNextUrl(response.next);
      setprevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  const next = () => {
    if (pokeIndex + 20 >= pokemonsToShow.length) {
      setPokeIndex(0);
    } else {
      setPokeIndex(pokeIndex + 20);
    }
  };

  const prev = () => {
    if (pokeIndex - 20 < 0) {
      setPokeIndex(pokemonsToShow.length - 20);
    } else {
      setPokeIndex(pokeIndex - 20);
    }
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  function onTypeClick(typeClicked) {
    setSelectedPokemonType(typeClicked);
    setPokeIndex(0);
  }

  function getPokemonsToShow() {
    if (selectedPokemonType) {
      return pokemonData.filter((pokemon) =>
        pokemon.types.find((t) => t.type.name === selectedPokemonType)
      );
    } else {
      return pokemonData;
    }
  }

  const pokemonsToShow = getPokemonsToShow();

  function showCardsView() {
    setIsLogged(true);
  }

  return isLogged ? (
    <>
      <GlobalStyles />
      <Navbar />
      <div className="content-wrapper">
        <h1 className="title">MEET THE POKEMONS:</h1>

        <div className="type-buttons-wrapper">
          <PokemonTypeButtons
            pokemonTypeCardsIds={pokemonTypeCardsIds}
            onTypeButtonClick={onTypeClick}
          />
        </div>

        <div className="cards-wrapper">
          <img src={PrevPage1} alt="prev-button" onClick={prev} />
          <div className="cards">
            {pokemonsToShow.slice(pokeIndex, pokeIndex + 20).map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
          <img src={NextPage1} alt="next-button" onClick={next} />
        </div>
      </div>
    </>
  ) : (
    <>
      <GlobalStyles />
      <div className="content-wrapper">
        <Login showCardsView={showCardsView} />
      </div>
    </>
  );
}
