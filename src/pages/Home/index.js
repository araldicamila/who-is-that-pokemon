import "./style.scss";

import ImagePokemon from "../../assets/images/image-pokemon.png";
import ImageQuestion from "../../assets/images/icon-question.png";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();

  return (
    <main className="main-home">
      <h1>Quem é esse</h1>
      <img src={ImagePokemon} alt="Pokémon" />
      <img src={ImageQuestion} alt="Símbolo de interrogação" />
      <button onClick={() => history.push("/jogo")}>Começar</button>
    </main>
  );
}
