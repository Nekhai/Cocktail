import React from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.scss";
import { alphabet } from "./alphabet";

export const Footer = () => {
  const navigation = useNavigate();

  const searchLink = (letter) => {
    navigation({
      pathname: "cocktails-list",
      search: `?f=${letter}`,
    });
  };

  return (
    <div className="footer">
      <h2 className="footer__title">Browse By Name</h2>
      <div className="footer__alfabet">
        {alphabet.map((item) => (
          <div key={item} className="footer__link">
            <button onClick={() => searchLink(item)}>{item}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
