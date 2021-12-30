import { useState } from "react";
import { app } from "../../../../firebase/firebase-config";
import { getAuth, signOut } from "firebase/auth";

import { StatusBarSigninButton } from "./status-bar-buttons/StatusBarSigninButton";
import { StatusBarSignoutButton } from "./status-bar-buttons/StatusBarSignoutButton";
import { StatusBarInfo } from "./status-bar-info/StatusBarInfo";

import "./StatusBar.scss";

export const StatusBar = (props: any) => {
  const [menuButton, setMenuButton] = useState(false);

  const mainMenuButton = document.getElementById("main-menu-btn");
  const mainMenu = document.getElementById("main-menu");

  let menuButtonDown = () => {
    setMenuButton(!menuButton);

    if (menuButton === true && mainMenuButton != null && mainMenu != null) {
      mainMenu.style.display = "block";
      mainMenu.style.position = "fixed";
      mainMenu.style.zIndex = "1000";
    } else if (
      menuButton === false &&
      mainMenuButton != null &&
      mainMenu != null
    ) {
      setTimeout(() => {
        mainMenu.style.display = "none";
        mainMenu.style.position = "fixed";
        mainMenu.style.zIndex = "1000";
      }, 3000);
    }
  };

  let menuButtonLeave = () => {
    if (mainMenuButton != null && mainMenu != null) {
      setTimeout(() => {
        mainMenu.style.display = "none";
        mainMenu.style.position = "fixed";
        mainMenu.style.zIndex = "1000";
      }, 3000);
    }
  };

  const auth = getAuth(app);

  let signout = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });

    window.location.reload();
  };

  return (
    <>
      <div className="status-bar">
        <button
          onMouseDown={menuButtonDown}
          onMouseLeave={menuButtonLeave}
          title="Menu"
          className="btn menu"
          id="main-menu-btn"
        >
          MENU
        </button>
        {props.displayName ? (
          <div className="status-bar-right-btns">
            <StatusBarInfo
              className="btn display-name"
              username={props.displayName}
            />
            <StatusBarSignoutButton
              linkTitle="Signout"
              linkTo="#"
              linkText="Signout"
              className="btn signout"
              signout={signout}
            />
          </div>
        ) : (
          <>
            <StatusBarSigninButton
              linkTitle="Signin"
              linkTo="/signin"
              linkText="Signin"
              className="btn signin"
            />
          </>
        )}
      </div>
    </>
  );
};
