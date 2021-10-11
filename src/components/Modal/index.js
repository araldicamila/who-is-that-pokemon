import "./style.scss";

export function Modal({ children, open }) {
  return (
    <div className={`modal-background ${open ? "modal-open" : "modal-close"}`}>
      <div className="modal-container">
        <button className="modal-close">x</button>
        {children}
      </div>
    </div>
  );
}
