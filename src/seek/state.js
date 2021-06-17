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
    position: [50, 50],
    velocity: [0, 0],
    orientation: 0,
    rotation: 0,
  },
  character: {
    position: [250, 250],
    velocity: [0, 0],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
};
