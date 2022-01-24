import React from "react";
import { Link } from "react-router-dom";

export const Image = ({ path, id }) => {
  return (
    <Link to={`/cocktail/${id}`}>
      <img src={path} alt="cocktail" />
    </Link>
  );
};
