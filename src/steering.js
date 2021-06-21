// @flow

import type { Kinematic } from "../lib/kinematic.js";
import {
  distance,
  subtract,
  length,
  multiply,
  normalise,
  type Vector,
} from "../lib/vector.js";

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

// ----------------------------------------------------------------------------

const maxAcceleration = 25;
const maxSpeed = 55;
const targetRadius = 5;
const slowRadius = 30;
const timeToTarget = 0.1;

export function getSeekSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  const linear = multiply(
    normalise(subtract(target.position, character.position)),
    maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}

export function getArriveSteering(
  character: Kinematic,
  target: Kinematic
): Steering | null {
  const distanceToTarget = distance(character.position, target.position);

  if (distanceToTarget < targetRadius) {
    // Arrived
    return null;
  }

  const idealSpeed =
    distanceToTarget > slowRadius
      ? maxSpeed
      : (maxSpeed * distanceToTarget) / slowRadius;

  const idealVelocity = multiply(
    normalise(subtract(character.position, target.position)),
    idealSpeed
  );
  const reduced = subtract(idealVelocity, character.velocity);

  const linear = multiply(reduced, 1 / timeToTarget);

  const finalLinear =
    length(linear) > maxAcceleration
      ? normalise(linear)
      : multiply(linear, maxAcceleration);

  return {
    angular: 0,
    linear: finalLinear,
  };
}