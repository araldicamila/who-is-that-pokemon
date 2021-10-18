import { Modal } from "../Modal";
import "./style.scss";

import IconQuestion from "../../assets/images/icon-question.png";

export function ModalError({ open, onClickTryAgain, onClickClose }) {
  return (
    <Modal open={open} onClickClose={onClickClose}>
      <img src={IconQuestion} alt="Ícone do jogo" />
      <h1>O jogo acabou</h1>
      <button onClick={onClickTryAgain} className="button-try-again">
        Tentar novamente
      </button>
    </Modal>
  );
}
