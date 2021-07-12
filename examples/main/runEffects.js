// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawPath from "../../lib/drawPath.js";

import type { State } from "./state.js";

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

  drawPath(
    dom.main,
    [
      [500, 10],
      [410, 40],
      [140, 270],
      [650, 600],
    ],
    "rgba(0,0,0,0.5)"
  );
}
