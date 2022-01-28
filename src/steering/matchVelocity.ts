import { length, subtract, multiply, normalise } from "@lib/vector.js";
import type {
  Kinematic,
  MatchVelocityConfig,
  Steering,
} from "@domain/types.js";

export function matchVelocity(
  kinematic: Kinematic,
  target: Kinematic,
  config: MatchVelocityConfig
): Steering {
  const angular = 0;
  const linear = subtract(target.velocity, kinematic.velocity);
  const dividedLinear = multiply(linear, 1 / config.timeToTarget);
  const finalLinear =
    length(dividedLinear) > config.maxAcceleration
      ? multiply(normalise(linear), config.maxAcceleration)
      : linear;

  return {
    angular,
    linear: finalLinear,
  };
}
