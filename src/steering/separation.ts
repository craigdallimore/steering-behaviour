import { add, length, subtract, multiply, normalise } from "@lib/vector.js";
import type { Kinematic, SeparationConfig, Steering } from "@domain/types.js";

export function separation(
  kinematic: Kinematic,
  targets: Array<Kinematic>,
  config: SeparationConfig
): Steering {
  return targets.reduce(
    (acc: Steering, target: Kinematic): Steering => {
      const direction = subtract(kinematic.position, target.position);
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
          angular: 0,
        };
      }

      return acc;
    },
    {
      linear: [0, 0],
      angular: 0,
    }
  );
}
