import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Collision Avoidance",
    description: "This character exhibits the collision avoidance behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 280],
            velocity: [0, 25],
            orientation: 1.5,
            rotation: 0,
          },
          new steering.CollisionAvoidance()
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxSpeed: 45,
            position: [380, 400],
            velocity: [0, -10],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      /*
      [
        "_3",
        new Character(
          {
            maxSpeed: 45,
            position: [402, 420],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxSpeed: 45,
            position: [420, 400],
            velocity: [0, -12],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_5",
        new Character(
          {
            maxSpeed: 45,
            position: [340, 430],
            velocity: [0, -12],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_6",
        new Character(
          {
            maxSpeed: 45,
            position: [360, 490],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_7",
        new Character(
          {
            maxSpeed: 45,
            position: [380, 490],
            velocity: [0, -15],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_8",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 540],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      [
        "_9",
        new Character(
          {
            maxSpeed: 45,
            position: [420, 550],
            velocity: [0, -10],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          new steering.None()
        ),
      ],
      */
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
