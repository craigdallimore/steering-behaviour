// @flow

import { subtract, multiply, add, length } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { flee } from "./flee.js";

export function evade(character: Kinematic, target: Kinematic): Steering {
  // Config
  const maxPrediction = 1;

  const direction = subtract(target.position, character.position);
  const distance = length(direction);
  const speed = length(character.velocity);

  const prediction =
    speed <= distance / maxPrediction ? maxPrediction : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  const nextTarget = {
    ...target,
    position: nextTargetPosition,
  };

  return flee(character, nextTarget);
}