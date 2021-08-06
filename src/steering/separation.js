// @flow

import { length, subtract, multiply, normalise } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./index.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

export function separation(character: Kinematic, target: Kinematic): Steering {
  // config

  // The threshold to take action
  const threshold = 250;
  // Holds the constant coefficient of decay for the inverse square law force
  const decayCoefficient = 1500;
  // Holds the maximum acceleration of the character
  const maxAcceleration = 25;

  const direction = subtract(character.position, target.position);
  const distance = length(direction);
  const { angular } = lookWhereYouAreGoing(character, target);

  if (distance < threshold) {
    const strength = Math.min(
      decayCoefficient / distance ** 2,
      maxAcceleration
    );

    const normalDirection = normalise(direction);
    const linear = multiply(normalDirection, strength);

    return {
      linear,
      angular,
    };
  }

  return {
    linear: [0, 0],
    angular,
  };
}
