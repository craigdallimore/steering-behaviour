import type { Vector } from "../lib/vector";
import { vectorToRadians, length } from "../lib/vector";

export default function drawVector(
  ctx: CanvasRenderingContext2D,
  from: Vector,
  to: Vector,
  fillStyle: string
): CanvasRenderingContext2D {
  const [x1, z1] = from;
  const distance = length(to);
  const orientation = distance > 0 ? vectorToRadians(to) : 0;

  ctx.save();
  ctx.fillStyle = fillStyle;
  ctx.transform(1, 0, 0, 1, x1, z1);
  ctx.rotate(orientation);
  ctx.beginPath();
  ctx.moveTo(distance, 0);
  ctx.lineTo(distance - 5, 5);
  ctx.lineTo(distance - 5, 1.5);
  ctx.lineTo(0, 1.5);
  ctx.lineTo(0, -1.5);
  ctx.lineTo(distance - 5, -1.5);
  ctx.lineTo(distance - 5, -5);
  ctx.lineTo(distance, 0);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  return ctx;
}
