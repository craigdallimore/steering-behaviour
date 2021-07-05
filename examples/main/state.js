// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: "SEEK" | "ARRIVE" | "ALIGN" | "MATCH_VELOCITY",
  positionWithMouse: "CHARACTER" | "TARGET",
  character: Kinematic,
  target: Kinematic,
|};

export const initialState: State = {
  isPaused: true,
  selectedBehaviour: "MATCH_VELOCITY",
  positionWithMouse: "CHARACTER",
  target: {
    position: [10, 10],
    velocity: [30, 0],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
  character: {
    position: [150, 150],
    velocity: [-30, -30],
    orientation: 1.75 * Math.PI,
    rotation: 0,
  },
};
