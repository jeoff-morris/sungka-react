import React from "react";
import { Link } from "react-router-dom";

export const Button = (props: any) => {
  return (
    <>
      <Link
        title={props.title}
        to={props.linkTo}
        className={props.className}
        id={props.id}
        onClick={props.onClick}
      >
        {props.linkText}
      </Link>
    </>
  );
};
