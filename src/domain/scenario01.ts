import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Wander / Path",
    description:
      "This scenario starts with a character and a path. You can assign a 'Follow Path' steering to see it change behaviour.",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [50, 50],
            velocity: [10, 0],
            orientation: 2 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map([
      [
        "p1",
        {
          label: "Path 1",
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
}
