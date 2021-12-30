import React from "react";

import { Counter } from "./counter/Counter";

export interface ICounters {
  holeId: string;
  holeClassName: string;
  counterCount: number;
  imageSrc: string;
  counterWidth: number;
  counterHeight: number;
  className: string;
  counterId: string;
  containmentAreaRadius: number;
}

export const Counters = (props: any) => {
  let {
    holeId,
    holeClassName,
    counterCount,
    imageSrc,
    counterWidth,
    counterHeight,
    className,
    counterId,
    containmentAreaRadius,
  }: ICounters = props;

  let countersArray: JSX.Element[] = [];

  for (let i = 0; i < counterCount; i++) {
    countersArray.push(
      <Counter
        className={className}
        id={counterId}
        src={imageSrc}
        width={counterWidth}
        height={counterHeight}
        radius={containmentAreaRadius}
      />
    );
  }

  return (
    <div id={holeId} className={holeClassName}>
      {countersArray}
    </div>
  );
};
