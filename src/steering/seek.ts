import { subtract, multiply, normalise } from "@lib/vector.js";
import type { Kinematic, Vector, Steering, SeekConfig } from "@domain/types.js";

export function seek(
  kinematic: Kinematic,
  targetPosition: Vector,
  config: SeekConfig
): Steering {
  const linear = multiply(
    normalise(subtract(targetPosition, kinematic.position)),
    config.maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
