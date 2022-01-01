import { CSSProperties } from "react";

interface ICounter {
  containmentAreaRadius: number;
  counterImgSrc: string;
  counterWidth: number;
  counterHeight: number;
  counterIndex: number;
  holeId: string;
}

export const Counter = (props: any) => {
  let {
    counterHeight,
    counterImgSrc,
    containmentAreaRadius,
    counterWidth,
    counterIndex,
    holeId,
  }: ICounter = props;

  let top: number;
  let left: number;
  let transform: string;
  let a = Math.random() * 2 * Math.PI;
  let r = containmentAreaRadius * Math.sqrt(Math.random());

  left = r * Math.cos(a);
  top = r * Math.sin(a);

  transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";
  console.log(counterHeight, counterWidth);
  const extraCSS = {
    left: left + "px",
    top: top + "px",
    width: counterWidth + "px",
    height: counterHeight + "px",
    transform: transform,
    display: "inline-block",
    backgroundImage: counterImgSrc,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    gridArea: holeId,
    position: "relative",
  };

  const styles = extraCSS as CSSProperties;

  return <div title={`${counterIndex}`} style={styles}></div>;
};
