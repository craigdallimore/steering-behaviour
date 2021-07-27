// @flow
import type { Kinematic } from "../../lib/kinematic.js";
import type { Path } from "../../lib/path.js";

export type SteeringBehaviour =
  | "ALIGN"
  | "ARRIVE"
  | "FACE"
  | "LOOK_WHERE_YOU_ARE_GOING"
  | "MATCH_VELOCITY"
  | "PURSUE"
  | "SEEK"
  | "CHASE_RABBIT"
  | "WANDER";
type MouseEffect = "CHARACTER-CLICK" | "TARGET-CLICK" | "TARGET-MOVE";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: SteeringBehaviour,
  mouseEffect: MouseEffect,
  character: Kinematic,
  target: Kinematic,
  path: Path,
|};

export const initialState: State = {
  isPaused: true,
  selectedBehaviour: "WANDER",
  mouseEffect: "CHARACTER-CLICK",
  target: {
    position: [30, 30],
    velocity: [0, 0],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
  character: {
    position: [600, 50],
    velocity: [0, 0],
    orientation: 1.25 * Math.PI,
    rotation: 0,
  },
  path: [
    [600, 50],
    [300, 150],
    [200, 350],
    [300, 600],
    [600, 650],
    [625, 500],
  ],
};
