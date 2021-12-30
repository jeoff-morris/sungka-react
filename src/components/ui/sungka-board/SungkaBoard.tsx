import { CSSProperties } from "react";

import { Hole } from "./holes/Hole";

import "./SungkaBoard.scss";

export interface ISungkaBoard {
  holesData: Array<object>;
  boardSize: "xs" | "sm" | "md" | "lg" | "xl";
  boardBackgroundImage: string;
}

export const SungkaBoard = (props: any) => {
  let { boardSize, boardBackgroundImage, holesData }: ISungkaBoard = props;

  let boardWidth: number;
  let multiplier = 1;
  let counterMultiplier = 1;

  switch (boardSize) {
    case "xs":
      boardWidth = 360;
      multiplier = 1.04;
      counterMultiplier = 0.2;
      break;
    case "sm":
      boardWidth = 560;
      multiplier = 1.03;
      counterMultiplier = 0.35;
      break;
    case "md":
      boardWidth = 720;
      multiplier = 1.04;
      counterMultiplier = 0.4;
      break;
    case "lg":
      boardWidth = 1000;
      multiplier = 1;
      break;
    case "xl":
      boardWidth = 1440;
      multiplier = 1.016;
      counterMultiplier = 1.026;
      break;
    default:
      boardWidth = 1000;
  }

  const boardHeightProportion = 1 / 2.4;
  let boardHeight = boardWidth * boardHeightProportion;

  let sungkaBoard = {
    width: boardWidth + "px",
    height: boardHeight + "px",
    backgroundImage: boardBackgroundImage,
    backgroundSize: "contain",
    transform: `"scale(${multiplier})"`,
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
        containmentAreaRadius={12.5 * multiplier * counterMultiplier}
        counterWidth={25 * multiplier * counterMultiplier}
        counterHeight={25 * multiplier * counterMultiplier}
        counterImgSrc={hole.counterImgSrc}
        multiplier={multiplier}
        key={index.toString()}
      />
    );
  });

  return (
    <div>
      <div className="sungka-board-container">
        <div className="sungka-board" style={style}>
          {holesArray}
        </div>
      </div>
    </div>
  );
};
