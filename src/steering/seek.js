// @flow

import { subtract, multiply, normalise } from "../../lib/vector.js";
import type { Vector } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";

export function seek(
  character: Kinematic,
  targetPosition: Vector,
  maxAcceleration: number
): Steering {
  const linear = multiply(
    normalise(subtract(targetPosition, character.position)),
    maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
