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
