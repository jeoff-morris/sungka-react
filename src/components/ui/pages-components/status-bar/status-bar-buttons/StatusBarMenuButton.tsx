import React from "react";

import { Button } from "../../../buttons/Button";

import "./StatusBarButtons.scss";

export const StatusBarMenuButton = (props: any) => {
  return (
    <>
      <Button
        linkTo={props.linkTo}
        linkTitle={props.linkTitle}
        className={props.className}
        linkText={props.linkText}
        onmouseover={props.onmouseover}
        id="main-menu-btn"
      />
    </>
  );
};
