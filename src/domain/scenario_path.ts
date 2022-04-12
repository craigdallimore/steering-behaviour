import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Follow path",
    description:
      "There are two path following behaviours - chase rabbit, and predictive.",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [20, 20],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          [
            new steering.FollowPathPredict("p1"),
            new steering.LookWhereYouAreGoing(),
          ]
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
          [
            new steering.Pursue("_1"),
            new steering.Separation(),
            new steering.LookWhereYouAreGoing(),
          ]
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
          [
            new steering.Pursue("_1"),
            new steering.Separation(),
            new steering.LookWhereYouAreGoing(),
          ]
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
            [150, 50],
            [150, 240],
            [250, 480],
            [400, 600],
            [550, 480],
            [700, 240],
            [700, 50],
          ],
        },
      ],
    ]),
  };
}
