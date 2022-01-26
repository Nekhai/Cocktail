import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../app/App";
import "./Cocktail.scss";
import { AppItem } from "../../app/AppItem";
import { Image } from "../../components/image";
import { Button } from "../../components/button/button";

export const Cocktail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { fetchData } = useFetch(url);

  const searchProp = (string) => {
    if (!data) return;

    let arr = [];

    for (let key in data[0]) {
      if (key.includes(string)) {
        if (data[0][key] !== null) {
          arr.push(data[0][key]);
        }
      }
    }
    return arr;
  };

  const ingredientName = searchProp("strIngredient");
  const ingredientAmount = searchProp("strMeasure");

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  console.log(data);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="cocktail">
      <div className="cocktail__card">
        <AppItem
          className={"cocktail__item"}
          title={data[0].strDrink}
          img={
            <Image
              path={data[0].strDrinkThumb}
              id={data[0].idDrink}
              className="cocktail__img"
            />
          }
          btn={<Button id={data[0].idDrink} />}
        />
      </div>
      <div className="cocktail__description">
        <div className="cocktail__instruction">
          <h4>Ingredients:</h4>
          <div className="cocktail__ingredients ingredients">
            <div className="ingredients__name">
              {ingredientName.map((item, index) => (
                <p key={item + index}>{item || ""}</p>
              ))}
            </div>
            <div>
              {ingredientAmount.map((item, index) => (
                <p key={item + index}>{item || ""}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="cocktail__instruction">
          <h4>Glass:</h4>
          <p>{data[0].strGlass}</p>
        </div>
        <div className="cocktail__instruction">
          <h4>Instruction:</h4>
          <p>{data[0].strInstructions}</p>
        </div>
      </div>
    </div>
  );
};
