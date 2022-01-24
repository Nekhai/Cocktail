import React, { useState, useEffect } from "react";
import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const ShoppingCart = React.createContext([]);

export const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null);

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
  const [cart, setCart] = useState([]);

  return (
    <ShoppingCart.Provider value={[cart, setCart]}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </ShoppingCart.Provider>
  );
};
