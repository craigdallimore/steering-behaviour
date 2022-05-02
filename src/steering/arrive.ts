import { AbstractBehaviour } from "./abstractBehaviour";
import {
  length,
  distance,
  subtract,
  multiply,
  normalise,
} from "@decoy9697/vector";
import type { CharacterId, Kinematic, Steering, Vector } from "@domain/types";

export default class Arrive extends AbstractBehaviour {
  readonly name = "ARRIVE";
  targetId: CharacterId;
  timeToTarget: number;
  targetRadius: number;
  slowRadius: number;
  constructor(
    targetId: CharacterId,
    timeToTarget?: number,
    targetRadius?: number,
    slowRadius?: number
  ) {
    super();
    this.targetId = targetId;
    this.timeToTarget = timeToTarget ?? 3;
    this.targetRadius = targetRadius ?? 15;
    this.slowRadius = slowRadius ?? 50;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering | null {
    const distanceToTarget = distance(kinematic.position, targetPosition);
    const directionToTarget = subtract(targetPosition, kinematic.position);

    if (distanceToTarget < this.targetRadius) {
      return null;
    }

    const idealSpeed =
      distanceToTarget > this.slowRadius
        ? kinematic.maxSpeed
        : kinematic.maxSpeed * (distanceToTarget / this.slowRadius);

    // Here we appear to take a vector from the two points, and relate it to
    // the ideal speed
    const idealVelocity = multiply(normalise(directionToTarget), idealSpeed);

    const reduced = subtract(idealVelocity, kinematic.velocity);

    // A higher value will arrive sooner
    const linear = multiply(reduced, 1 / this.timeToTarget);

    const finalLinear =
      length(linear) > kinematic.maxAcceleration
        ? multiply(normalise(linear), kinematic.maxAcceleration)
        : linear;

    this.debug.circles = [
      {
        position: targetPosition,
        radius: this.targetRadius,
        fillStyle: "rgba(0, 0,255, 0.1)",
      },
      {
        position: targetPosition,
        radius: this.slowRadius,
        fillStyle: "rgba(0, 0,255, 0.1)",
      },
    ];

    return {
      angular: 0,
      linear: finalLinear,
    };
  }
}
