// @flow
import type { Kinematic } from "../../lib/kinematic.js";
import type { Path, PathId } from "../../lib/path.js";

export type CharacterId = string;

export type Character = {
  kinematic: Kinematic,
  behaviour: SteeringBehaviour,
  target: CharacterId | null,
  path: PathId | null,
};

export type SteeringBehaviour =
  | "NONE"
  | "ALIGN"
  | "ARRIVE"
  | "COLLISION_AVOIDANCE"
  | "EVADE"
  | "FACE"
  | "FLEE"
  | "FOLLOW_PATH_CHASE_RABBIT"
  | "FOLLOW_PATH_PREDICT"
  | "LOOK_WHERE_YOU_ARE_GOING"
  | "MATCH_VELOCITY"
  | "OBSTACLE_AVOIDANCE"
  | "PURSUE"
  | "SEEK"
  | "SEPARATION"
  | "WANDER";

export type State = {|
  isPaused: boolean,
  isSettingTarget: boolean,
  focussedCharacterId: null | CharacterId,
  characters: Map<CharacterId, Character>,
  paths: Map<PathId, Path>,
|};

export const initialState: State = {
  isPaused: true,
  isSettingTarget: false,
  focussedCharacterId: "aa",
  characters: new Map([
    [
      "aa",
      {
        kinematic: {
          position: [660, 390],
          velocity: [-20, 0],
          orientation: 1.5 * Math.PI,
          rotation: 0,
        },
        behaviour: "NONE",
        target: null,
        path: null,
      },
    ],
  ]),
  paths: new Map([
    /*
    [
      "p1",
      [
        [600, 50],
        [300, 150],
        [200, 350],
        [300, 600],
        [600, 650],
        [625, 500],
      ],
    ],
    */
  ]),
};
