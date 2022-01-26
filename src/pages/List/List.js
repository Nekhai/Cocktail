import React, { useEffect, useState } from "react";
import "./List.scss";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../app/App";
import { AppItem } from "../../app/AppItem";
import { Image } from "../../components/image";

export const List = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php${location.search}`;
  const { fetchData } = useFetch(url);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  if (!data) {
    return (
      <div className="list__no-result">
        Sorry, we couldn't find cocktails for your search
      </div>
    );
  }

  return (
    <div className="list">
      {data.map((item) => (
        <AppItem
          key={item.id}
          className={"list__item"}
          title={item.strDrink}
          img={
            <Image
              path={item.strDrinkThumb}
              id={item.idDrink}
              className="list__img"
            />
          }
        />
      ))}
    </div>
  );
};
