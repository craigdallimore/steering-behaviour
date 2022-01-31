/*
 * Aims to match a given orientation.
 * Increases rotation speed
 * Backs off based on timeToTarget
 * Stops within alignTolerance
 */

import { AbstractBehaviour } from "./abstractBehaviour.js";

import type {
  CharacterId,
  Kinematic,
  Vector,
  Steering,
} from "@domain/types.js";

function mapToRange(orientation: number): number {
  // To rotate all the way clockwise, use the value 6.283
  // 6.3 is (I expect) NE 0.01...
  const nextOrientation =
    Math.abs(orientation) > Math.PI
      ? orientation - Math.PI * 2 * Math.sign(orientation)
      : orientation;

  return nextOrientation % (Math.PI * 2);
}

export default class Align extends AbstractBehaviour {
  readonly name = "ALIGN";
  targetId: CharacterId;
  maxAngularAcceleration: number;
  maxRotation: number;
  decelerationTolerance: number;
  alignTolerance: number;
  timeToTarget: number;

  constructor(
    targetId: CharacterId,
    maxAngularAcceleration?: number,
    maxRotation?: number,
    decelerationTolerance?: number,
    alignTolerance?: number,
    timeToTarget?: number
  ) {
    super();
    this.targetId = targetId;
    this.maxAngularAcceleration = maxAngularAcceleration || 140;
    this.maxRotation = maxRotation || 120;
    this.decelerationTolerance = decelerationTolerance || 2;
    this.alignTolerance = alignTolerance || 0.01;
    this.timeToTarget = timeToTarget || 0.1;
  }

  calculate(kinematic: Kinematic, orientation: number): Steering {
    const linear: Vector = [0, 0];

    const rotation = mapToRange(orientation - kinematic.orientation);
    const rotationSize = Math.abs(rotation);

    if (rotationSize < this.alignTolerance) {
      return {
        linear,
        angular: 0,
      };
    }

    const isSlowed = rotationSize <= this.decelerationTolerance;

    const idealRotation = isSlowed
      ? (this.maxRotation * rotationSize) / this.decelerationTolerance
      : this.maxRotation;

    const nextIdealRotation = idealRotation * (rotation / rotationSize);

    const angular =
      (nextIdealRotation - kinematic.rotation) / this.timeToTarget;

    const angularAcceleration = Math.abs(angular);
    const finalAngular =
      angularAcceleration > this.maxAngularAcceleration
        ? (angular * this.maxAngularAcceleration) / angularAcceleration
        : angular;

    return {
      angular: finalAngular,
      linear,
    };
  }
}
