import { AbstractBehaviour } from "./abstractBehaviour.js";
import { subtract, multiply, normalise } from "@lib/vector.js";
import type {
  CharacterId,
  Vector,
  Kinematic,
  Steering,
} from "@domain/types.js";

export default class Flee extends AbstractBehaviour {
  readonly name = "FLEE";
  targetId: CharacterId;
  maxAcceleration: number;
  constructor(targetId: CharacterId, maxAcceleration?: number) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(kinematic.position, targetPosition)),
      this.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
