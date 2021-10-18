import { Modal } from "../Modal";

import IconPokebola from "../../assets/images/icon-pokebola.png";

export function ModalSuccess({ open, onClickClose }) {
  return (
    <Modal open={open} onClickClose={onClickClose}>
      <img src={IconPokebola} alt="Pokébola" />
      <h1>Parabéns você ganhou uma pokébola</h1>
      <p>Pokébolas desbloqueiam uma letra correta.</p>
    </Modal>
  );
}
