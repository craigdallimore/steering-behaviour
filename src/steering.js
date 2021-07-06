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

export function getSeekSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  // Config
  const maxAcceleration = 25;

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
  // Config
  const maxAcceleration = 25;
  const timeToTarget = 3;
  const maxSpeed = 55;
  const targetRadius = 5;
  const slowRadius = 60;

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
  const linear = multiply(reduced, 1 / timeToTarget);

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
  // To rotate all the way clockwise, use the value 6.283
  // 6.3 is (I expect) NE 0.01...
  const nextOrientation =
    Math.abs(orientation) > Math.PI
      ? orientation - Math.PI * 2 * Math.sign(orientation)
      : orientation;

  return nextOrientation % (Math.PI * 2);
}

// ALIGN ----------------------------------------------------------------------

export function getAlignSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  const maxAngularAcceleration = 140;
  const maxRotation = 120;
  const decelerationTolerance = 2;
  const alignTolerance = 0.01;
  const timeToTarget = 0.1;
  const linear = [0, 0];

  const rotation = mapToRange(target.orientation - character.orientation);
  const rotationSize = Math.abs(rotation);

  if (rotationSize < alignTolerance) {
    return {
      linear,
      angular: 0,
    };
  }

  const isSlowed = rotationSize <= decelerationTolerance;

  const idealRotation = isSlowed
    ? (maxRotation * rotationSize) / decelerationTolerance
    : maxRotation;

  const nextIdealRotation = idealRotation * (rotation / rotationSize);

  const angular = (nextIdealRotation - character.rotation) / timeToTarget;

  const angularAcceleration = Math.abs(angular);
  const finalAngular =
    angularAcceleration > maxAngularAcceleration
      ? (angular * maxAngularAcceleration) / angularAcceleration
      : angular;

  return {
    angular: finalAngular,
    linear,
  };
}

// MATCH VELOCITY -------------------------------------------------------------

export function getMatchVelocitySteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  // Config
  const timeToTarget = 0.1;
  const maxAcceleration = 25;

  const angular = 0;
  const linear = subtract(target.velocity, character.velocity);
  const dividedLinear = multiply(linear, 1 / timeToTarget);
  const finalLinear =
    length(dividedLinear) > maxAcceleration
      ? multiply(normalise(linear), maxAcceleration)
      : linear;

  return {
    angular,
    linear: finalLinear,
  };
}
