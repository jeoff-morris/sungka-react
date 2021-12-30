import { Counter } from "./counters/Counter";

export interface ICounters {
  counterCount: number;
  counterImgSrc: string;
  counterWidth: number;
  counterHeight: number;
  containmentAreaRadius: number;
  holeDivCoordinates: any;
}

export const Counters = (props: any) => {
  let {
    counterCount,
    counterImgSrc,
    counterWidth,
    counterHeight,
    containmentAreaRadius,
    holeDivCoordinates,
  }: ICounters = props;

  let countersArray: JSX.Element[] = [];
  for (let i = 0; i < counterCount; i++) {
    countersArray.push();
  }

  return (
    <div>
      <Counter
        counterImgSrc={counterImgSrc}
        counterWidth={counterWidth}
        counterHeight={counterHeight}
        containmentAreaRadius={containmentAreaRadius}
        containerXAxis={holeDivCoordinates.x}
        containerYAxis={holeDivCoordinates.y}
      />
    </div>
  );
};
