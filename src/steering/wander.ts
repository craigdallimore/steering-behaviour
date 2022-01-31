import { AbstractBehaviour } from "./abstractBehaviour.js";
import {
  multiply,
  radiansToVector,
  degreesToVector,
  add,
} from "@lib/vector.js";
import type { Kinematic, Vector, Steering } from "@domain/types.js";
import Face from "./face.js";

export default class Wander extends AbstractBehaviour {
  readonly name = "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  maxAcceleration: number;
  face: Face;
  constructor(
    wanderOffset?: number,
    wanderRadius?: number,
    maxAcceleration?: number
  ) {
    super();
    this.maxAcceleration = maxAcceleration || 25;
    this.wanderOffset = wanderOffset || 50;
    this.wanderRadius = wanderRadius || 20;
    this.face = new Face("");
  }
  calculate(kinematic: Kinematic): Steering {
    const wanderPosition: Vector = add(
      kinematic.position,
      multiply(radiansToVector(kinematic.orientation), this.wanderOffset)
    );

    const wanderOrientation = Math.random() * 360;

    const nextTargetPosition = add(
      wanderPosition,
      multiply(degreesToVector(wanderOrientation), this.wanderRadius * 2)
    );

    const { angular } = this.face.calculate(kinematic, nextTargetPosition);

    const linear = multiply(
      radiansToVector(kinematic.orientation),
      this.maxAcceleration
    );

    return {
      angular,
      linear,
    };
  }
}
