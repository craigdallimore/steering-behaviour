import Character from "./character";
import { Scenario } from "./types";

export default function initScenario(): Scenario {
  return {
    name: "Blank",
    description: "Blank",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [150, 150],
            velocity: [0, 0],
            orientation: 2 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
