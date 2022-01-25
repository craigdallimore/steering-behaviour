import type { Path } from "../lib/path.js";

export default function drawCircle(
  ctx: CanvasRenderingContext2D,
  path: Path,
  strokeStyle: string
): CanvasRenderingContext2D {
  if (path.points.length < 2) {
    return ctx;
  }

  ctx.save();
  ctx.setLineDash([5, 3]);
  ctx.strokeStyle = strokeStyle;
  ctx.moveTo(path.position[0], path.position[1]);

  for (let i = 0; i < path.points.length; i++) {
    const point = path.points[i];

    if (i === 0) {
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
    } else {
      ctx.lineTo(point[0], point[1]);
    }
  }

  ctx.stroke();
  ctx.restore();
  return ctx;
}
