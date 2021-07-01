// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type State = {
  character: Kinematic,
  target: Kinematic,
};

export const initialState: State = {
  target: {
    position: [10, 10],
    velocity: [0, 0],
    orientation: 0.1 * Math.PI,
    rotation: 0,
  },
  character: {
    position: [150, 150],
    velocity: [0, 0],
    orientation: -0.5 * Math.PI,
    rotation: 0,
  },
};