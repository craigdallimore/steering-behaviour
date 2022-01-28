import type { State } from "@domain/types.js";

import { Align, None } from "@steering/behaviours";

export const initialState: State = {
  isPaused: true,
  isSettingTarget: false,
  focussedCharacterId: "_1",
  characters: new Map([
    [
      "_1",
      {
        kinematic: {
          maxSpeed: 45,
          position: [460, 480],
          velocity: [0, 0],
          orientation: 0,
          rotation: 0,
        },
        behaviour: new Align("_2"),
      },
    ],
    [
      "_2",
      {
        kinematic: {
          maxSpeed: 45,
          position: [60, 80],
          velocity: [0, 0],
          orientation: 2,
          rotation: 0,
        },
        behaviour: new None(),
      },
    ],
  ]),
  shapes: new Map([
    /*
    [
      "s1",
      {
        path: {
          position: [100, 100],
          points: [
            [-20, -25], // TL
            [-20, 20], // BL
            [-15, -15], // BR
            [75, -35], // TR
          ],
        },
      },
    ],
    */
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
