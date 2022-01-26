import type { Kinematic, Vector, Steering } from "@domain/types.js";

function mapToRange(orientation: number): number {
  // To rotate all the way clockwise, use the value 6.283
  // 6.3 is (I expect) NE 0.01...
  const nextOrientation =
    Math.abs(orientation) > Math.PI
      ? orientation - Math.PI * 2 * Math.sign(orientation)
      : orientation;

  return nextOrientation % (Math.PI * 2);
}

export type AlignConfig = {
  maxAngularAcceleration: number;
  maxRotation: number;
  decelerationTolerance: number;
  alignTolerance: number;
  timeToTarget: number;
};

export function align(
  character: Kinematic,
  orientation: number,
  config: AlignConfig
): Steering {
  const linear: Vector = [0, 0];

  const rotation = mapToRange(orientation - character.orientation);
  const rotationSize = Math.abs(rotation);

  if (rotationSize < config.alignTolerance) {
    return {
      linear,
      angular: 0,
    };
  }

  const isSlowed = rotationSize <= config.decelerationTolerance;

  const idealRotation = isSlowed
    ? (config.maxRotation * rotationSize) / config.decelerationTolerance
    : config.maxRotation;

  const nextIdealRotation = idealRotation * (rotation / rotationSize);

  const angular =
    (nextIdealRotation - character.rotation) / config.timeToTarget;

  const angularAcceleration = Math.abs(angular);
  const finalAngular =
    angularAcceleration > config.maxAngularAcceleration
      ? (angular * config.maxAngularAcceleration) / angularAcceleration
      : angular;

  return {
    angular: finalAngular,
    linear,
  };
}
