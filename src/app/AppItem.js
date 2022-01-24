import React from "react";
import "./AppItem.scss";

export const AppItem = ({ className, img, title, btn }) => {
  return (
    <div className={`app-item ${className}`}>
      {img}
      <div className="app-item__buy">
        <h3 className="app-item__title">{title}</h3>
        {btn}
      </div>
    </div>
  );
};
