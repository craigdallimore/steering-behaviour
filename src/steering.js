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

// SEEK -----------------------------------------------------------------------

const maxAcceleration = 25;
const maxSpeed = 55;
const maxAngularAcceleration = 1;
const maxRotation = 2;
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

// ARRIVE ---------------------------------------------------------------------

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

// ALIGN ----------------------------------------------------------------------

function mapToRange(orientation: number): number {
  return (orientation % Math.PI) * 2;
}

export function getAlignSteering(
  character: Kinematic,
  target: Kinematic
): Steering | null {
  const rotation = mapToRange(target.orientation - character.orientation);
  const rotationSize = Math.abs(rotation); // book uses "rotationDirection"?

  if (rotationSize < targetRadius) {
    return null;
  }

  const idealRotation =
    rotationSize > slowRadius
      ? maxRotation
      : (maxRotation * rotationSize) / slowRadius;

  const nextIdealRotation = idealRotation * (rotation / rotationSize);

  const angular = (nextIdealRotation - character.rotation) / 0.5;

  const angularAcceleration = Math.abs(angular);
  const finalAngular =
    angularAcceleration > maxAngularAcceleration
      ? angular / maxAngularAcceleration
      : angular * maxAngularAcceleration;

  const linear = [0, 0];

  return {
    angular: finalAngular,
    linear,
  };
}
