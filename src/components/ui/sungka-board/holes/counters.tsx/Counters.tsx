import { Counter } from "./counters/Counter";

export interface ICounters {
  counterCount: number;
  counterImgSrc: string;
  counterWidth: number;
  counterHeight: number;
  containmentAreaRadius: number;
  counterIndex: number;
  holeId: string;
}

export const Counters = (props: any) => {
  let {
    counterCount,
    counterImgSrc,
    counterWidth,
    counterHeight,
    containmentAreaRadius,
    counterIndex,
    holeId,
  }: ICounters = props;

  let countersArray: JSX.Element[] = [];
  for (let i = 0; i < counterCount; i++) {
    countersArray.push();
  }

  return (
    <>
      <Counter
        counterImgSrc={counterImgSrc}
        counterWidth={counterWidth}
        counterHeight={counterHeight}
        containmentAreaRadius={containmentAreaRadius}
        counterIndex={counterIndex}
        holeId={holeId}
      />
    </>
  );
};
