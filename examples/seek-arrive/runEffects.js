// @flow

import drawCircle from "../../lib/drawCircle.js";
import drawVector from "../../lib/drawVector.js";
import drawTarget from "../../lib/drawTarget.js";
import drawGrid from "../../lib/drawGrid.js";

import drawMeta from "./drawMeta.js";
import type { State } from "./state.js";

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
    chart: CanvasRenderingContext2D,
  },
  state: State,
  time: number
): void {
  dom.main.clearRect(0, 0, 300, 300);
  drawGrid(dom.main);

  // Target
  drawCircle(dom.main, state.target, 25, "rgba(255, 112, 67, 0.1)");
  drawTarget(dom.main, state.target);

  // Character
  drawCircle(dom.main, state.character, 2.5, "rgb(240, 98, 146)");

  // Blue: Character velocity
  drawVector(
    dom.main,
    state.character.position,
    state.character.velocity,
    "rgb(100, 181, 246)"
  );

  // --------------------------------------------------------------------------

  drawMeta(dom.chart, state, time);
}
