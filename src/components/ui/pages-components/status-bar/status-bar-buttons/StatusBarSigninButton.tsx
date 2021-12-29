import React from "react";

import { Button } from "../../../buttons/Button";

import "./StatusBarButtons.scss";

export const StatusBarSigninButton = (props: any) => {
  return (
    <>
      <Button
        linkTo={props.linkTo}
        linkText={props.linkText}
        className={props.className}
      />
    </>
  );
};
