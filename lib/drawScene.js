// @flow
import drawCharacter, { type Character } from "./drawCharacter.js";
import drawTarget, { type Target } from "./drawTarget.js";
import drawGrid from "./drawGrid.js";

export default function drawScene(
  ctx: CanvasRenderingContext2D,
  character: Character,
  target: Target
): void {
  drawGrid(ctx);
  drawCharacter(ctx, character);
  drawTarget(ctx, target);
}
