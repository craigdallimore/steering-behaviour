import drawArrow from "../draw/drawArrow.js";
import drawCircle from "../draw/drawCircle.js";
import drawGrid from "../draw/drawGrid.js";
import drawPath from "../draw/drawPath.js";
import drawEdge from "../draw/drawEdge.js";
import drawSelectionBox from "../draw/drawSelectionBox.js";
import drawShape from "../draw/drawShape.js";
import drawVector from "../draw/drawVector.js";

import type {
  State,
  Character,
  Path,
  Edge,
  Kinematic,
  Shape,
} from "@domain/types.js";
import {
  add,
  multiply,
  vectorToRadians,
  radiansToVector,
} from "../lib/vector.js";
import { getCollision } from "../steering/obstacleAvoidance.js";

function getWhiskerRay(k: Kinematic, radians: number, magnitude: number): Edge {
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

    drawEdge(ctx, w0, "rgb(67, 160, 71)");
    drawEdge(ctx, w1, "rgb(46, 125, 50)");
    drawEdge(ctx, w2, "rgb(46, 125, 50)");

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
