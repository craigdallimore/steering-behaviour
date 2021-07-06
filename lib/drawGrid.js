// @flow

export default function drawGrid(
  ctx: CanvasRenderingContext2D
): CanvasRenderingContext2D {
  ctx.save();
  ctx.strokeStyle = "rgb(227, 242, 253)";
  for (let x = 10; x < 800; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 800);
    ctx.stroke();
  }
  for (let z = 10; z < 800; z += 10) {
    ctx.beginPath();
    ctx.moveTo(0, z);
    ctx.lineTo(800, z);
    ctx.stroke();
  }
  ctx.restore();
  return ctx;
}
