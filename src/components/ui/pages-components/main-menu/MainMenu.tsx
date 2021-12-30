import { useState } from "react";
import { Link } from "react-router-dom";

import { getCookie, setCookie } from "../../../../utils/cookies";

import "./MainMenu.scss";

export const MainMenu = (props: any) => {
  const [lightMode, setLightMode] = useState(false);

  let darkmode = getCookie("dark-mode");

  let displayName = props.displayName;

  const darkMode = () => {
    if (darkmode === "true") {
      setLightMode(true);
      setCookie("dark-mode", "false", 365);
      window.location.reload();
    } else {
      setLightMode(false);
      setCookie("dark-mode", "true", 365);
      window.location.reload();
    }
  };

  return (
    <div id="main-menu" className="main-menu">
      {displayName ? (
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
            <button className="signout btn">Signout</button>
          </li>
          <li>
            <button
              className="dark-mode"
              onClick={() => {
                darkMode();
              }}
            >
              {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      ) : (
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
      )}
    </div>
  );
};
