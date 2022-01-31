import { AbstractBehaviour } from "./abstractBehaviour.js";
import {
  add,
  distance,
  multiply,
  subtract,
  normalise,
  vectorToRadians,
  radiansToVector,
} from "@lib/vector.js";
import type {
  Edge,
  Kinematic,
  Shape,
  ShapeId,
  Steering,
  Vector,
} from "@domain/types.js";

import { findFirstIntersection } from "@lib/shape.js";

import Seek from "./seek.js";

type Collision = {
  position: Vector;
  normal: Vector;
};

function getNormals([a, b]: Edge): [Vector, Vector] {
  const [dx, dy] = subtract(a, b);
  return [
    [-dy, dx],
    [dy, -dx],
  ];
}

function getCollision(seg: Edge, shape: Shape): Collision | null {
  // The line extending from the kinematic

  const intersection = findFirstIntersection(seg, shape);

  if (intersection) {
    // Here we get the normals for the intersected edge
    const normals = getNormals(intersection.edge);

    // We want the normal on the same side as the kinematic
    const closestNormal =
      distance(normals[0], seg[0]) < distance(normals[1], seg[0])
        ? normals[0]
        : normals[1];

    // Let's define the normal as a vector relative to the intersection point,
    // with a distance of 1, on the kinematic side of the intersection.

    return {
      position: intersection.point,
      normal: normalise(closestNormal),
    };
  }

  return null;
}

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
  constructor(
    shapeId: ShapeId,
    avoidDistance?: number,
    lookaheadMain?: number,
    lookaheadSide?: number
  ) {
    super();
    // Holds the minimum distance to a wall (i.e., how far to avoid collision)
    // should be greater than the radius of the character
    this.avoidDistance = avoidDistance || 20;
    // Holds the distance to look ahead for a collision
    // (i.e., the length of the collision ray)
    this.lookaheadMain = lookaheadMain || 150;
    this.lookaheadSide = lookaheadSide || 75;

    this.shapeId = shapeId;
    this.seek = new Seek("");
  }
  calculate(kinematic: Kinematic, shape: Shape): Steering {
    const w0 = getWhiskerRay(kinematic, 0, this.lookaheadMain);
    const w1 = getWhiskerRay(kinematic, 0.2, this.lookaheadSide);
    const w2 = getWhiskerRay(kinematic, -0.2, this.lookaheadSide);

    const collision =
      getCollision(w1, shape) ||
      getCollision(w2, shape) ||
      getCollision(w0, shape);

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
