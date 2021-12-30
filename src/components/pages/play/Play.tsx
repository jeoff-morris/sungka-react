import { SungkaBoard, ISungkaBoard } from "../../ui/sungka-board/SungkaBoard";

import BoardImage from "../../../assets/images/boards/old-wood-01.png";
import Shell from "../../../assets/images/shells/white-shell.png";

let data: ISungkaBoard = {
  boardBackgroundImage: "url(" + BoardImage + ")",
  boardSize: "xs",
  holesData: [
    {
      holeId: "ulo-p1",
      holeClassName: "ulo-p1-hole",
      counterCount: 2,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "ulo-p2",
      holeClassName: "ulo-p2-hole",
      counterCount: 4,
      counterImgSrc: "url(" + Shell + ")",
    },

    {
      holeId: "bahay01",
      holeClassName: "bahay01",
      counterCount: 4,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay02",
      holeClassName: "bahay02",
      counterCount: 4,
      counterImgSrc: "url(" + Shell + ")",
    },

    {
      holeId: "bahay03",
      holeClassName: "bahay03",
      counterCount: 4,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay04",
      holeClassName: "bahay04",
      className: "bahay04",
      counterCount: 0,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay05",
      holeClassName: "bahay05",
      className: "bahay05",
      counterCount: 0,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay06",
      holeClassName: "bahay06",
      className: "bahay06",
      counterCount: 28,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay07",
      holeClassName: "bahay07",
      className: "bahay07",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay08",
      holeClassName: "bahay08",
      className: "bahay08",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay09",
      holeClassName: "bahay09",
      className: "bahay09",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay10",
      holeClassName: "bahay10",
      className: "bahay10",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay11",
      holeClassName: "bahay11",
      className: "bahay11",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay12",
      holeClassName: "bahay12",
      className: "bahay12",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay13",
      holeClassName: "bahay13",
      className: "bahay13",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
    {
      holeId: "bahay14",
      holeClassName: "bahay14",
      className: "bahay14",
      counterCount: 7,
      counterImgSrc: "url(" + Shell + ")",
    },
  ],
};

export const Play = (props: any) => {
  return <SungkaBoard {...data} />;
};
