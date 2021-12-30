import React, { CSSProperties } from "react";

import { Hole } from "./holes/Hole";

import "./SungkaBoard.scss";

export interface ISungkaBoard {
  holesData: Array<object>;
  boardWidth: number;
  boardHeight: number;
  boardBackgroundImage: string;
}

export const SungkaBoard = (props: any) => {
  let {
    boardWidth,
    boardHeight,
    boardBackgroundImage,
    holesData,
  }: ISungkaBoard = props;

  let sungkaBoard = {
    width: boardWidth + "px",
    height: boardHeight + "px",
    backgroundImage: boardBackgroundImage,
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
        containmentAreaRadius={hole.containmentAreaRadius}
        counterWidth={hole.counterWidth}
        counterHeight={hole.counterHeight}
        counterImgSrc={hole.counterImgSrc}
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
