// @flow
import type { Kinematic } from "../../lib/kinematic.js";
import type { Path } from "../../lib/path.js";

export type CharacterId = string;

export type Character = {
  kinematic: Kinematic,
  target: CharacterId | null,
};

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
//type MouseEffect = "CHARACTER-CLICK" | "TARGET-CLICK" | "TARGET-MOVE";

export type State = {|
  isPaused: boolean,
  selectedBehaviour: SteeringBehaviour,
  focussedCharacterId: null | CharacterId,
  characters: Map<CharacterId, Character>,
  //mouseEffect: MouseEffect,
  path: Path,
|};

export const initialState: State = {
  isPaused: true,
  focussedCharacterId: "aa",
  selectedBehaviour: "SEPARATION",
  //mouseEffect: "CHARACTER-CLICK",
  characters: new Map([
    [
      "aa",
      {
        kinematic: {
          position: [380, 90],
          velocity: [20, 0],
          orientation: 0.5 * Math.PI,
          rotation: 0,
        },
        target: "bb",
      },
    ],
    [
      "bb",
      {
        kinematic: {
          position: [100, 100],
          velocity: [40, 0],
          orientation: 0.5 * Math.PI,
          rotation: 0,
        },
        target: null,
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
