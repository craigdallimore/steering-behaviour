import type { State } from "@domain/types.js";

export const initialState: State = {
  isPaused: true,
  isSettingTarget: false,
  focussedCharacterId: "topleft",
  characters: new Map([
    [
      "topleft",
      {
        kinematic: {
          position: [460, 480],
          velocity: [-10, -10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "top",
      {
        kinematic: {
          position: [480, 480],
          velocity: [0, -10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "topright",
      {
        kinematic: {
          position: [500, 480],
          velocity: [10, -10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "bottom",
      {
        kinematic: {
          position: [480, 520],
          velocity: [0, 10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "left",
      {
        kinematic: {
          position: [460, 500],
          velocity: [-10, 0],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "right",
      {
        kinematic: {
          position: [500, 500],
          velocity: [10, 0],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "bottomleft",
      {
        kinematic: {
          position: [460, 520],
          velocity: [-10, 10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
        target: null,
        path: null,
      },
    ],
    [
      "bottomright",
      {
        kinematic: {
          position: [500, 520],
          velocity: [10, 10],
          orientation: 0,
          rotation: 0,
        },
        behaviour: "OBSTACLE_AVOIDANCE",
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
