import { subtract, multiply, add, length } from "@lib/vector.js";
import type { Kinematic, PursueConfig, Steering } from "@domain/types.js";
import { seek } from "./seek.js";

export function pursue(
  kinematic: Kinematic,
  target: Kinematic,
  config: PursueConfig
): Steering {
  const direction = subtract(target.position, kinematic.position);
  const distance = length(direction);
  const speed = length(kinematic.velocity);

  const prediction =
    speed <= distance / config.maxPrediction
      ? config.maxPrediction
      : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  return seek(kinematic, nextTargetPosition, config.seekConfig);
}
