import React, { useEffect, useState } from "react";
import { useFetch } from "../../app/App";
import { AppItem } from "../../app/AppItem";
import { Image } from "../../components/image";
import { Button } from "../../components/button/button";
import "./Home.scss";

export const Home = () => {
  const [data, setData] = useState(null);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const { fetchData } = useFetch(url);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="home">
      <h3 className="home__title">
        Use the search or filter to select a cocktail
      </h3>
      <AppItem
        className={"home__item"}
        title={data[0].strDrink}
        img={
          <Image
            path={data[0].strDrinkThumb}
            id={data[0].idDrink}
            className="home__img"
          />
        }
        btn={<Button id={data[0].idDrink} />}
      />
      <p className="home__text">Personal recommendation</p>
    </div>
  );
};
