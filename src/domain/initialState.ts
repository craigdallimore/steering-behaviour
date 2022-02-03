import type { State } from "@domain/types";

import * as steering from "@steering/index";

export const initialState: State = {
  ui: {
    actionFeedbackCount: -1,
    canvasDimensions: [800, 800],
    isPaused: true,
    isSettingTarget: false,
    focussedCharacterId: "_1",
    focussedScenarioId: "SC_01",
  },
  scenarioMap: new Map([
    [
      "SC_01",
      {
        name: "Scenario 1",
        description: "This is an example scenario",
        characters: new Map([
          [
            "_1",
            {
              kinematic: {
                maxSpeed: 45,
                position: [20, 20],
                velocity: [10, 0],
                orientation: 2 * Math.PI,
                rotation: 0,
              },
              behaviour: new steering.CollisionAvoidance(),
            },
          ],
          [
            "_2",
            {
              kinematic: {
                maxSpeed: 45,
                position: [190, 60],
                velocity: [0, 0],
                orientation: -1.5 * Math.PI,
                rotation: 0,
              },
              behaviour: new steering.None(),
            },
          ],
          [
            "_3",
            {
              kinematic: {
                maxSpeed: 45,
                position: [232, 110],
                velocity: [0, 0],
                orientation: 1.5 * Math.PI,
                rotation: 0,
              },
              behaviour: new steering.None(),
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
      },
    ],
  ]),
};
