import React from "react";

import { Button } from "../../../buttons/Button";

import "./StatusBarButtons.scss";

export const StatusBarSignoutButton = (props: any) => {
  return (
    <>
      <Button
        linkTo={props.linkTo}
        linkText={props.linkText}
        className={props.className}
        onClick={props.signout()}
      />
    </>
  );
};
