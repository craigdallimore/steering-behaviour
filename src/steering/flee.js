// @flow

import { subtract, multiply, normalise } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";

type Config = {
  maxAcceleration: number,
};

export function flee(
  character: Kinematic,
  target: Kinematic,
  config: Config
): Steering {
  const linear = multiply(
    normalise(subtract(character.position, target.position)),
    config.maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
