// @flow

import type { Vector } from "./vector";
import { bearing, length } from "./vector";

export default function drawVector(
  ctx: CanvasRenderingContext2D,
  from: Vector,
  to: Vector
): CanvasRenderingContext2D {
  const [x1, z1] = from;
  const [x2, z2] = to;
  const distance = length(to);
  const orientation = distance > 0 ? bearing(to) : 0;

  ctx.save();
  ctx.fillStyle = "rgb(100, 181, 246)";
  ctx.transform(1, 0, 0, 1, x1, z1);
  ctx.rotate(orientation);
  ctx.beginPath();
  ctx.moveTo(0, -distance);
  ctx.lineTo(5, 0 - distance + 5);
  ctx.lineTo(1.5, 0 - distance + 5);
  ctx.lineTo(1.5, 0);
  ctx.lineTo(-1.5, 0);
  ctx.lineTo(-1.5, 0 - distance + 5);
  ctx.lineTo(-5, 0 - distance + 5);
  ctx.lineTo(0, -distance);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  return ctx;
}
