// @flow

import { add, multiply, normalise } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import type { Vector } from "../../lib/vector.js";
import { seek } from "./seek.js";

type Collision = {
  position: Vector,
  normal: Vector,
};

function getCollision(position: Vector, ray: Vector): Collision | null {
  return null;
}

export function obstacleAvoidance(character: Kinematic): Steering {
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
  const collision = getCollision(character.position, rayVector);

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
