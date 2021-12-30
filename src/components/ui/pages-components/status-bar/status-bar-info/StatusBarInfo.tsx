import React from "react";

import "./StatusBarInfo.scss";

export const StatusBarInfo = (props: any) => {
  return <div className={props.className}>{props.username}</div>;
};
