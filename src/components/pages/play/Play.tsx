import React from "react";

import { SungkaBoard, ISungkaBoard } from "../../ui/sungka-board/SungkaBoard";

import BoardImage from "../../../assets/images/boards/old-wood-01.png";
import Shell from "../../../assets/images/shells/pink-shell.png";

let data: ISungkaBoard = {
  boardBackgroundImage: "url(" + BoardImage + ")",
  boardWidth: 1440,
  boardHeight: 600,
  uloP1: {
    countersData: {
      holeId: "ulo-p1",
      holeClassName: "ulo-p1-hole",
      className: "ulo-p1-hole",
      counterId: "ulo-p1-hole",
      containmentAreaRadius: 12.5,
      counterCount: 2,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  uloP2: {
    countersData: {
      holeId: "ulo-p2",
      holeClassName: "ulo-p1-hole",
      className: "ulo-p1-hole",
      counterId: "ulo-p1-hole",
      containmentAreaRadius: 12.5,
      counterCount: 4,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay01: {
    countersData: {
      holeId: "bahay02",
      holeClassName: "bahay02",
      className: "bahay02",
      counterId: "bahay02-counter",
      containmentAreaRadius: 12.5,
      counterCount: 4,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay02: {
    countersData: {
      holeId: "bahay03",
      holeClassName: "bahay03",
      className: "bahay03",
      counterId: "bahay03-counter",
      containmentAreaRadius: 12.5,
      counterCount: 4,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay03: {
    countersData: {
      holeId: "bahay04",
      holeClassName: "bahay04",
      className: "bahay04",
      counterId: "bahay04-counter",
      containmentAreaRadius: 12.5,
      counterCount: 0,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay04: {
    countersData: {
      holeId: "bahay05",
      holeClassName: "bahay05",
      className: "bahay05",
      counterId: "bahay05-counter",
      containmentAreaRadius: 12.5,
      counterCount: 0,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay05: {
    countersData: {
      holeId: "bahay06",
      holeClassName: "bahay06",
      className: "bahay06",
      counterId: "bahay06-counter",
      containmentAreaRadius: 12.5,
      counterCount: 28,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay06: {
    countersData: {
      holeId: "bahay07",
      holeClassName: "bahay07",
      className: "bahay07",
      counterId: "bahay07-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay07: {
    countersData: {
      holeId: "bahay07",
      holeClassName: "bahay07",
      className: "bahay07",
      counterId: "bahay07-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay08: {
    countersData: {
      holeId: "bahay08",
      holeClassName: "bahay08",
      className: "bahay08",
      counterId: "bahay08-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay09: {
    countersData: {
      holeId: "bahay09",
      holeClassName: "bahay09",
      className: "bahay09",
      counterId: "bahay09-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay10: {
    countersData: {
      holeId: "bahay10",
      holeClassName: "bahay10",
      className: "bahay10",
      counterId: "bahay10-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay11: {
    countersData: {
      holeId: "bahay11",
      holeClassName: "bahay11",
      className: "bahay11",
      counterId: "bahay11-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay12: {
    countersData: {
      holeId: "bahay12",
      holeClassName: "bahay12",
      className: "bahay12",
      counterId: "bahay12-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay13: {
    countersData: {
      holeId: "bahay13",
      holeClassName: "bahay13",
      className: "bahay13",
      counterId: "bahay13-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
  bahay14: {
    countersData: {
      holeId: "bahay14",
      holeClassName: "bahay14",
      className: "bahay14",
      counterId: "bahay14-counter",
      containmentAreaRadius: 12.5,
      counterCount: 7,
      counterWidth: 25,
      counterHeight: 25,
      imageSrc: "url(" + Shell + ")",
    },
  },
};

export const Play = (props: any) => {
  return <SungkaBoard {...data} />;
};
