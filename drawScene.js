// @flow
import drawGrid from "./drawGrid.js";
import drawCharacter from "./drawCharacter.js";
import drawTarget from "./drawTarget.js";

/* ::
export type Character = {
  x: number,
  z: number
};
export type Target = {
  x: number,
  z: number
};


 */

export default function drawScene(
  ctx /*:CanvasRenderingContext2D*/,
  character /*:Character */,
  target /*:Target */
) /*:void*/ {
  drawGrid(ctx);
  drawCharacter(ctx, character);
  drawTarget(ctx, target);
}
