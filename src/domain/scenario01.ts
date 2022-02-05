import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

const scenario: Scenario = {
  name: "Scenario 1",
  description: "This is an example scenario",
  characters: new Map([
    [
      "_1",
      new Character(
        {
          maxSpeed: 45,
          position: [20, 20],
          velocity: [10, 0],
          orientation: 2 * Math.PI,
          rotation: 0,
        },
        new steering.Wander()
      ),
    ],
    [
      "_2",
      new Character({
        maxSpeed: 45,
        position: [190, 60],
        velocity: [0, 0],
        orientation: -1.5 * Math.PI,
        rotation: 0,
      }),
    ],
    [
      "_3",
      new Character({
        maxSpeed: 45,
        position: [232, 110],
        velocity: [0, 0],
        orientation: 1.5 * Math.PI,
        rotation: 0,
      }),
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

export default scenario;
