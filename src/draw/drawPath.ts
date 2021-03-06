import type { Path } from "@domain/types";

export default function drawPath(
  ctx: CanvasRenderingContext2D,
  path: Path,
  strokeStyle: string,
  lineDash: [number, number] = [5, 3]
): CanvasRenderingContext2D {
  if (path.points.length < 2) {
    return ctx;
  }

  ctx.save();
  ctx.setLineDash(lineDash);
  ctx.strokeStyle = strokeStyle;
  ctx.moveTo(path.position[0], path.position[1]);

  ctx.beginPath();
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

  if (path.isClosed) {
    ctx.beginPath();
    ctx.moveTo(...path.points[path.points.length - 1]);
    ctx.lineTo(...path.points[0]);
    ctx.closePath();
    ctx.stroke();
  }

  ctx.restore();
  return ctx;
}
