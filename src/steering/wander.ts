import { AbstractBehaviour } from "./abstractBehaviour";
import { multiply, radiansToVector, add } from "@decoy9697/vector";
import type { Kinematic, Vector, Steering } from "@domain/types";

export default class Wander extends AbstractBehaviour {
  readonly name = "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  wanderRate: number;
  wanderOrientation: number;
  constructor(
    wanderOffset?: number,
    wanderRadius?: number,
    wanderRate?: number
  ) {
    super();

    // The offset and radius of the wander circle
    this.wanderOffset = wanderOffset ?? 40;
    this.wanderRadius = wanderRadius ?? 20;

    this.wanderRate = wanderRate ?? 0.4;

    this.wanderOrientation = 0;
  }
  calculate(kinematic: Kinematic): Steering {
    const random = Math.random() - Math.random();

    this.wanderOrientation += random * this.wanderRate;

    const targetOrientation = this.wanderOrientation + kinematic.orientation;
    const targetOrientationAsVector = radiansToVector(targetOrientation);

    // Anchor for the wander circle
    const circleCentrePosition: Vector = multiply(
      radiansToVector(kinematic.orientation),
      this.wanderOffset
    );

    const nextTargetPosition = add(
      circleCentrePosition,
      multiply(targetOrientationAsVector, this.wanderRadius)
    );

    const linear = multiply(nextTargetPosition, kinematic.maxAcceleration);
    this.debug.vectors = [
      { position: nextTargetPosition, fillStyle: "rgb(191, 54, 12)" },
    ];

    return {
      angular: 0,
      linear,
    };
  }
}
