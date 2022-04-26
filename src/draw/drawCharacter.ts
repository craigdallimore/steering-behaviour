import type { Character } from "@domain/types";
import drawArrow from "./drawArrow";

export default function drawCharacter(
  ctx: CanvasRenderingContext2D,
  c: Character
): CanvasRenderingContext2D {
  ctx.save();
  if (c.label) {
    ctx.font = "20px sans-serif";
    ctx.fillText(
      c.label,
      c.kinematic.position[0] - 10,
      c.kinematic.position[1] + 7
    );
  } else {
    drawArrow(ctx, c.kinematic);
  }
  ctx.restore();

  return ctx;
}
