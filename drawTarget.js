// @flow

export default function drawTarget(
  ctx /*:CanvasRenderingContext2D*/,
  { x, z }
) /*:CanvasRenderingContext2D*/ {
  ctx.strokeStyle = "rgba(26, 35, 126)";
  ctx.beginPath();
  ctx.moveTo(x - 10, z);
  ctx.lineTo(x + 10, z);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, z - 10);
  ctx.lineTo(x, z + 10);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(x, z, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
  ctx.stroke();
  return ctx;
}
