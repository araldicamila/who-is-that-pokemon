import "./style.scss";

export function ImagePokemon() {
  return (
    <div className="shadow-pokemon">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg`}
        alt="Pokémon"
      />
    </div>
  );
}
