import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Wander",
    description: "This character exhibits the wander behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 380],
            velocity: [0, 0],
            orientation: (3 * Math.PI) / 2,
            rotation: 0,
          },
          new steering.Wander()
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxSpeed: 45,
            position: [380, 400],
            velocity: [0, 0],
            orientation: Math.PI,
            rotation: 0,
          },
          new steering.Wander()
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 420],
            velocity: [0, 0],
            orientation: Math.PI / 2,
            rotation: 0,
          },
          new steering.Wander()
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxSpeed: 45,
            position: [420, 400],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          new steering.Wander()
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
