import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Obstacle Avoidance (walls)",
    description: "This character exhibits the collision avoidance behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [300, 25],
            velocity: [-2, 10],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.ObstacleAvoidance(),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
    ]),
    shapes: new Map([
      [
        "wall--left",
        {
          path: {
            label: "wall1path",
            position: [200, 40],
            points: [
              [0, 0],
              [10, 0],
              [10, 700],
              [0, 700],
            ],
          },
        },
      ],
      [
        "wall--right",
        {
          path: {
            label: "wall2path",
            position: [340, 40],
            points: [
              [0, 0],
              [10, 0],
              [10, 700],
              [0, 700],
            ],
          },
        },
      ],
      [
        "box--top",
        {
          path: {
            label: "wall2path",
            position: [315, 240],
            points: [
              [0, 0],
              [30, 0],
              [30, 30],
              [0, 30],
            ],
          },
        },
      ],
    ]),
    paths: new Map(),
  };
}
