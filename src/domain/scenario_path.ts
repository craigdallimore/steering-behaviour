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
          [new steering.FollowPathPredict("p1")]
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map([
      [
        "p1",
        {
          label: "Main path",
          position: [20, 20],
          points: [
            [50, 50],
            [50, 240],
            [150, 480],
            [300, 600],
            [450, 480],
            [600, 240],
            [600, 50],
          ],
        },
      ],
    ]),
  };
}
