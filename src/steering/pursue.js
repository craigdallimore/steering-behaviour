// @flow

import { subtract, multiply, add, length } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { seek } from "./seek.js";

type Config = {
  maxAcceleration: number,
  maxPrediction: number,
};

export function pursue(
  character: Kinematic,
  target: Kinematic,
  config: Config
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

  return seek(character, nextTargetPosition, {
    maxAcceleration: config.maxAcceleration,
  });
}
