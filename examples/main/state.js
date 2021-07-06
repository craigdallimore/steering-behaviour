// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type SteeringBehaviour =
  | "ARRIVE"
  | "ALIGN"
  | "SEEK"
  | "MATCH_VELOCITY"
  | "PURSUE"
  | "WANDER"
  | "FACE";
type Item = "CHARACTER" | "TARGET";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: SteeringBehaviour,
  selectedItem: Item,
  character: Kinematic,
  target: Kinematic,
|};

export const initialState: State = {
  isPaused: true,
  selectedBehaviour: "PURSUE",
  selectedItem: "CHARACTER",
  target: {
    position: [10, 30],
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
