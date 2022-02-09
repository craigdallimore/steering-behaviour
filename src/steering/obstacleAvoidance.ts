import { AbstractBehaviour } from "./abstractBehaviour";
import getCollision from "@lib/getCollision";
import {
  add,
  length,
  multiply,
  radiansToVector,
  subtract,
  vectorToRadians,
} from "@lib/vector";
import type {
  Collision,
  Debug,
  Edge,
  Kinematic,
  Shape,
  ShapeId,
  Steering,
} from "@domain/types";

import Seek from "./seek";

function getWhiskerRay(k: Kinematic, radians: number, magnitude: number): Edge {
  const bearing = vectorToRadians(k.velocity) - radians;
  return [
    k.position,
    add(k.position, multiply(radiansToVector(bearing), magnitude)),
  ];
}

export default class ObstacleAvoidance extends AbstractBehaviour {
  readonly name = "OBSTACLE_AVOIDANCE";
  shapeId: ShapeId;
  seek: Seek;
  avoidDistance: number;
  lookaheadMain: number;
  lookaheadSide: number;
  debug: Debug;
  constructor(
    shapeId: ShapeId,
    avoidDistance?: number,
    lookaheadMain?: number,
    lookaheadSide?: number
  ) {
    super();
    // Holds the minimum distance to a wall (i.e., how far to avoid collision)
    // should be greater than the radius of the character
    this.avoidDistance = avoidDistance || 50;
    // Holds the distance to look ahead for a collision
    // (i.e., the length of the collision ray)
    this.lookaheadMain = lookaheadMain || 150;
    this.lookaheadSide = lookaheadSide || 85;

    this.shapeId = shapeId;
    this.seek = new Seek("");

    this.debug = {
      edges: [],
      points: [],
      vectors: [],
    };
  }
  calculate(kinematic: Kinematic, shape: Shape): Steering {
    const w0 = getWhiskerRay(kinematic, 0, this.lookaheadMain);
    const w1 = getWhiskerRay(kinematic, 0.1, this.lookaheadSide);
    const w2 = getWhiskerRay(kinematic, -0.1, this.lookaheadSide);

    // find the nearest collision to the kinematic
    const collision: Collision | null = [w0, w1, w2].reduce(
      (acc: Collision | null, ray) => {
        const collision = getCollision(ray, shape);
        if (!acc) {
          return collision;
        }
        if (!collision) {
          return acc;
        }

        const distanceFromCollision = length(
          subtract(kinematic.position, collision.position)
        );
        const distanceFromAcc = length(
          subtract(kinematic.position, acc.position)
        );

        return distanceFromCollision < distanceFromAcc ? collision : acc;
      },
      null
    );

    // Show the whiskers
    this.debug.edges = [w0, w1, w2];

    // If have no collision, do nothing
    if (!collision) {
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    // Show collision points
    this.debug.points = [collision.position];

    this.debug.vectors = [multiply(collision.normal, 25)];

    // Otherwise create a target
    const targetPosition = add(
      collision.position,
      multiply(collision.normal, this.avoidDistance)
    );

    // 2. Delegate to seek
    return this.seek.calculate(kinematic, targetPosition);
  }
}
