/*
 * Takes a target.
 *
 * Accelerates towards a target
 * Slows within slowRadius
 * Stops within targetRadius
 */
import { AbstractBehaviour } from "./abstractBehaviour.js";
import {
  length,
  distance,
  subtract,
  multiply,
  normalise,
} from "@lib/vector.js";
import type {
  CharacterId,
  Kinematic,
  Steering,
  Vector,
} from "@domain/types.js";

export default class Arrive extends AbstractBehaviour {
  readonly name = "ARRIVE";
  targetId: CharacterId;
  maxAcceleration: number;
  timeToTarget: number;
  maxSpeed: number;
  targetRadius: number;
  slowRadius: number;
  constructor(
    targetId: CharacterId,
    maxAcceleration?: number,
    timeToTarget?: number,
    maxSpeed?: number,
    targetRadius?: number,
    slowRadius?: number
  ) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
    this.timeToTarget = timeToTarget || 3;
    this.maxSpeed = maxSpeed || 55;
    this.targetRadius = targetRadius || 5;
    this.slowRadius = slowRadius || 60;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering | null {
    const distanceToTarget = distance(kinematic.position, targetPosition);
    const directionToTarget = subtract(targetPosition, kinematic.position);

    if (distanceToTarget < this.targetRadius) {
      return null;
    }

    const idealSpeed =
      distanceToTarget > this.slowRadius
        ? this.maxSpeed
        : this.maxSpeed * (distanceToTarget / this.slowRadius);

    // Here we appear to take a vector from the two points, and relate it to
    // the ideal speed
    const idealVelocity = multiply(normalise(directionToTarget), idealSpeed);

    const reduced = subtract(idealVelocity, kinematic.velocity);

    // A higher value will arrive sooner
    const linear = multiply(reduced, 1 / this.timeToTarget);

    const finalLinear =
      length(linear) > this.maxAcceleration
        ? multiply(normalise(linear), this.maxAcceleration)
        : linear;

    return {
      angular: 0,
      linear: finalLinear,
    };
  }
}
