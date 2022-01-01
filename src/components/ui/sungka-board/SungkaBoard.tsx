import { CSSProperties } from "react";

import { Hole } from "./holes/Hole";

import "./SungkaBoard.scss";

export interface ISungkaBoard {
  holesData: Array<object>;
  boardWidth: number;
  boardBackgroundImage: string;
  counterImgSrc: string;
}

export const SungkaBoard = (props: any) => {
  let {
    boardWidth,
    boardBackgroundImage,
    holesData,
    counterImgSrc,
  }: ISungkaBoard = props;

  let scaleFactor = boardWidth / 1440;
  let boardHeight = boardWidth * (600 / 1440);

  let sungkaBoard = {
    width: boardWidth + "px",
    height: boardHeight + "px",
    backgroundImage: boardBackgroundImage,
    backgroundSize: "contain",
    transform: `scale(${scaleFactor})`,
    transformOrigin: "center",
  };

  let style = sungkaBoard as CSSProperties;

  let holesArray: Array<JSX.Element> = [
    <div key="ls" id="left-space" className="left-space"></div>,
    <div key="rs" id="right-space" className="right-space"></div>,
    <div key="ts" id="top-space" className="top-space"></div>,
    <div key="bs" id="bottom-space" className="bottom-space"></div>,
    <div key="ms" id="middle-space" className="middle-space"></div>,
  ];

  holesData.forEach((hole: any, index: number) => {
    holesArray.push(
      <Hole
        holeId={hole.holeId}
        holeClassName={hole.holeClassName}
        counterCount={hole.counterCount}
        containmentAreaRadius={12.5 * scaleFactor}
        counterWidth={25 * scaleFactor}
        counterHeight={25 * scaleFactor}
        counterImgSrc={counterImgSrc}
        key={index.toString()}
      />
    );
  });

  return (
    <div className="sungka-board" style={style}>
      {holesArray}
    </div>
  );
};
