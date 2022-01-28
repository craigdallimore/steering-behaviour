import { subtract, multiply, normalise } from "@lib/vector.js";
import type { FleeConfig, Kinematic, Steering } from "@domain/types.js";

export function flee(
  kinematic: Kinematic,
  target: Kinematic,
  config: FleeConfig
): Steering {
  const linear = multiply(
    normalise(subtract(kinematic.position, target.position)),
    config.maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
