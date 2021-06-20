// @flow

import type { Kinematic } from "./kinematic.js";

export default function drawCircle(
  ctx: CanvasRenderingContext2D,
  c: Kinematic
): CanvasRenderingContext2D {
  const [x, z] = c.position;

  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "rgb(240, 98, 146)";
  ctx.moveTo(x - 2.5, z - 2.5);
  ctx.ellipse(x, z, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
  return ctx;
}
