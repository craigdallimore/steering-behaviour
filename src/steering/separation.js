// @flow

import {
  add,
  length,
  subtract,
  multiply,
  normalise,
} from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
import type { AlignConfig } from "./align.js";

type Config = {
  threshold: number,
  decayCoefficient: number,
  maxAcceleration: number,
};

export function separation(
  character: Kinematic,
  targets: Array<Kinematic>,
  config: Config,
  alignConfig: AlignConfig
): Steering {
  const { angular } = lookWhereYouAreGoing(character, alignConfig);

  return targets.reduce(
    (acc: Steering, target: Kinematic): Steering => {
      const direction = subtract(character.position, target.position);
      const distance = length(direction);

      if (distance < config.threshold) {
        const strength = Math.min(
          config.decayCoefficient / distance ** 2,
          config.maxAcceleration
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
