import { AbstractBehaviour } from "./abstractBehaviour";
import { multiply, radiansToVector, add } from "@lib/vector";
import type { Kinematic, Vector, Steering } from "@domain/types";
import LookWhereYouAreGoing from "./lookWhereYouAreGoing";

export default class Wander extends AbstractBehaviour {
  readonly name = "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  wanderRate: number;
  wanderOrientation: number;
  maxAcceleration: number;
  lookWhereYouAreGoing: LookWhereYouAreGoing;
  debugPosition: Vector;
  constructor(
    wanderOffset?: number,
    wanderRadius?: number,
    wanderRate?: number,
    maxAcceleration?: number
  ) {
    super();
    this.maxAcceleration = maxAcceleration || 5;

    // The offset and radius of the wander circle
    this.wanderOffset = wanderOffset || 40;
    this.wanderRadius = wanderRadius || 20;

    this.wanderRate = wanderRate || 0.4;

    this.wanderOrientation = 0;

    this.debugPosition = [0, 0];

    this.lookWhereYouAreGoing = new LookWhereYouAreGoing();
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

    const { angular } = this.lookWhereYouAreGoing.calculate(kinematic);

    const linear = multiply(nextTargetPosition, this.maxAcceleration);
    this.debugPosition = nextTargetPosition;

    return {
      angular,
      linear,
    };
  }
}
