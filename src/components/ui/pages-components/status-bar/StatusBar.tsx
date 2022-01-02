import { auth } from "../../../../firebase/firebase-config";
import { getAuth, signOut } from "firebase/auth";

import { MainMenu } from "../main-menu/MainMenu";
import { StatusBarSigninButton } from "./status-bar-buttons/StatusBarSigninButton";
import { StatusBarSignoutButton } from "./status-bar-buttons/StatusBarSignoutButton";
import { StatusBarInfo } from "./status-bar-info/StatusBarInfo";

import "./StatusBar.scss";

export const StatusBar = (props: any) => {
  let signout = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });

    window.location.reload();
  };

  return (
    <>
      <div className="status-bar">
        <div id="main-menu">
          <button title="Menu" className="btn menu" id="main-menu-btn">
            MENU
          </button>
          <MainMenu displayName={props.displayName} />
        </div>
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
