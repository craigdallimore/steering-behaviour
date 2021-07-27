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

  drawPath(dom.main, state.path, "rgba(55,71,79,1)");
}
