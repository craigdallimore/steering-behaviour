// @flow

import { subtract, multiply, normalise } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";

export function flee(character: Kinematic, target: Kinematic): Steering {
  // Config
  const maxAcceleration = 25;

  const linear = multiply(
    normalise(subtract(character.position, target.position)),
    maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
