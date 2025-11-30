import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const generationRanges = {
  gen1: { min: 1, max: 151 },
  gen2: { min: 152, max: 251 },
  gen3: { min: 252, max: 386 },
};

// Función para obtener 'count' IDs aleatorios sin repetir en un rango
function getRandomIds(min, max, count) {
  const ids = new Set();

  while (ids.size < count) {
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    ids.add(id);
  }

  return Array.from(ids);
}

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    throw new Error("Error al cargar Pokémon");
  }

  const data = await res.json();

  return {
    numero: data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    imgJuego: data.sprites.front_default,
    imgCvg: data.sprites.other?.dream_world?.front_default,
    nombre: data.name,
    experiencia: data.base_experience,
    hp: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    especial: data.stats[3].base_stat,
  };
}

function Generation({ genKey, title }) {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setCargando(true);
        setError(false);

        const range = generationRanges[genKey];
        const ids = getRandomIds(range.min, range.max, 10);

        // Creamos un array de promesas para 10 Pokémon
        const promises = ids.map((id) => fetchPokemon(id));

        const results = await Promise.all(promises);
        setPokemons(results);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setCargando(false);
      }
    }

    loadPokemons();
  }, [genKey]); // se vuelve a ejecutar si cambia la generación

  if (cargando) {
    return <p className="message">Cargando Pokémon...</p>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Ha habido un error al cargar los Pokémon.</p>
        <img src="/404.png" alt="Error" className="error-image" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="page-title">{title}</h2>
      <div className="cards-grid">
        {pokemons.map((p) => (
          <PokemonCard key={p.numero} pokemon={p} />
        ))}
      </div>
    </div>
  );
}

export default Generation;
