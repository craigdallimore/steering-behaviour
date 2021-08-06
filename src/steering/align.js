// @flow

import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./index.js";

function mapToRange(orientation: number): number {
  // To rotate all the way clockwise, use the value 6.283
  // 6.3 is (I expect) NE 0.01...
  const nextOrientation =
    Math.abs(orientation) > Math.PI
      ? orientation - Math.PI * 2 * Math.sign(orientation)
      : orientation;

  return nextOrientation % (Math.PI * 2);
}

export function align(character: Kinematic, target: Kinematic): Steering {
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
