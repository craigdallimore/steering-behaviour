import { AbstractBehaviour } from "./abstractBehaviour";
import { subtract, multiply, add, length } from "@decoy9697/vector";
import type { Kinematic, CharacterId, Steering } from "@domain/types";
import Seek from "./seek";

export default class Pursue extends AbstractBehaviour {
  readonly name = "PURSUE";
  targetId: CharacterId;
  maxPrediction: number;
  seek: Seek;
  constructor(targetId: CharacterId, maxPrediction?: number) {
    super();
    this.maxPrediction = maxPrediction ?? 1;
    this.seek = new Seek(targetId);
    this.targetId = targetId;
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

    return this.seek.calculate(kinematic, nextTargetPosition);
  }
}
