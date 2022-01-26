import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const searchParamsValue = searchParams.get("s") || "";

  const hanleChange = (e) => {
    e.preventDefault();
    const s = e.target.value;
    setSearchParams({ s });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    navigation({
      pathname: "/cocktails-list",
      search: `s=${searchParamsValue}`,
    });
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title">
          <Link to="/">Cocktail Bar</Link>
        </div>
        <div className="header__content">
          <div className="header__search">
            <form onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Search"
                value={searchParamsValue}
                onChange={hanleChange}
              />
            </form>
          </div>
          <div className="header__basket">
            <div className="header__amount"></div>
            <button className="header__btn">
              <svg
                enableBackground="new 0 0 48 48"
                height="42px"
                id="Layer_4"
                version="1.1"
                viewBox="0 0 48 48"
                width="42px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polygon
                    fill="#ffffff"
                    points="21.552,26.021 21.573,26.016 21.573,26.021 41.459,26.021 41.459,26.015 41.481,26.021    45.771,10.016 17.264,10.016  "
                  />
                  <polygon
                    fill="#ffffff"
                    points="18.646,30 11.21,2.707 0,2.707 0,6.75 8.166,6.75 15.59,34 15.614,33.993 15.614,34 48,34 48,30     "
                  />
                  <circle cx="41.771" cy="40" fill="#ffffff" r="4" />
                  <circle cx="19.614" cy="40" fill="#ffffff" r="4" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
