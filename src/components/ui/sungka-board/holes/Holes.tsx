import React from "react";

import { Counters } from "./counters.tsx/Counters";
import { ICounters } from "./counters.tsx/Counters";

export interface IHoles {
  countersData: ICounters;
}

export const Holes = (props: any) => {
  let { countersData }: IHoles = props;
  return (
    <div className={props.holeClassName} id={props.holeId}>
      <Counters {...countersData} />
    </div>
  );
};
