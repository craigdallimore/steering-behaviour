import { AbstractBehaviour } from "./abstractBehaviour.js";
import { length, subtract } from "@lib/vector.js";
import type {
  CharacterId,
  Kinematic,
  Vector,
  Steering,
} from "@domain/types.js";
import Align from "./align.js";

export default class Face extends AbstractBehaviour {
  readonly name = "FACE";
  targetId: CharacterId;
  align: Align;
  constructor(targetId: CharacterId) {
    super();
    this.targetId = targetId;
    this.align = new Align(targetId);
  }
  calculate(kinematic: Kinematic, position: Vector): Steering {
    const direction = subtract(position, kinematic.position);

    if (length(direction) === 0) {
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    const nextOrientation = Math.atan2(direction[1], direction[0]);

    return this.align.calculate(kinematic, nextOrientation);
  }
}
