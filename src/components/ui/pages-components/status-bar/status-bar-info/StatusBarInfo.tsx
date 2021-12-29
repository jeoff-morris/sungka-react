import React from "react";

import "./StatusBarInfo.scss";

export const StatusBarInfo = (props: any) => {
  return <div className="user-info">{props.username}</div>;
};
