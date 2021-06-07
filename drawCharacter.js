// @flow

export default function drawCharacter(
  ctx /*:CanvasRenderingContext2D*/,
  { x, z } /*:Character */
) /*:CanvasRenderingContext2D*/ {
  ctx.fillStyle = "rgb(240, 98, 146)";
  ctx.moveTo(x, z - 5);
  ctx.beginPath();
  ctx.lineTo(x + 5, z + 10);
  ctx.lineTo(x - 5, z + 10);
  ctx.lineTo(x, z - 5);
  ctx.fill();
  return ctx;
}
