import React, { useState, useEffect } from "react";
import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const useFetch = (url) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchCocktails = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setFetchData(data.drinks);
    };
    fetchCocktails(url);
  }, [url]);

  return { fetchData };
};

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
