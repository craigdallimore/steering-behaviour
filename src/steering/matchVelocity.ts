import { length, subtract, multiply, normalise } from "../lib/vector.js";
import type { Kinematic } from "../lib/kinematic.js";
import type { Steering } from "./steering.js";

type Config = {
  timeToTarget: number;
  maxAcceleration: number;
};

export function matchVelocity(
  character: Kinematic,
  target: Kinematic,
  config: Config
): Steering {
  const angular = 0;
  const linear = subtract(target.velocity, character.velocity);
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
