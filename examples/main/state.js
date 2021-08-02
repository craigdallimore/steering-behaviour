// @flow
import type { Kinematic } from "../../lib/kinematic.js";
import type { Path } from "../../lib/path.js";

export type CharacterId = string;

export type SteeringBehaviour =
  | "ALIGN"
  | "ARRIVE"
  | "FACE"
  | "LOOK_WHERE_YOU_ARE_GOING"
  | "MATCH_VELOCITY"
  | "PURSUE"
  | "SEEK"
  | "SEPARATION"
  | "FOLLOW_PATH_CHASE_RABBIT"
  | "FOLLOW_PATH_PREDICT"
  | "WANDER";
type MouseEffect = "CHARACTER-CLICK" | "TARGET-CLICK" | "TARGET-MOVE";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: SteeringBehaviour,
  focussedCharacterId: null | CharacterId,
  characters: Map<CharacterId, Kinematic>,
  mouseEffect: MouseEffect,
  path: Path,
|};

export const initialState: State = {
  isPaused: true,
  focussedCharacterId: null,
  selectedBehaviour: "SEPARATION",
  mouseEffect: "CHARACTER-CLICK",
  characters: new Map([
    [
      "aa",
      {
        position: [380, 90],
        velocity: [20, 0],
        orientation: 0.5 * Math.PI,
        rotation: 0,
      },
    ],
    [
      "bb",
      {
        position: [500, 100],
        velocity: [0, 0],
        orientation: 0.5 * Math.PI,
        rotation: 0,
      },
    ],
  ]),
  path: [
    [600, 50],
    [300, 150],
    [200, 350],
    [300, 600],
    [600, 650],
    [625, 500],
  ],
};
