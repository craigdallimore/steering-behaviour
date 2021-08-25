// @flow

import type { Segment } from "./path.js";

export default function drawShape(
  ctx: CanvasRenderingContext2D,
  [a, b]: Segment,
  strokeStyle: string
): CanvasRenderingContext2D {
  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.save();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.stroke();

  ctx.restore();
  return ctx;
}
