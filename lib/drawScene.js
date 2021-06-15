// @flow

import type { State } from "../src/seek/state.js";
import type { Kinematic } from "./kinematic.js";
import drawCharacter from "./drawCharacter.js";
import drawMeta from "./drawMeta.js";
import drawTarget from "./drawTarget.js";
import drawGrid from "./drawGrid.js";

export default function drawScene(
  ctx: CanvasRenderingContext2D,
  chartCtx: CanvasRenderingContext2D,
  state: State,
  time: number
): void {
  ctx.clearRect(0, 0, 300, 300);
  drawGrid(ctx);
  drawCharacter(ctx, state.character);
  drawTarget(ctx, state.target);
  drawMeta(chartCtx, state, time);
}
