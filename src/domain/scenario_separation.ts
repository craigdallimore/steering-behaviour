import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Separation",
    description: "These characters move to separate themselves from each other",
    characters: new Map([
      [
        "_0",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 200],
            velocity: [0, 20],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [399, 400],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxSpeed: 45,
            position: [399, 401],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxSpeed: 45,
            position: [399, 399],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 400],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_5",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 401],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_6",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 399],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_7",
        new Character(
          {
            maxSpeed: 45,
            position: [401, 400],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_8",
        new Character(
          {
            maxSpeed: 45,
            position: [401, 399],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
      [
        "_9",
        new Character(
          {
            maxSpeed: 45,
            position: [401, 401],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.Separation()]
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
