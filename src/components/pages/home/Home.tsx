import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

export const Home = (props: any) => {
  return (
    <>
      <div className="page-heading">
        <h2>Let's play Sungka</h2>
      </div>
      <div className="ready-to-play">
        <h2>
          Hi{props.displayName && <span> {props.displayName}</span>}, ready to
          play?
        </h2>
        <Link className="lets-play btn" to="/play">
          Let's play
        </Link>
        <br></br>
      </div>
    </>
  );
};
