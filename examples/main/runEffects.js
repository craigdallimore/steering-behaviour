// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawPath from "../../lib/drawPath.js";
import drawCircle from "../../lib/drawCircle.js";
import findClosestPointOnPath, {
  distanceToSegment,
} from "../../lib/findClosestPointOnPath";

import type { State } from "./state.js";

const path = [
  [600, 50],
  [300, 150],
  [200, 350],
  [300, 600],
  [600, 650],
];
const dot = {
  rotation: 0,
  orientation: 0,
  position: [480, 60],
  velocity: [0, 0],
};

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
  },
  state: State
): void {
  dom.main.clearRect(0, 0, 800, 800);
  drawGrid(dom.main);

  // Target
  drawArrow(dom.main, state.target);

  // Character
  drawArrow(dom.main, state.character);

  drawPath(dom.main, path, "rgba(55,71,79,1)");

  drawCircle(dom.main, dot, 3, "rgba(144, 164, 174, 1)");

  const point = findClosestPointOnPath(path, state.character.position);

  drawCircle(
    dom.main,
    {
      ...dot,
      position: point,
    },
    3,
    "rgba(255, 138, 128, 1)"
  );
}
