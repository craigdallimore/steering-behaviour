import drawArrow from "../lib/drawArrow.js";
import drawSegment from "../lib/drawSegment.js";
import drawCircle from "../lib/drawCircle.js";
import drawGrid from "../lib/drawGrid.js";
import drawPath from "../lib/drawPath.js";
import drawShape from "../lib/drawShape.js";
import drawSelectionBox from "../lib/drawSelectionBox.js";

import type { State, Character } from "./state.js";
import type { Path, Segment } from "../lib/path.js";
import type { Kinematic } from "../lib/kinematic.js";
import type { Shape } from "../lib/shape.js";
import {
  add,
  multiply,
  vectorToRadians,
  radiansToVector,
} from "../lib/vector.js";
import { getCollision } from "../steering/obstacleAvoidance.js";
import drawVector from "../lib/drawVector.js";

function getWhiskerRay(
  k: Kinematic,
  radians: number,
  magnitude: number
): Segment {
  const bearing = vectorToRadians(k.velocity) - radians;
  return [
    k.position,
    add(k.position, multiply(radiansToVector(bearing), magnitude)),
  ];
}

export default function runEffects(
  ctx: CanvasRenderingContext2D,
  state: State
): void {
  ctx.clearRect(0, 0, 800, 800);
  drawGrid(ctx);
  state.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  state.characters.forEach((cha: Character) => {
    drawArrow(ctx, cha.kinematic);
    drawVector(ctx, cha.kinematic.position, cha.kinematic.velocity, "purple");

    /*
    const lookaheadMain = 150;
    const lookaheadSide = 75;
    const avoidDistance = 20;

    const w0 = getWhiskerRay(cha.kinematic, 0, lookaheadMain);
    const w1 = getWhiskerRay(cha.kinematic, 0.2, lookaheadSide);
    const w2 = getWhiskerRay(cha.kinematic, -0.2, lookaheadSide);

    drawSegment(ctx, w0, "rgb(67, 160, 71)");
    drawSegment(ctx, w1, "rgb(46, 125, 50)");
    drawSegment(ctx, w2, "rgb(46, 125, 50)");

    const shape = state.shapes.get("s1");
    if (shape) {
      const collision =
        getCollision(w1, shape) ||
        getCollision(w2, shape) ||
        getCollision(w0, shape);

      if (collision && collision.position) {
        drawCircle(ctx, collision.position, 3, "rgba(96, 125, 139, 1)");

        const target = add(
          collision.position,
          multiply(collision.normal, avoidDistance)
        );

        drawCircle(ctx, target, 3, "rgba(194, 24, 91, 1)");
      }
    }
     */
  });

  state.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(178, 223, 219, 1)");
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(ctx, focussedCharacter.kinematic.position);
    }
  }
}
