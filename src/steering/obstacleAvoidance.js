// @flow

import {
  add,
  distance,
  multiply,
  subtract,
  normalise,
  vectorToRadians,
  radiansToVector,
} from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import type { Vector } from "../../lib/vector.js";
import type { Segment } from "../../lib/path.js";
import type { Shape } from "../../lib/shape.js";
import { findFirstIntersection } from "../../lib/shape.js";

import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

type Collision = {
  position: Vector,
  normal: Vector,
};

export function getNormals([a, b]: Segment): [Vector, Vector] {
  const [dx, dy] = subtract(a, b);
  return [
    [-dy, dx],
    [dy, -dx],
  ];
}

export function getCollision(seg: Segment, shape: Shape): Collision | null {
  // The line extending from the character

  const intersection = findFirstIntersection(seg, shape);

  if (intersection) {
    // Here we get the normals for the intersected segment
    const normals = getNormals(intersection.segment);

    // We want the normal on the same side as the character
    const closestNormal =
      distance(normals[0], seg[0]) < distance(normals[1], seg[0])
        ? normals[0]
        : normals[1];

    // Let's define the normal as a vector relative to the intersection point,
    // with a distance of 1, on the character side of the intersection.

    return {
      position: intersection.point,
      normal: normalise(closestNormal),
    };
  }

  return null;
}

function getWhiskerRay(
  k: Kinematic,
  radians: number,
  magnitude: number
): Segment {
  const bearing = vectorToRadians(k.velocity) - radians;
  return [
    k.position,
    add(k.position, multiply(radiansToVector(bearing), magnitude)),
  ];
}

type Config = {
  avoidDistance: number,
  lookaheadMain: number,
  lookaheadSide: number,
  maxAcceleration: number,
};

export function obstacleAvoidance(
  character: Kinematic,
  shape: Shape,
  config: Config
): Steering {
  const w0 = getWhiskerRay(character, 0, config.lookaheadMain);
  const w1 = getWhiskerRay(character, 0.2, config.lookaheadSide);
  const w2 = getWhiskerRay(character, -0.2, config.lookaheadSide);

  const collision =
    getCollision(w1, shape) ||
    getCollision(w2, shape) ||
    getCollision(w0, shape);

  // If have no collision, do nothing
  if (!collision) {
    return {
      angular: lookWhereYouAreGoing(character).angular,
      linear: [0, 0],
    };
  }

  // Otherwise create a target
  const targetPosition = add(
    collision.position,
    multiply(collision.normal, config.avoidDistance)
  );

  // 2. Delegate to seek
  return seek(character, targetPosition, config.maxAcceleration);
}
