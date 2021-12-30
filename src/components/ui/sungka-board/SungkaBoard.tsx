import React, { CSSProperties } from "react";

import { Holes } from "./holes/Holes";
import { IHoles } from "./holes/Holes";

import "./SungkaBoard.scss";

export interface ISungkaBoard {
  uloP1: IHoles | null;
  uloP2: IHoles | null;
  bahay01?: IHoles | null;
  bahay02?: IHoles | null;
  bahay03?: IHoles | null;
  bahay04?: IHoles | null;
  bahay05?: IHoles | null;
  bahay06?: IHoles | null;
  bahay07?: IHoles | null;
  bahay08?: IHoles | null;
  bahay09?: IHoles | null;
  bahay10?: IHoles | null;
  bahay11?: IHoles | null;
  bahay12?: IHoles | null;
  bahay13?: IHoles | null;
  bahay14?: IHoles | null;
  boardWidth: number;
  boardHeight: number;
  boardBackgroundImage: string;
}

export const SungkaBoard = (props: any) => {
  let {
    uloP1,
    uloP2,
    bahay01,
    bahay02,
    bahay03,
    bahay04,
    bahay05,
    bahay06,
    bahay07,
    bahay08,
    bahay09,
    bahay10,
    bahay11,
    bahay12,
    bahay13,
    bahay14,
    boardWidth,
    boardHeight,
    boardBackgroundImage,
  }: ISungkaBoard = props;

  let sungkaBoard = {
    width: boardWidth + "px",
    height: boardHeight + "px",
    backgroundImage: boardBackgroundImage,
  };

  let style = sungkaBoard as CSSProperties;

  return (
    <div>
      <div className="sungka-board-container">
        <div id="sungka-board" className="sungka-board" style={style}>
          <div id="left-space" className="left-space"></div>
          <div id="right-space" className="right-space"></div>
          <div id="top-space" className="top-space"></div>
          <div id="bottom-space" className="bottom-space"></div>
          <div id="middle-space" className="middle-space"></div>
          <Holes holeId="ulo-p1" holeClassName="ulo-p1" countersData={uloP1} />
          <Holes holeId="ulo-p2" holeClassName="ulo-p2" countersData={uloP2} />
          <Holes
            holeId="bahay01"
            holeClassName="bahay01"
            countersData={bahay01}
          />
          <Holes
            holeId="bahay02"
            holeClassName="bahay02"
            countersData={bahay02}
          />
          <Holes
            holeId="bahay03"
            holeClassName="bahay03"
            countersData={bahay03}
          />
          <Holes
            holeId="bahay04"
            holeClassName="bahay04"
            countersData={bahay04}
          />
          <Holes
            holeId="bahay05"
            holeClassName="bahay05"
            countersData={bahay05}
          />
          <Holes
            holeId="bahay06"
            holeClassName="bahay06"
            countersData={bahay06}
          />
          <Holes
            holeId="bahay07"
            holeClassName="bahay07"
            countersData={bahay07}
          />
          <Holes
            holeId="bahay08"
            holeClassName="bahay08"
            countersData={bahay08}
          />
          <Holes
            holeId="bahay09"
            holeClassName="bahay09"
            countersData={bahay09}
          />
          <Holes
            holeId="bahay10"
            holeClassName="bahay10"
            countersData={bahay10}
          />
          <Holes
            holeId="bahay11"
            holeClassName="bahay11"
            countersData={bahay11}
          />
          <Holes
            holeId="bahay12"
            holeClassName="bahay12"
            countersData={bahay12}
          />
          <Holes
            holeId="bahay13"
            holeClassName="bahay13"
            countersData={bahay13}
          />
          <Holes
            holeId="bahay14"
            holeClassName="bahay14"
            countersData={bahay14}
          />
        </div>
      </div>
    </div>
  );
};
