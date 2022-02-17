import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Evade",
    description:
      "The evading character will attempt to flee the predicted future position of the pursuer",
    characters: new Map([
      [
        "mouse",
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
      [
        "cat",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [350, 350],
            velocity: [0, 0],
            orientation: 2 * Math.PI,
            rotation: 0,
          },
          [new steering.Pursue("mouse")]
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
