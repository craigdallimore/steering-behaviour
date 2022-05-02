import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Collision Avoidance",
    description:
      "The top character has been given the collision avoidance behaviour. It attempts to steer to avoid collisions with the other characters.",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [200, 80],
            velocity: [0, 15],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.CollisionAvoidance(),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [180, 200],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [202, 240],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [220, 280],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [140, 320],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [160, 340],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [180, 400],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [200, 450],
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
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [220, 330],
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
