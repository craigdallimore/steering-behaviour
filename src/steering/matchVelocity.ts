import { AbstractBehaviour } from "./abstractBehaviour";
import { length, subtract, multiply, normalise } from "@decoy9697/vector";
import type { Kinematic, CharacterId, Steering } from "@domain/types";

export default class MatchVelocity extends AbstractBehaviour {
  readonly name = "MATCH_VELOCITY";
  targetId: CharacterId;
  timeToTarget: number;
  constructor(targetId: CharacterId, timeToTarget?: number) {
    super();
    this.targetId = targetId;
    this.timeToTarget = timeToTarget ?? 0.1;
  }
  calculate(kinematic: Kinematic, target: Kinematic): Steering {
    const angular = 0;
    const linear = subtract(target.velocity, kinematic.velocity);
    const dividedLinear = multiply(linear, 1 / this.timeToTarget);
    const finalLinear =
      length(dividedLinear) > kinematic.maxAcceleration
        ? multiply(normalise(linear), kinematic.maxAcceleration)
        : linear;

    return {
      angular,
      linear: finalLinear,
    };
  }
}
