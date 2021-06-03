// @flow

export default function drawGrid(
  ctx /*:CanvasRenderingContext2D*/
) /*:CanvasRenderingContext2D*/ {
  ctx.strokeStyle = "rgba(227, 242, 253, 1)";
  ctx.translate(0.5, 0.5);
  for (let x = 10; x < 300; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 300);
    ctx.stroke();
  }
  for (let z = 10; z < 300; z += 10) {
    ctx.beginPath();
    ctx.moveTo(0, z);
    ctx.lineTo(300, z);
    ctx.stroke();
  }
  return ctx;
}
