import { ImagePokemon } from "../../components/ImagePokemon";
import { Keyboard } from "../../components/Keyboard";
import { Lives } from "../../components/Lives";
import { NamePokemon } from "../../components/NamePokemon";

import "./style.scss";

export function Game() {
  return (
    <main className="game-main">
      <div className="game-image-pokemon">
        <ImagePokemon />
      </div>
      <div className="game-name-pokemon">
        <NamePokemon />
        <Lives number="1" />
        <Keyboard />
      </div>
    </main>
  );
}
