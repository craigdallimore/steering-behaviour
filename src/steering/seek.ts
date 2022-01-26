import { subtract, multiply, normalise } from "@lib/vector.js";
import type { Kinematic, Vector, Steering } from "@domain/types.js";

type Config = {
  maxAcceleration: number;
};

export function seek(
  character: Kinematic,
  targetPosition: Vector,
  config: Config
): Steering {
  const linear = multiply(
    normalise(subtract(targetPosition, character.position)),
    config.maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}
