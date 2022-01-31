import { AbstractBehaviour } from "./abstractBehaviour.js";
import { add, length, subtract, multiply, normalise } from "@lib/vector.js";
import type { Kinematic, Steering } from "@domain/types.js";

export default class Separation extends AbstractBehaviour {
  readonly name = "SEPARATION";
  threshold: number;
  decayCoefficient: number;
  maxAcceleration: number;
  constructor(
    threshold?: number,
    decayCoefficient?: number,
    maxAcceleration?: number
  ) {
    super();
    // The threshold to take action
    this.threshold = threshold || 250;
    // Holds the constant coefficient of decay for the inverse square law force
    this.decayCoefficient = decayCoefficient || 1500;
    // Holds the maximum acceleration of the character
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targets: Array<Kinematic>): Steering {
    return targets.reduce(
      (acc: Steering, target: Kinematic): Steering => {
        const direction = subtract(kinematic.position, target.position);
        const distance = length(direction);

        if (distance < this.threshold) {
          const strength = Math.min(
            this.decayCoefficient / distance ** 2,
            this.maxAcceleration
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
}
