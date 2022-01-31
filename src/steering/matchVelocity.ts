import { AbstractBehaviour } from "./abstractBehaviour.js";
import { length, subtract, multiply, normalise } from "@lib/vector.js";
import type { Kinematic, CharacterId, Steering } from "@domain/types.js";

export default class MatchVelocity extends AbstractBehaviour {
  readonly name = "MATCH_VELOCITY";
  targetId: CharacterId;
  timeToTarget: number;
  maxAcceleration: number;
  constructor(
    targetId: CharacterId,
    timeToTarget?: number,
    maxAcceleration?: number
  ) {
    super();
    this.targetId = targetId;
    this.timeToTarget = timeToTarget || 0.1;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, target: Kinematic): Steering {
    const angular = 0;
    const linear = subtract(target.velocity, kinematic.velocity);
    const dividedLinear = multiply(linear, 1 / this.timeToTarget);
    const finalLinear =
      length(dividedLinear) > this.maxAcceleration
        ? multiply(normalise(linear), this.maxAcceleration)
        : linear;

    return {
      angular,
      linear: finalLinear,
    };
  }
}
