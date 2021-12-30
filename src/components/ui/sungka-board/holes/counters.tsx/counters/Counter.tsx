import { CSSProperties } from "react";

interface ICounter {
  containmentAreaRadius: number;
  counterImgSrc: string;
  counterWidth: number;
  counterHeight: number;
  zIndex: number;
  containerXAxis: number;
  containerYAxis: number;
}

export const Counter = (props: any) => {
  let {
    counterHeight,
    counterImgSrc,
    containmentAreaRadius,
    counterWidth,
    zIndex,
    containerXAxis,
    containerYAxis,
  }: ICounter = props;

  let top: number;
  let left: number;
  let transform: string;
  let a = Math.random() * 2 * Math.PI;
  let r = containmentAreaRadius * Math.sqrt(Math.random());

  left = r * Math.cos(a);
  top = r * Math.sin(a);

  transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";

  const extraCSS = {
    left: containerXAxis + counterWidth * 2 + left + "px",
    top: containerYAxis + counterHeight * 2 + top + "px",
    width: counterWidth + "px",
    height: counterHeight + "px",
    transform: transform,
    display: "inline-block",
    backgroundImage: counterImgSrc,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    zIndex: zIndex,
    position: "absolute",
  };

  const styles = extraCSS as CSSProperties;

  return <div style={styles}></div>;
};
