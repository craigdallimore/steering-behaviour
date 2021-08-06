// @flow

import { length, subtract, multiply, normalise } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";

export function matchVelocity(
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
