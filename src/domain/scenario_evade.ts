import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Evade",
    description:
      "The cat has the 'wander' behaviour, so it is not attempting to catch the mouse. The mouse has the 'evade' behaviour. This causes it to guess where the cat is going and to distance itself from that position as fast as it can.",
    characters: new Map([
      [
        "mouse",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [300, 300],
            velocity: [0, 0],
            orientation: 2 * Math.PI,
            rotation: 0,
          },
          [new steering.Evade("cat")],
          "🐭"
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
            velocity: [-10, -10],
            orientation: 1.25 * Math.PI,
            rotation: 0,
          },
          [new steering.Wander()],
          "😺"
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
