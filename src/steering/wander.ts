import { AbstractBehaviour } from "./abstractBehaviour";
import { multiply, radiansToVector, degreesToVector, add } from "@lib/vector";
import type { Kinematic, Vector, Steering } from "@domain/types";
import Face from "./face";

export default class Wander extends AbstractBehaviour {
  readonly name = "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  maxAcceleration: number;
  face: Face;
  debugPosition: Vector;
  constructor(
    wanderOffset?: number,
    wanderRadius?: number,
    maxAcceleration?: number
  ) {
    super();
    this.maxAcceleration = maxAcceleration || 25;
    this.wanderOffset = wanderOffset || 50;
    this.wanderRadius = wanderRadius || 20;
    this.debugPosition = [0, 0];

    this.face = new Face("");
  }
  calculate(kinematic: Kinematic): Steering {
    const offset = multiply(
      radiansToVector(kinematic.orientation),
      this.wanderOffset
    );
    const wanderPosition: Vector = add(kinematic.position, offset);

    const wanderOrientation = Math.random() * 360;

    const nextTargetPosition = add(
      wanderPosition,
      multiply(degreesToVector(wanderOrientation), this.wanderRadius * 2)
    );

    this.debugPosition = nextTargetPosition;

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
