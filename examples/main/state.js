// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: "SEEK" | "ARRIVE" | "ALIGN",
  positionWithMouse: "CHARACTER" | "TARGET",
  character: Kinematic,
  target: Kinematic,
|};

export const initialState: State = {
  isPaused: true,
  selectedBehaviour: "SEEK",
  positionWithMouse: "CHARACTER",
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
