import type { Vector } from "./vector.js";

export default function drawSelectionBox(
  ctx: CanvasRenderingContext2D,
  v: Vector
): CanvasRenderingContext2D {
  const [x, z] = v;

  ctx.save();
  ctx.transform(1, 0, 0, 1, x, z);
  ctx.strokeStyle = "rgb(46, 125, 50)";
  ctx.beginPath();
  ctx.moveTo(-10, -5);
  ctx.lineTo(-10, -10);
  ctx.lineTo(-5, -10);
  ctx.stroke();

  ctx.moveTo(5, -10);
  ctx.lineTo(10, -10);
  ctx.lineTo(10, -5);
  ctx.stroke();

  ctx.moveTo(10, 5);
  ctx.lineTo(10, 10);
  ctx.lineTo(5, 10);
  ctx.stroke();

  ctx.moveTo(-5, 10);
  ctx.lineTo(-10, 10);
  ctx.lineTo(-10, 5);
  ctx.stroke();

  ctx.restore();

  return ctx;
}
