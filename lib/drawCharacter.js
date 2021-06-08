// @flow

import type { Kinematic } from "./kinematic.js";

export default function drawCharacter(
  ctx: CanvasRenderingContext2D,
  c: Kinematic
): CanvasRenderingContext2D {
  const [x, z] = c.position;

  ctx.fillStyle = "rgb(240, 98, 146)";
  ctx.moveTo(x, z - 5);
  ctx.beginPath();
  ctx.lineTo(x + 5, z + 10);
  ctx.lineTo(x - 5, z + 10);
  ctx.lineTo(x, z - 5);
  ctx.fill();
  return ctx;
}
