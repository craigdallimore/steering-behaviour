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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [400, 380],
            velocity: [0, 0],
            orientation: (3 * Math.PI) / 2,
            rotation: 0,
          },
          [new steering.Wander(), new steering.LookWhereYouAreGoing()]
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [380, 400],
            velocity: [0, 0],
            orientation: Math.PI,
            rotation: 0,
          },
          [new steering.Wander(), new steering.LookWhereYouAreGoing()]
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [400, 420],
            velocity: [0, 0],
            orientation: Math.PI / 2,
            rotation: 0,
          },
          [new steering.Wander(), new steering.LookWhereYouAreGoing()]
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [420, 400],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
          },
          [new steering.Wander(), new steering.LookWhereYouAreGoing()]
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}