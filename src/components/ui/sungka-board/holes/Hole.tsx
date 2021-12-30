import { useEffect, useState } from "react";

import { Counters } from "./counters.tsx/Counters";

export interface IHole {
  containmentAreaRadius: number;
  counterCount: number;
  counterWidth: number;
  counterHeight: number;
  counterImgSrc: string;
  multiplier: number;
}

export const Hole = (props: any) => {
  let {
    containmentAreaRadius,
    counterCount,
    counterWidth,
    counterHeight,
    counterImgSrc,
    multiplier,
  }: IHole = props;

  let countersArray: Array<JSX.Element> = [];

  let holeDiv = document.getElementById(props.holeId);

  const [holeDivCoordinates, setHoleDivCoordinates]: any = useState({});

  useEffect(() => {
    if (holeDiv != null) {
      let rect = holeDiv?.getBoundingClientRect();
      setHoleDivCoordinates({
        x: rect?.left * multiplier + counterWidth * multiplier,
        y: rect?.top * multiplier + counterHeight * multiplier,
      });
    }
    return () => {};
  }, [holeDiv, multiplier, counterHeight, counterWidth]);

  for (let i = 0; i < counterCount; i++) {
    countersArray.push(
      <div className="counters" key={i.toString()}>
        <Counters
          containmentAreaRadius={containmentAreaRadius * multiplier}
          counterWidth={counterWidth * multiplier}
          counterHeight={counterHeight * multiplier}
          counterImgSrc={counterImgSrc}
          counterCount={counterCount}
          holeDivCoordinates={holeDivCoordinates}
        />
      </div>
    );
  }

  return (
    <div className={props.holeClassName} id={props.holeId}>
      {countersArray.length ? countersArray : ""}
    </div>
  );
};
