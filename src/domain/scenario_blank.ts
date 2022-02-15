import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Blank",
    description: "Blank",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [150, 150],
            velocity: [0, 0],
            orientation: 2 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
