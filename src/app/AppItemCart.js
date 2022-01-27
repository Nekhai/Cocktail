import React, { useState, useEffect } from "react";
import { useFetch } from "./App";
import { Image } from "../components/image";
import "./AppItemCart.scss";

export const AppItemCart = ({ id }) => {
  const [data, setData] = useState(null);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { fetchData } = useFetch(url);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  console.log(data);

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="app-item-cart">
      <Image path={data[0].strDrinkThumb} id={data[0].idDrink} />
      <div className="app-item-cart__title">{data[0].strDrink}</div>
    </div>
  );
};
