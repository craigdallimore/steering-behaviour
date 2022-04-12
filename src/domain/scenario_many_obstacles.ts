import Character from "./character";
import { Scenario, Shape, ShapeId } from "./types";
import * as steering from "@steering/index";

const range1 = [50, 150, 250, 350, 450, 550];
const range2 = [100, 200, 300, 400, 500, 600];
const range3 = [150, 250, 350, 450, 550, 650];

type Pair = [ShapeId, Shape];

function makePair(x: number, z: number): Pair {
  const id: ShapeId = `${x}:${z}`;
  const shape: Shape = {
    path: {
      label: id,
      isClosed: false,
      position: [x, z],
      points: [
        [-10, -10], // TL
        [10, -10], // TR
        [10, 10], // BR
        [-10, 10], // BL
      ],
    },
  };

  return [id, shape];
}

const pairs1: Array<Pair> = range1
  .map((x) => range2.map((z) => makePair(x, z)))
  .flat();

const pairs2: Array<Pair> = range2
  .map((x) => range3.map((z) => makePair(x, z)))
  .flat();

export default function initScenario(): Scenario {
  return {
    name: "Obstacle Avoidance (many)",
    description: "This character exhibits the obstacle avoidance behaviour",
    characters: new Map([
      [
        "_1",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [300, 25],
            velocity: [2, 10],
            orientation: 1.5,
            rotation: 0,
          },
          [new steering.ObstacleAvoidance()]
        ),
      ],
    ]),
    shapes: new Map([...pairs1, ...pairs2]),
    paths: new Map(),
  };
}
