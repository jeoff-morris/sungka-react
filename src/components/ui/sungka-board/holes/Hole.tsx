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
  }: IHole = props;

  let countersArray: Array<JSX.Element> = [];

  for (let i = 0; i < counterCount; i++) {
    countersArray.push(
      <Counters
        containmentAreaRadius={containmentAreaRadius}
        counterWidth={counterWidth}
        counterHeight={counterHeight}
        counterImgSrc={counterImgSrc}
        counterCount={counterCount}
        counterIndex={i}
        holeId={props.holeId}
        key={i.toString()}
      />
    );
  }

  return (
    <div className={props.holeClassName} id={props.holeId}>
      {countersArray.length ? countersArray : ""}
    </div>
  );
};
