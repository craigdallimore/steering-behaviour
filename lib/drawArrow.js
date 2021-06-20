// @flow

import type { Kinematic } from "./kinematic.js";

export default function drawArrow(
  ctx: CanvasRenderingContext2D,
  c: Kinematic
): CanvasRenderingContext2D {
  const [x, z] = c.position;

  ctx.save();
  ctx.transform(1, 0, 0, 1, x, z);
  ctx.fillStyle = "rgb(240, 98, 146)";
  ctx.rotate(c.orientation);
  ctx.moveTo(0, -10);
  ctx.beginPath();
  ctx.lineTo(5, 10);
  ctx.lineTo(0, 5);
  ctx.lineTo(-5, 10);
  ctx.lineTo(0, -10);
  ctx.fill();
  ctx.restore();

  return ctx;
}
