import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Obstacle Avoidance",
    description: "This character exhibits the collision avoidance behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [450, 580],
            velocity: [-2, -15],
            orientation: -1.5,
            rotation: 0,
          },
          new steering.ObstacleAvoidance("s1")
        ),
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
    paths: new Map(),
  };
}
