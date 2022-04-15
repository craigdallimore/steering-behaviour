import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Obstacle Avoidance (walls)",
    description: "This character exhibits the obstacle avoidance behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [200, 65],
            velocity: [-12, 10],
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
            isClosed: false,
            position: [40, 40],
            points: [
              [0, 0],
              [10, 0],
              [10, 400],
              [0, 400],
            ],
          },
        },
      ],
      [
        "wall--right",
        {
          path: {
            label: "wall2path",
            isClosed: false,
            position: [450, 40],
            points: [
              [0, 0],
              [10, 0],
              [10, 400],
              [0, 400],
            ],
          },
        },
      ],
      [
        "wall--top",
        {
          path: {
            label: "wall3path",
            isClosed: false,
            position: [50, 30],
            points: [
              [0, 0],
              [400, 0],
              [400, 10],
              [0, 10],
            ],
          },
        },
      ],
      [
        "wall--bottom",
        {
          path: {
            label: "wall4path",
            isClosed: false,
            position: [50, 440],
            points: [
              [0, 0],
              [400, 0],
              [400, 10],
              [0, 10],
            ],
          },
        },
      ],
      [
        "box--top",
        {
          path: {
            label: "wall2path",
            isClosed: false,
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
