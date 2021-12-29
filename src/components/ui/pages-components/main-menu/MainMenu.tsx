import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./MainMenu.scss";

export const MainMenu = (props: any) => {
  const [lightMode, setLightMode] = useState(false);
  let navigate = useNavigate();

  let darkmode = localStorage.getItem("darkMode");

  const darkMode = () => {
    if (darkmode === "true") {
      localStorage.setItem("darkMode", "false");
      setLightMode(true);
      navigate("#");
    } else {
      localStorage.setItem("darkMode", "true");
      setLightMode(false);
      navigate("#");
    }
  };

  if (!props.displayName) {
    return (
      <div id="main-menu" className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sungka-history">Sungka History</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signin">Login / Register</Link>
          </li>
          <li>
            <button
              onClick={() => {
                darkMode();
              }}
            >
              {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div id="main-menu" className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sungka-history">Sungka History</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/membership">Your Membership</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button>Signout</button>
          </li>
          <li>
            <button
              onClick={() => {
                darkMode();
              }}
            >
              {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      </div>
    );
  }
};
