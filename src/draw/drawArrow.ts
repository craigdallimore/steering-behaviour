import type { Kinematic } from "../lib/kinematic.js";

export default function drawArrow(
  ctx: CanvasRenderingContext2D,
  c: Kinematic
): CanvasRenderingContext2D {
  const [x, z] = c.position;

  ctx.save();
  ctx.transform(1, 0, 0, 1, x, z);
  ctx.fillStyle = "rgb(240, 98, 146)";
  ctx.rotate(c.orientation);
  ctx.moveTo(10, 0);
  ctx.beginPath();
  ctx.lineTo(-10, 5);
  ctx.lineTo(-5, 0);
  ctx.lineTo(-10, -5);
  ctx.lineTo(10, 0);
  ctx.fill();
  ctx.restore();

  return ctx;
}
