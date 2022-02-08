import { AbstractBehaviour } from "./abstractBehaviour";
import getCollision from "@lib/getCollision";
import { add, multiply, vectorToRadians, radiansToVector } from "@lib/vector";
import type {
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
    const w1 = getWhiskerRay(kinematic, 0.2, this.lookaheadSide);
    const w2 = getWhiskerRay(kinematic, -0.2, this.lookaheadSide);

    const collision =
      getCollision(w1, shape) ||
      getCollision(w2, shape) ||
      getCollision(w0, shape);

    this.debug.vectors = collision ? [multiply(collision.normal, 15)] : [];
    this.debug.points = collision ? [collision.position] : [];

    // If have no collision, do nothing
    if (!collision) {
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    // Otherwise create a target
    const targetPosition = add(
      collision.position,
      multiply(collision.normal, this.avoidDistance)
    );

    // 2. Delegate to seek
    return this.seek.calculate(kinematic, targetPosition);
  }
}
