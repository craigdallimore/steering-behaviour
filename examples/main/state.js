// @flow
import type { Kinematic } from "../../lib/kinematic.js";
import type { Path, PathId } from "../../lib/path.js";
import type { Shape, ShapeId } from "../../lib/shape.js";

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
  shapes: Map<ShapeId, Shape>,
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
          position: [431, 423],
          velocity: [-20, -20],
          orientation: 1.75 * Math.PI,
          rotation: 0,
        },
        behaviour: "NONE",
        target: null,
        path: null,
      },
    ],
  ]),
  shapes: new Map([
    [
      "s1",
      {
        path: {
          position: [400, 400],
          points: [
            [-10, -10],
            [-10, 10],
            [10, 10],
            [10, -10],
          ],
        },
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
