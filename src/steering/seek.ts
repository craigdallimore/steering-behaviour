import { AbstractBehaviour } from "./abstractBehaviour";
import { subtract, multiply, normalise } from "@lib/vector";
import type { Kinematic, Vector, Steering, CharacterId } from "@domain/types";

export default class Seek extends AbstractBehaviour {
  readonly name = "SEEK";
  targetId: CharacterId;
  constructor(targetId: CharacterId) {
    super();
    this.targetId = targetId;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(targetPosition, kinematic.position)),
      kinematic.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
