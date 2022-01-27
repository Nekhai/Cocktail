import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { ShoppingCart } from "../../app/App";
import { AppItemCart } from "../../app/AppItemCart";

export const Modal = ({ isOpen, close }) => {
  const [cart, setCart] = useContext(ShoppingCart);
  const confirm = () => {
    cart.map((item) => console.log(item.name));
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className="modal">
        <div></div>
        <button className="modal__close" onClick={close}>
          X
        </button>
        {cart.map((item, index) => (
          <AppItemCart key={item.id + index} id={item.id} />
        ))}
        <button className="modal__confirm" onClick={() => confirm()}>
          Confirm
        </button>
      </div>,
      document.getElementById("modal")
    )
  );
};
