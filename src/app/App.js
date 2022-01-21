import React from "react";
import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
