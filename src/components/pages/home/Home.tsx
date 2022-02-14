import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

export const Home = (props: any) => {
  return (
    <>
      <div className="page-heading">
        <h2>Let's play Sungka</h2>
        <h1>SITE UNDER DEVELOPMENT</h1>
        <h3>To test, please feel free to login!</h3>
      </div>
      {props.displayName && (
        <div className="ready-to-play">
          <h3>
            Hi{props.displayName && <span> {props.displayName}</span>}, ready to
            play?
          </h3>
          <Link className="lets-play btn" to="/play">
            Let's play
          </Link>
          <br></br>
        </div>
      )}
    </>
  );
};
