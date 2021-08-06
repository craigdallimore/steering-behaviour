// @flow

import {
  add,
  length,
  subtract,
  multiply,
  normalise,
} from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./index.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

export function separation(
  character: Kinematic,
  targets: Array<Kinematic>
): Steering {
  // config

  // The threshold to take action
  const threshold = 250;
  // Holds the constant coefficient of decay for the inverse square law force
  const decayCoefficient = 1500;
  // Holds the maximum acceleration of the character
  const maxAcceleration = 25;
  const { angular } = lookWhereYouAreGoing(character);

  return targets.reduce(
    (acc: Steering, target: Kinematic): Steering => {
      const direction = subtract(character.position, target.position);
      const distance = length(direction);

      if (distance < threshold) {
        const strength = Math.min(
          decayCoefficient / distance ** 2,
          maxAcceleration
        );

        const normalDirection = normalise(direction);
        const linear = multiply(normalDirection, strength);

        return {
          linear: add(linear, acc.linear),
          angular,
        };
      }

      return acc;
    },
    {
      linear: [0, 0],
      angular,
    }
  );
}
