import { AbstractBehaviour } from "./abstractBehaviour";
import { subtract, multiply, add, length } from "@lib/vector";
import type { CharacterId, Kinematic, Steering } from "@domain/types";
import Flee from "./flee";

export default class Evade extends AbstractBehaviour {
  readonly name = "EVADE";
  targetId: CharacterId;
  maxPrediction: number;
  flee: Flee;
  constructor(targetId: CharacterId, maxPrediction?: number) {
    super();
    this.targetId = targetId;
    this.flee = new Flee(targetId);
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
