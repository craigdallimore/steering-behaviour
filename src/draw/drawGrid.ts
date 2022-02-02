import { Vector } from "@domain/types";

export default function drawGrid(
  ctx: CanvasRenderingContext2D,
  v: Vector
): CanvasRenderingContext2D {
  ctx.save();
  ctx.strokeStyle = "#7fc1ca";
  for (let x = 10; x < v[0]; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, v[1]);
    ctx.stroke();
  }
  for (let z = 10; z < v[1]; z += 10) {
    ctx.beginPath();
    ctx.moveTo(0, z);
    ctx.lineTo(v[0], z);
    ctx.stroke();
  }
  ctx.restore();
  return ctx;
}
