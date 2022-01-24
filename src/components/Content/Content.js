import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { List } from "../../pages/List";
import { Cocktail } from "../../pages/Cocktail";
import "./Content.scss";

export const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails-list" element={<List />} />
        <Route path="/cocktail" element={<Cocktail />} />
      </Routes>
    </div>
  );
};
