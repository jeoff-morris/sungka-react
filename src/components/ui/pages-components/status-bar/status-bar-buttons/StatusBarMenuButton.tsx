import React from "react";

import "./StatusBarButtons.scss";

export const StatusBarMenuButton = (props: any) => {
  return (
    <>
      <a
        href={props.linkTo}
        title={props.linkTitle}
        className={props.className}
        id="main-menu-btn"
      >
        {props.linkText}
      </a>
    </>
  );
};
