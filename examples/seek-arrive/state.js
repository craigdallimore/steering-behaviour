// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type State = {
  isPaused: boolean,
  character: Kinematic,
  target: Kinematic,
};

export const initialState: State = {
  isPaused: false,
  target: {
    position: [150, 150],
    velocity: [0, 0],
    orientation: 0,
    rotation: 0,
  },
  character: {
    position: [110, 10],
    velocity: [0, 180],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
};
