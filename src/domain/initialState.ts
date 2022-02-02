import type { State } from "@domain/types.js";

import { Face, Wander, None } from "@steering/index.js";

export const initialState: State = {
  scene: [800, 800],
  isPaused: true,
  isSettingTarget: false,
  focussedCharacterId: "_1",
  characters: new Map([
    [
      "_1",
      {
        kinematic: {
          maxSpeed: 45,
          position: [160, 180],
          velocity: [0, 0],
          orientation: 2 * Math.PI,
          rotation: 0,
        },
        behaviour: new Face("_2"),
      },
    ],
    [
      "_2",
      {
        kinematic: {
          maxSpeed: 45,
          position: [60, 80],
          velocity: [0, 0],
          orientation: -1.5 * Math.PI,
          rotation: 0,
        },
        behaviour: new None(),
      },
    ],
    [
      "_3",
      {
        kinematic: {
          maxSpeed: 45,
          position: [360, 380],
          velocity: [0, 0],
          orientation: 1.5 * Math.PI,
          rotation: 0,
        },
        behaviour: new None(),
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
            [-20, -25], // TL
            [-20, 20], // BL
            [-15, -15], // BR
            [75, -35], // TR
          ],
        },
      },
    ],
  ]),
  paths: new Map([
    [
      "p1",
      {
        position: [200, 200],
        points: [
          [600, 50],
          [300, 150],
          [200, 350],
          [300, 600],
          [600, 650],
          [625, 500],
        ],
      },
    ],
  ]),
};
