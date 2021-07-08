// @flow
import type { Kinematic } from "../../lib/kinematic.js";

export type SteeringBehaviour =
  | "ALIGN"
  | "ARRIVE"
  | "FACE"
  | "LOOK_WHERE_YOU_ARE_GOING"
  | "MATCH_VELOCITY"
  | "PURSUE"
  | "SEEK"
  | "WANDER";
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
  selectedBehaviour: "WANDER",
  selectedItem: "CHARACTER",
  target: {
    position: [10, 50],
    velocity: [0, 0],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
  character: {
    position: [400, 400],
    velocity: [0, 0],
    orientation: 1.5 * Math.PI,
    rotation: 0,
  },
};
