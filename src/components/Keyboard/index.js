import "./style.scss";

import IconRight from "../../assets/images/icon-right.svg";
import IconWrong from "../../assets/images/icon-wrong.svg";
import IconPokebola from "../../assets/images/icon-pokebola.png";

const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

const lettersSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

const lettersThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export function Keyboard({
  onClickLetter,
  onClickChances,
  chances,
  checkStatus,
}) {
  function letterStatus(letter) {
    // Função para retornar a imagem de certo ou errado
    switch (checkStatus(letter)) {
      case "right":
        return <img src={IconRight} alt="Letra correta" />;
      case "wrong":
        return <img src={IconWrong} alt="Letra errada" />;
      default:
        return null;
    }
  }

  return (
    <div className="keyboard-container">
      <div className="keyboard-button">
        {letters &&
          letters.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersSecondRow &&
          lettersSecondRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersThirdRow &&
          lettersThirdRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
        <button className="button-chances" onClick={onClickChances}>
          <img src={IconPokebola} alt="Chances" />
          <div className="chances">
            <p>{chances}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
