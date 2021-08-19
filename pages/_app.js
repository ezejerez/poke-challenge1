import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeStyles } from '../themes';
import { getAllPokemon, getPokemon } from '../services/pokemon';
import Navbar from '../components/Navbar';
import PokemonTypeButtons from '../components/PokemonTypeButtons';
import PokemonCard from '../components/PokemonCard/index';
import PrevPage1 from '../public/img/PrevPage1.svg';
import NextPage1 from '../public/img/NextPage1.svg';
import GlobalStyles from '../globalStyles';

export default function App() {
  const pokemonTypeCardsIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setprevUrl] = useState('');
  const [pokeIndex, setPokeIndex] = useState(0);
  const [selectedPokemonType, setSelectedPokemonType] = useState('');
  const [theme, setTheme] = useState('light');

  const themeTogglerLight = () => {
    setTheme('light');
  };

  const themeTogglerDark = () => {
    setTheme('dark');
  };

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
    if (pokeIndex + 5 >= pokemonsToShow.length) {
      setPokeIndex(0);
    } else {
      setPokeIndex(pokeIndex + 5);
    }
  };

  const prev = () => {
    if (pokeIndex - 5 < 0) {
      setPokeIndex(pokemonsToShow.length - 5);
    } else {
      setPokeIndex(pokeIndex - 5);
    }
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

  function onTypeClick(typeClicked) {
    setSelectedPokemonType(typeClicked);
    setPokeIndex(0);
  }

  function getPokemonsToShow() {
    if (selectedPokemonType) {
      return pokemonData.filter((pokemon) =>
        pokemon.types.find((t) => t.type.name === selectedPokemonType),
      );
    } else {
      return pokemonData;
    }
  }

  const pokemonsToShow = getPokemonsToShow();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Navbar />

      <ContentContainer>
        <h1 className='title'>MEET THE POKEMONS:</h1>

        <div className='type_buttons_container'>
          <PokemonTypeButtons
            pokemonTypeCardsIds={pokemonTypeCardsIds}
            onTypeButtonClick={onTypeClick}
          />
        </div>

        <div className='cards_container'>
          <img src={PrevPage1} alt='prev1' onClick={prev} />
          <div className='cards'>
            {pokemonsToShow.slice(pokeIndex, pokeIndex + 5).map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
          <img src={NextPage1} alt='next1' onClick={next} />
        </div>
      </ContentContainer>
    </ThemeProvider>
  );
}

const ContentContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  width: 100%;
  height: 100%;

  .title {
    color: #000;
    font-size: 30px;
    text-align: center;

    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 411px) {
      font-size: 14px;
    }
  }

  .type_buttons_container {
    margin: auto;
    width: 90%;

    @media only screen and (max-width: 411px) {
      margin: auto;
      width: 100%;
    }
  }

  .cards_container {
    display: flex;

    .cards {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
    }

    > img {
      width: 5%;
      cursor: pointer;
      margin: auto;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 10px;

      .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    }
  }
`;
