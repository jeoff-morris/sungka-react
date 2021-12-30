import { StatusBarMenuButton } from "./status-bar-buttons/StatusBarMenuButton";
import { StatusBarSigninButton } from "./status-bar-buttons/StatusBarSigninButton";
import { StatusBarSignoutButton } from "./status-bar-buttons/StatusBarSignoutButton";
import { StatusBarInfo } from "./status-bar-info/StatusBarInfo";

import "./StatusBar.scss";

export const StatusBar = (props: any) => {
  const mainMenuButton = document.getElementById("main-menu-btn");
  const mainMenu = document.getElementById("main-menu");
  if (mainMenuButton != null && mainMenu != null) {
    mainMenuButton.addEventListener("click", (e) => {
      e.preventDefault();
      mainMenu.style.display = "block";
      mainMenu.style.position = "fixed";
      mainMenu.style.zIndex = "1000";
    });
    mainMenuButton.addEventListener("mouseout", (e) => {
      e.preventDefault();
      setTimeout(() => {
        mainMenu.style.display = "none";
        mainMenu.style.position = "fixed";
        mainMenu.style.zIndex = "1000";
      }, 2800);
    });
  }

  return (
    <>
      <div className="status-bar">
        <StatusBarMenuButton
          linkTitle="Menu"
          linkTo="#"
          linkText="MENU"
          className="btn menu"
          id="main-menu-btn"
        />
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
              onClick={props.signout}
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
