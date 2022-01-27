import { subtract, multiply, add, length } from "@lib/vector.js";
import type { EvadeConfig, Kinematic, Steering } from "@domain/types.js";
import { flee } from "./flee.js";

export function evade(
  character: Kinematic,
  target: Kinematic,
  config: EvadeConfig
): Steering {
  const direction = subtract(target.position, character.position);
  const distance = length(direction);
  const speed = length(character.velocity);

  const prediction =
    speed <= distance / config.maxPrediction
      ? config.maxPrediction
      : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  const nextTarget = {
    ...target,
    position: nextTargetPosition,
  };

  return flee(character, nextTarget, {
    maxAcceleration: config.maxAcceleration,
  });
}
