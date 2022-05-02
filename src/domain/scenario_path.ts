import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Follow path",
    description:
      "The mouse has the 'Follow Path' behaviour; it attempts to move towards the next point on the path. The cats are attempting to predict where the mouse will be next and intercept it, using the 'pursue' behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 55,
            maxAngularAcceleration: 140,
            maxSpeed: 55,
            position: [20, 20],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          [new steering.FollowPathPredict("p1")],
          "🐭"
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxAcceleration: 20,
            maxAngularAcceleration: 140,
            maxSpeed: 60,
            position: [120, 320],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          [new steering.Pursue("_1"), new steering.Separation()],
          "😺"
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxAcceleration: 20,
            maxAngularAcceleration: 140,
            maxSpeed: 40,
            position: [120, 140],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          [new steering.Pursue("_1"), new steering.Separation()],
          "😾"
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map([
      [
        "p1",
        {
          label: "Closed path",
          position: [20, 20],
          isClosed: true,
          points: [
            [50, 150],
            [30, 240],
            [250, 380],
            [100, 500],
            [350, 580],
            [500, 240],
            [400, 50],
          ],
        },
      ],
    ]),
  };
}
