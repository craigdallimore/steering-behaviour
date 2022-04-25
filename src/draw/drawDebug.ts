import type { Debug, Kinematic } from "@domain/types";
import drawCircle from "./drawCircle";
import drawPath from "./drawPath";
import drawVector from "./drawVector";

export default function drawDebug(
  ctx: CanvasRenderingContext2D,
  debug: Debug,
  kinematic: Kinematic
): CanvasRenderingContext2D {
  debug.points.forEach(({ fillStyle, position }) => {
    drawCircle(ctx, position, 2, fillStyle);
  });

  debug.vectors.forEach(({ fillStyle, position }) => {
    drawVector(ctx, kinematic.position, position, fillStyle);
  });

  debug.edges.forEach(({ strokeStyle, edge }) => {
    drawPath(
      ctx,
      {
        position: kinematic.position,
        points: edge,
        label: "Debug",
        isClosed: false,
      },
      strokeStyle,
      [2, 2]
    );
  });

  debug.circles.forEach(({ position, radius, fillStyle }) => {
    drawCircle(ctx, position, radius, fillStyle);
  });

  if (debug.text && debug.text.length > 0) {
    ctx.fillText(
      debug.text,
      kinematic.position[0] + 15,
      kinematic.position[1] + 10
    );
  }
  return ctx;
}
