import type { Edge } from "@domain/types";

export default function drawShape(
  ctx: CanvasRenderingContext2D,
  [a, b]: Edge,
  strokeStyle: string
): CanvasRenderingContext2D {
  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0], b[1]);
  ctx.stroke();
  ctx.restore();
  return ctx;
}
