// @flow

import { type State } from "./state.js";
import { length } from "../../lib/vector.js";

let cx = 0;
let cy = 0;
let cz = 0;

export default function drawMeta(
  chart: CanvasRenderingContext2D,
  state: State,
  time: number
): void {
  const { target, character } = state;
  if (
    character.position[0] === target.position[0] &&
    character.position[1] === target.position[1]
  ) {
    chart.clearRect(0, 0, 300, 200);
    cx = 0;
  }

  cx += state.isPaused ? 0 : time + 0.3;

  // Draw velocity
  cy = 100 - length(character.velocity);
  chart.save();
  chart.fillStyle = "rgb(240, 8, 6)";
  chart.transform(1, 0, 0, 1, cx, cy);
  chart.fillRect(cx, cy, 1, 1);
  chart.restore();

  // Draw velocity
  cz = character.position[0] * 0.2 + 50;
  chart.save();
  chart.fillStyle = "rgb(8, 240, 6)";
  chart.transform(1, 0, 0, 1, cx, cy);
  chart.fillRect(cx, cz, 1, 1);
  chart.restore();
}
