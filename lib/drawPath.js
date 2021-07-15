// @flow

export type Path = Array<[number, number]>;

export default function drawCircle(
  ctx: CanvasRenderingContext2D,
  points: Path,
  strokeStyle: string
): CanvasRenderingContext2D {
  if (points.length < 2) {
    return ctx;
  }

  ctx.save();
  ctx.setLineDash([5, 3]);
  ctx.strokeStyle = strokeStyle;

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    if (i === 0) {
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
    } else {
      ctx.lineTo(point[0], point[1]);
    }
  }

  ctx.stroke();
  //ctx.fill();
  ctx.restore();
  return ctx;
}
