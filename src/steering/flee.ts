import { AbstractBehaviour } from "./abstractBehaviour";
import { subtract, multiply, normalise } from "@lib/vector";
import type { CharacterId, Vector, Kinematic, Steering } from "@domain/types";

export default class Flee extends AbstractBehaviour {
  readonly name = "FLEE";
  targetId: CharacterId;
  constructor(targetId: CharacterId) {
    super();
    this.targetId = targetId;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(kinematic.position, targetPosition)),
      kinematic.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
