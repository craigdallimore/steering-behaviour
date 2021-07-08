// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawCircle from "../../lib/drawCircle.js";
import drawVector from "../../lib/drawVector.js";

import type { State } from "./state.js";
import { type Vector } from "../../lib/vector.js";
import {
  add,
  multiply,
  degreesToVector,
  radiansToVector,
} from "../../lib/vector.js";

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
  },
  state: State
): void {
  dom.main.clearRect(0, 0, 800, 800);
  drawGrid(dom.main);

  // Target
  drawArrow(dom.main, state.target);

  // Character
  drawArrow(dom.main, state.character);

  // FIGURE OUT WANDER --------------------------------------------------------

  const wanderOffset = 50;
  const wanderRadius = 20;

  const wanderOffsetVector = multiply(
    radiansToVector(state.character.orientation),
    wanderOffset
  );

  const wanderPosition: Vector = add(
    state.character.position,
    wanderOffsetVector
  );

  const wander = {
    position: wanderPosition,
    orientation: 0,
    velocity: [0, 0],
    rotation: 0,
  };
  const from = wanderPosition;

  const wanderOrientation = Math.random() * 360;

  const to = multiply(degreesToVector(wanderOrientation), wanderRadius * 2);

  drawCircle(dom.main, wander, wanderRadius, "rgba(100, 100, 100, 0.3)");
  drawVector(dom.main, from, to, "rgba(100, 100, 100, 0.5)");
}
