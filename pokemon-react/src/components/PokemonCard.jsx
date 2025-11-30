function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <img
        src={pokemon.img}
        alt={pokemon.nombre}
        className="card-image"
      />
      <h3 className="card-title">
        #{pokemon.numero} - {pokemon.nombre.toUpperCase()}
      </h3>

      <p className="card-text">Experiencia base: {pokemon.experiencia}</p>

      <div className="stats">
        <span>HP: {pokemon.hp}</span>
        <span>Ataque: {pokemon.ataque}</span>
        <span>Defensa: {pokemon.defensa}</span>
        <span>Especial: {pokemon.especial}</span>
      </div>
    </div>
  );
}

export default PokemonCard;
