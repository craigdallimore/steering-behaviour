// @flow

import type { Kinematic } from "../lib/kinematic.js";
import {
  add,
  distance,
  subtract,
  length,
  multiply,
  toVector,
  normalise,
  type Vector,
} from "../lib/vector.js";

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

export const emptySteering: Steering = { angular: 0, linear: [0, 0] };

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

// PURSUE ---------------------------------------------------------------------

export function getPursueSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  // Config
  const maxPrediction = 1;

  const direction = subtract(target.position, character.position);
  const distance = length(direction);
  const speed = length(character.velocity);

  const prediction =
    speed <= distance / maxPrediction ? maxPrediction : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  const nextTarget = {
    ...target,
    position: nextTargetPosition,
  };

  return getSeekSteering(character, nextTarget);
}

// LOOK_WHERE_YOU_ARE_GOING ---------------------------------------------------

export function getLookWhereYouAreGoingSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  if (length(character.velocity) === 0) {
    return emptySteering;
  }

  const orientation = Math.atan2(character.velocity[0], -character.velocity[1]);
  const nextTarget = {
    ...target,
    orientation,
  };

  return getAlignSteering(character, nextTarget);
}

// WANDER ---------------------------------------------------------------------

export function getWanderSteering(character: Kinematic): Steering {
  // Config

  const wanderOffset = 50;
  const wanderRadius = 20;
  const wanderRate = 1;
  // class Wander (Face):

  // Holds the radius and forward offset of the wander circle.
  // wanderOffset
  // wanderRadius

  // Holds the maximum rate at which the wander orientation can change

  // wanderRate

  // Holds the current orientation of the wander target

  // wanderOrientation

  // Holds the maximum acceleration of the character

  // maxAcceleration
  const maxAcceleration = 25;

  // # Again we don’t need a new target

  // # ... Other data is derived from the superclass ...

  // def getSteering():

  // Calculate the target to delegate to face
  // Update the wander orientation

  // wanderOrientation += randomBinomial() * wanderRate
  const wanderOrientation = Math.random() * wanderRate;

  // Calculate the combined target orientation
  const targetOrientation = wanderOrientation + character.orientation;

  // targetOrientation = wanderOrientation + character.orientation

  // # Calculate the center of the wander circle
  // target = character.position + wanderOffset * character.orientation.asVector()
  const target: Vector = add(
    character.position,
    multiply(toVector(character.orientation), wanderOffset)
  );

  // # Calculate the target location
  // target += wanderRadius * targetOrientation.asVector()
  const nextTarget = add(
    target,
    multiply(toVector(targetOrientation), wanderRadius)
  );

  const { angular } = getFaceSteering(character, {
    position: nextTarget,
    velocity: [0, 0],
    orientation: 0,
    rotation: 0,
  });
  // # . Delegate to face

  // steering = Face.getSteering()
  const linear = multiply(toVector(character.orientation), maxAcceleration);

  console.log(angular);
  // #
  // . Now set the linear acceleration to be at full

  // # acceleration in the direction of the orientation

  // steering.linear = maxAcceleration * character.orientation.asVector()

  // # Return it

  // return steering

  return {
    angular,
    linear,
  };
}

// FACE ---------------------------------------------------------------------

export function getFaceSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  const direction = subtract(target.position, character.position);

  if (length(direction) === 0) {
    return emptySteering;
  }

  const nextOrientation = Math.atan2(direction[0], -direction[1]);

  const nextTarget = {
    ...target,
    orientation: nextOrientation,
  };

  return getAlignSteering(character, nextTarget);
}
