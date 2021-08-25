// @flow

import { add, multiply, normalise } from "../../lib/vector.js";
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

export function getCollision(
  position: Vector,
  ray: Vector,
  shape: Shape
): Collision | null {
  // The line extending from the character
  const seg: Segment = [position, add(ray, position)];

  const intersection = findFirstIntersection(seg, shape);

  if (intersection) {
    /*
    const edge = intersection.segment;
    const v = subtract(edge[1], edge[0]);
    const u = [edge[1][1] - edge[0][1], edge[0][0] - edge[1][0]];

    const n = Math.sqrt(dot(u, u));
    // const dir = dot(
    */

    return {
      position: intersection.point,
      normal: [0, 0],
    };
  }

  // To work out:
  // - how to find the normal

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
