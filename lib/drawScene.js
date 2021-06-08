// @flow

import type { Kinematic } from "./kinematic.js";
import drawCharacter from "./drawCharacter.js";
import drawTarget from "./drawTarget.js";
import drawGrid from "./drawGrid.js";

export type State = {
  character: Kinematic,
  target: Kinematic,
};

export default function drawScene(
  ctx: CanvasRenderingContext2D,
  state: State
): void {
  drawGrid(ctx);
  drawCharacter(ctx, state.character);
  drawTarget(ctx, state.target);
}
