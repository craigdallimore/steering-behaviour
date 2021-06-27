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
const slowRadius = 60;

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
  const directionToTarget = subtract(target.position, character.position);

  if (distanceToTarget < targetRadius) {
    return null;
  }

  const idealSpeed =
    distanceToTarget > slowRadius
      ? maxSpeed
      : maxSpeed * (distanceToTarget / slowRadius);

  // Here we appear to take a vector from the two points, and relate it to
  // the ideal speed
  const idealVelocity = multiply(normalise(directionToTarget), idealSpeed);

  const reduced = subtract(idealVelocity, character.velocity);

  // A higher value will arrive sooner
  const linear = multiply(reduced, 0.3);

  const finalLinear =
    length(linear) > maxAcceleration
      ? multiply(normalise(linear), maxAcceleration)
      : linear;

  return {
    angular: 0,
    linear: finalLinear,
  };
}
