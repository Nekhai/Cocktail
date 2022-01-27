import React, { useContext } from "react";
import { ShoppingCart } from "../../app/App";
import "./button.scss";

export const Button = ({ id, name }) => {
  const [cart, setCart] = useContext(ShoppingCart);
  const addToCart = (itemId, itemName) => {
    setCart((prev) => [...prev, { id: itemId, name: itemName }]);
    console.log(cart);
  };

  return (
    <button className="button" onClick={() => addToCart(id, name)}>
      Add to Cart
    </button>
  );
};
