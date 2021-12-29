import { StatusBarMenuButton } from "./status-bar-buttons/StatusBarMenuButton";
import { StatusBarSigninButton } from "./status-bar-buttons/StatusBarSigninButton";
import { StatusBarSignoutButton } from "./status-bar-buttons/StatusBarSignoutButton";
import { StatusBarInfo } from "./status-bar-info/StatusBarInfo";

import "./StatusBar.scss";

export const StatusBar = (props: any) => {
  const mainMenuButton = document.getElementById("main-menu-btn");
  const mainMenu = document.getElementById("main-menu");
  if (mainMenuButton != null && mainMenu != null) {
    mainMenuButton.addEventListener("mouseover", (e) => {
      e.preventDefault();
      mainMenu.style.marginTop = "0";
      mainMenu.style.display = "block";
      mainMenu.style.position = "fixed";
      mainMenu.style.zIndex = "1000";
    });
    mainMenuButton.addEventListener("mouseout", (e) => {
      e.preventDefault();

      setTimeout(() => {
        mainMenu.style.marginTop = "0";
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
          <>
            <StatusBarSignoutButton
              linkTitle="Signin"
              linkTo="#"
              linkText="Signin"
              className="btn signin"
              onClick={props.signout}
            />
            <StatusBarInfo username={props.displayName} />
          </>
        ) : (
          <>
            <StatusBarSigninButton
              linkTitle="Signout"
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
