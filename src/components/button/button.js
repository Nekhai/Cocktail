import React, { useContext } from "react";
import { ShoppingCart } from "../../app/App";
import "./button.scss";

export const Button = ({ id, name }) => {
  const [cart, setCart] = useContext(ShoppingCart);
  const addToCart = (itemId) => {
    setCart((prev) => [...prev, itemId]);
  };

  return (
    <button className="button" onClick={() => addToCart(id)}>
      Add to cart
    </button>
  );
};
