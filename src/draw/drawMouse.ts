import type { Vector } from "@domain/types";

export default function drawSelectionBox(
  ctx: CanvasRenderingContext2D,
  mousePosition: Vector,
  isSettingTarget: boolean
): CanvasRenderingContext2D {
  const [x, z] = mousePosition;

  ctx.save();
  ctx.transform(1, 0, 0, 1, x, z);
  ctx.strokeStyle = isSettingTarget ? "rgba(255, 0, 0)" : "rgb(0, 255, 0)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-12, -7);
  ctx.lineTo(-12, -12);
  ctx.lineTo(-7, -12);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(7, -12);
  ctx.lineTo(12, -12);
  ctx.lineTo(12, -7);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(12, 7);
  ctx.lineTo(12, 12);
  ctx.lineTo(7, 12);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-7, 12);
  ctx.lineTo(-12, 12);
  ctx.lineTo(-12, 7);
  ctx.stroke();

  ctx.restore();

  return ctx;
}
