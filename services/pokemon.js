import Axios from "axios";

export async function getAllPokemon() {
  return new Promise((resolve, reject) => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5000")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function login(email, password) {
  const url = "https://reqres.in/api/login";
  return Axios.post(url, { email, password });
}

export async function getEvolutionChain(pokemonId) {
  return Axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`);
}
