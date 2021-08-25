// @flow

import {
  add,
  distance,
  multiply,
  subtract,
  normalise,
} from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import type { Vector } from "../../lib/vector.js";
import type { Segment } from "../../lib/path.js";
import type { Shape } from "../../lib/shape.js";
import { findFirstIntersection } from "../../lib/shape.js";

import { seek } from "./seek.js";

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

export function getCollision(
  characterPosition: Vector,
  ray: Vector,
  shape: Shape
): Collision | null {
  // The line extending from the character
  const seg: Segment = [characterPosition, add(ray, characterPosition)];

  const intersection = findFirstIntersection(seg, shape);

  if (intersection) {
    // Here we get the normals for the intersected segment
    const normals = getNormals(intersection.segment);

    // We want the normal on the same side as the character
    const closestNormal =
      distance(normals[0], characterPosition) <
      distance(normals[1], characterPosition)
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

export function obstacleAvoidance(
  character: Kinematic,
  shape: Shape
): Steering {
  // Config

  // Holds the minimum distance to a wall (i.e., how far to avoid collision)
  // should be greater than the radius of the character
  const avoidDistance = 10;

  // Holds the distance to look ahead for a collision
  // (i.e., the length of the collision ray)
  const lookahead = 10;

  // 1. Calculate the target to delegate to seek

  // Calculate the collision ray vector
  const rayVector = multiply(normalise(character.velocity), lookahead);

  // Find the collision
  const collision = getCollision(character.position, rayVector, shape);

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
    multiply(collision.normal, avoidDistance)
  );

  // 2. Delegate to seek
  return seek(character, targetPosition);
}
