import type { Debug, Kinematic } from "@domain/types";
import drawCircle from "./drawCircle";
import drawPath from "./drawPath";
import drawVector from "./drawVector";

export default function drawDebug(
  ctx: CanvasRenderingContext2D,
  debug: Debug,
  kinematic: Kinematic
): CanvasRenderingContext2D {
  debug.points.forEach((point) => {
    drawCircle(ctx, point, 2, "cyan");
  });

  debug.vectors.forEach((vector) => {
    drawVector(ctx, kinematic.position, vector, "red");
  });

  debug.edges.forEach((edge) => {
    drawPath(
      ctx,
      {
        position: kinematic.position,
        points: edge,
        label: "Debug",
        isClosed: false,
      },
      "silver"
    );
  });

  debug.circles.forEach(({ position, radius, fillStyle }) => {
    drawCircle(ctx, position, radius, fillStyle);
  });
  return ctx;
}
