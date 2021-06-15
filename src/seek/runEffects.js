// @flow

import type { Kinematic } from "../../lib/kinematic.js";
import drawCircle from "../../lib/drawCircle.js";
import drawArrow from "../../lib/drawArrow.js";
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
  drawCircle(dom.main, state.character);
  drawTarget(dom.main, state.target);
  drawMeta(dom.chart, state, time);
}
