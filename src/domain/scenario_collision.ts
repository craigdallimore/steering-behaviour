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
            velocity: [0, 15],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.CollisionAvoidance()]
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
          []
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxSpeed: 45,
            position: [402, 440],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxSpeed: 45,
            position: [420, 480],
            velocity: [0, -12],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
      [
        "_5",
        new Character(
          {
            maxSpeed: 45,
            position: [340, 520],
            velocity: [0, -12],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
      [
        "_6",
        new Character(
          {
            maxSpeed: 45,
            position: [360, 540],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
      [
        "_7",
        new Character(
          {
            maxSpeed: 45,
            position: [380, 600],
            velocity: [0, -15],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
        ),
      ],
      [
        "_8",
        new Character(
          {
            maxSpeed: 45,
            position: [400, 650],
            velocity: [0, -8],
            orientation: 1.5 * Math.PI,
            rotation: 0,
          },
          []
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
          []
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
