import { AbstractBehaviour } from "./abstractBehaviour";
import { subtract, multiply, normalise } from "@lib/vector";
import type { Kinematic, Vector, Steering, CharacterId } from "@domain/types";

export default class Seek extends AbstractBehaviour {
  readonly name = "SEEK";
  targetId: CharacterId;
  maxAcceleration: number;
  constructor(targetId: CharacterId, maxAcceleration?: number) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(targetPosition, kinematic.position)),
      this.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
