// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawCircle from "../../lib/drawCircle.js";
import drawGrid from "../../lib/drawGrid.js";
import drawPath from "../../lib/drawPath.js";
import drawShape from "../../lib/drawShape.js";
import drawSelectionBox from "../../lib/drawSelectionBox.js";

import type { State, Character } from "./state.js";
import type { Path } from "../../lib/path.js";
import type { Shape } from "../../lib/shape.js";
import { add, subtract, multiply, normalise } from "../../lib/vector.js";
import { getCollision } from "../../src/steering/obstacleAvoidance.js";

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
  },
  state: State
): void {
  dom.main.clearRect(0, 0, 800, 800);
  drawGrid(dom.main);
  state.shapes.forEach((s: Shape) => {
    drawShape(dom.main, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  state.characters.forEach((cha: Character) => {
    drawArrow(dom.main, cha.kinematic);

    // Holds the distance to look ahead for a collision
    // (i.e., the length of the collision ray)
    const lookahead = 50;

    // 1. Calculate the target to delegate to seek

    // Calculate the collision ray vector
    // [-10, 0]
    const rayVector = multiply(normalise(cha.kinematic.velocity), lookahead);

    const pos = cha.kinematic.position;
    const rayEnd = add(pos, rayVector);
    dom.main.strokeStyle = "rgb(67, 160, 71)";
    dom.main.save();
    dom.main.moveTo(pos[0], pos[1]);
    dom.main.lineTo(rayEnd[0], rayEnd[1]);
    dom.main.stroke();

    dom.main.restore();

    const shape = state.shapes.get("s1");
    // Find the collision
    if (shape) {
      const collision = getCollision(cha.kinematic.position, rayVector, shape);

      if (collision && collision.position) {
        drawCircle(dom.main, collision.position, 3, "rgba(96, 125, 139, 1)");
      }
    }
  });

  state.paths.forEach((p: Path) => {
    drawPath(dom.main, p, "rgba(178, 223, 219, 1)");
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(dom.main, focussedCharacter.kinematic.position);
    }
  }
}
