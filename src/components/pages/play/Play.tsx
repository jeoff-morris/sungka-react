import { useLocation, Navigate } from "react-router-dom";
import { SungkaBoard, ISungkaBoard } from "../../ui/sungka-board/SungkaBoard";

import BoardImage from "../../../assets/images/boards/old-wood-01.png";
import Shell from "../../../assets/images/shells/white-shell.png";

let data: ISungkaBoard = {
  boardBackgroundImage: "url(" + BoardImage + ")",
  boardWidth: 768,
  counterImgSrc: "url(" + Shell + ")",
  holesData: [
    {
      holeId: "ulo-p1",
      holeClassName: "ulo-p1-hole",
      counterCount: 2,
    },
    {
      holeId: "ulo-p2",
      holeClassName: "ulo-p2-hole",
      counterCount: 4,
    },

    {
      holeId: "bahay01",
      holeClassName: "bahay01",
      counterCount: 4,
    },
    {
      holeId: "bahay02",
      holeClassName: "bahay02",
      counterCount: 4,
    },

    {
      holeId: "bahay03",
      holeClassName: "bahay03",
      counterCount: 4,
    },
    {
      holeId: "bahay04",
      holeClassName: "bahay04",
      counterCount: 0,
    },
    {
      holeId: "bahay05",
      holeClassName: "bahay05",
      counterCount: 0,
    },
    {
      holeId: "bahay06",
      holeClassName: "bahay06",
      counterCount: 28,
    },
    {
      holeId: "bahay07",
      holeClassName: "bahay07",
      counterCount: 7,
    },
    {
      holeId: "bahay08",
      holeClassName: "bahay08",
      counterCount: 7,
    },
    {
      holeId: "bahay09",
      holeClassName: "bahay09",
      counterCount: 7,
    },
    {
      holeId: "bahay10",
      holeClassName: "bahay10",
      counterCount: 7,
    },
    {
      holeId: "bahay11",
      holeClassName: "bahay11",
      counterCount: 7,
    },
    {
      holeId: "bahay12",
      holeClassName: "bahay12",
      counterCount: 7,
    },
    {
      holeId: "bahay13",
      holeClassName: "bahay13",
      counterCount: 7,
    },
    {
      holeId: "bahay14",
      holeClassName: "bahay14",
      counterCount: 7,
    },
  ],
};

export const Play = (props: any) => {
  let location = useLocation();
  let displayName = props.user.displayName;

  if (displayName)
    return (
      <>
        <h1>SITE UNDER DEVELOPMENT</h1>
        <h2>Randomised bead position on Sungka board example</h2>
        <SungkaBoard {...data} />
      </>
    );

  return <Navigate to="/signin" state={{ from: location }} replace />;
};
