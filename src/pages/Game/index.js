import { ImagePokemon } from "../../components/ImagePokemon";
import { Keyboard } from "../../components/Keyboard";
import { Lives } from "../../components/Lives";
import { NamePokemon } from "../../components/NamePokemon";

import IconQuestion from "../../assets/images/icon-question.png";

import "./style.scss";
import { ModalSuccess } from "../../components/ModalSuccess";
import { ModalError } from "../../components/ModalError";

export function Game() {
  return (
    <main className="game-main">
      <div className="game-image-pokemon">
        <header>
          <img src={IconQuestion} alt="ícone de interrogação" />
        </header>

        <ImagePokemon />
      </div>
      <div className="game-name-pokemon">
        <NamePokemon />
        <Lives number="1" />
        <Keyboard />
      </div>
      <ModalSuccess />
      <ModalError />
    </main>
  );
}
