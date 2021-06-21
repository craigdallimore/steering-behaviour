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
    (character.position[0] === target.position[0] &&
      character.position[1] === target.position[1]) ||
    cx > 250
  ) {
    chart.clearRect(0, 0, 300, 200);
    cx = 0;
  }

  cx += state.isPaused ? 0 : time + 0.3;

  // Draw velocity (red)
  cy = 100 - length(character.velocity);
  chart.save();
  chart.fillStyle = "rgb(240, 8, 6)";
  chart.transform(1, 0, 0, 1, cx, cy);
  chart.fillRect(cx, cy, 1, 1);
  chart.restore();

  const distance = Math.hypot(
    target.position[0] - character.position[0],
    target.position[1] - character.position[1]
  );
  const h = Math.hypot(300, 300);

  // Draw distance to target
  cz = 100 - distance * (100 / h);
  chart.save();
  chart.fillStyle = "rgb(8, 240, 6)";
  chart.transform(1, 0, 0, 1, cx, cz);
  chart.fillRect(cx, cz, 1, 1);
  chart.restore();
}
