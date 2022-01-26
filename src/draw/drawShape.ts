import type { Shape } from "@domain/types";

export default function drawShape(
  ctx: CanvasRenderingContext2D,
  shape: Shape,
  strokeStyle: string,
  fillStyle: string
): CanvasRenderingContext2D {
  if (shape.path.points.length < 3) {
    return ctx;
  }

  const [x, z] = shape.path.position;

  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;

  ctx.moveTo(shape.path.position[0], shape.path.position[1]);
  ctx.beginPath();

  for (let i = 0; i < shape.path.points.length; i++) {
    const point = shape.path.points[i];
    ctx.lineTo(x + point[0], z + point[1]);
  }

  ctx.closePath();

  ctx.stroke();
  ctx.fill();
  ctx.restore();
  return ctx;
}
