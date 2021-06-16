import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getAllPokemon, getPokemon } from '../services/pokemon';
import PrevPage1 from '../img/PrevPage1.svg';
import PokemonCard from '../components/PokemonCard';
import NextPage1 from '../img/NextPage1.svg';
import Navbar from '../components/Navbar/index';
import PokemonTypeButtons from '../components/PokemonTypeButtons/index';
import { lightTheme, darkTheme, GlobalStyles } from '../themes';

export default function App() {
  const pokemonTypeCardsIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const pokemonTypeId = 1;

  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemonTypes, setSelectedPokemonTypes] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setprevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  const themeTogglerLight = () => {
    setTheme('light');
  };

  const themeTogglerDark = () => {
    setTheme('dark');
  };

  const initialUrl = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setprevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setprevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setprevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );

    setPokemonData(_pokemonData);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Navbar />

      <StyledMeetThePokemons>MEET THE POKÉMONS:</StyledMeetThePokemons>

      <PokemonTypeButtons pokemonTypeCardsIds={pokemonTypeCardsIds} />

      <StyledCardsContainer>
        <img src={PrevPage1} alt='prev1' onClick={prev} />

        {pokemonData.slice(0, 5).map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} />
        ))}

        <img src={NextPage1} alt='next1' onClick={next} />
      </StyledCardsContainer>
    </ThemeProvider>
  );
}

const StyledMeetThePokemons = styled.h1`
  color: black;
  margin-top: 2%;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;

  font-size: 30px;
  text-align: center;
`;

const StyledCardsContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 2%;

  display: flex;
  justify-content: space-around;

  > img {
    width: 5%;
    height: 5%;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
  }
`;
