// @flow

import type { Kinematic } from "../../lib/kinematic.js";
import drawCharacter from "../../lib/drawCharacter.js";
import drawTarget from "../../lib/drawTarget.js";
import drawGrid from "../../lib/drawGrid.js";
import drawMeta from "./drawMeta.js";
import type { State } from "./state.js";

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
