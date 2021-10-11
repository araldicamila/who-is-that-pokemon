import "./style.scss";

export function NamePokemon() {
  return (
    <div className="name-letter-container">
      <input value="A" disabled className="is-empty" />
      <input value="A" disabled />
      <input value="A" disabled />
      <input value="A" disabled />
    </div>
  );
}
