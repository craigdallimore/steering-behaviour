import { AbstractBehaviour } from "./abstractBehaviour.js";
import { subtract, multiply, add, length } from "@lib/vector.js";
import type { Kinematic, Steering } from "@domain/types.js";
import Flee from "./flee.js";

export default class Evade extends AbstractBehaviour {
  readonly name = "EVADE";
  maxPrediction: number;
  flee: Flee;
  constructor(flee: Flee, maxPrediction?: number) {
    super();
    this.flee = flee;
    this.maxPrediction = maxPrediction || 1;
  }
  calculate(kinematic: Kinematic, target: Kinematic): Steering {
    const direction = subtract(target.position, kinematic.position);
    const distance = length(direction);
    const speed = length(kinematic.velocity);

    const prediction =
      speed <= distance / this.maxPrediction
        ? this.maxPrediction
        : distance / speed;

    const nextTargetPosition = add(
      target.position,
      multiply(target.velocity, prediction)
    );

    return this.flee.calculate(kinematic, nextTargetPosition);
  }
}
