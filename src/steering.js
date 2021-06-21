// @flow

import type { Kinematic } from "../lib/kinematic.js";
import { subtract, multiply, normalise, type Vector } from "../lib/vector.js";

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

// ----------------------------------------------------------------------------

const maxAcceleration = 25;

export function getSeekSteering(
  character: Kinematic,
  target: Kinematic
): Steering {
  const linear = multiply(
    normalise(subtract(target.position, character.position)),
    maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
