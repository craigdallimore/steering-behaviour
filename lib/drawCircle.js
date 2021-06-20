// @flow

import type { Kinematic } from "./kinematic.js";

export default function drawCircle(
  ctx: CanvasRenderingContext2D,
  c: Kinematic,
  radius: number,
  fillStyle: string
): CanvasRenderingContext2D {
  const [x, z] = c.position;

  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.moveTo(x - radius, z - radius);
  ctx.ellipse(x, z, radius * 2, radius * 2, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
  return ctx;
}
