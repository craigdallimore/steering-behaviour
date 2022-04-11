import { AbstractBehaviour } from "./abstractBehaviour";
import Align from "./align";
import { length, vectorToRadians } from "@decoy9697/vector";
import type { Kinematic, Steering } from "@domain/types";

export default class LookWhereYouAreGoing extends AbstractBehaviour {
  readonly name = "LOOK_WHERE_YOU_ARE_GOING";
  align: Align;
  constructor(align?: Align) {
    super();
    this.align = align || new Align("");
  }
  calculate(kinematic: Kinematic): Steering {
    if (length(kinematic.velocity) === 0) {
      return {
        linear: [0, 0],
        angular: 0,
      };
    }

    const orientation = vectorToRadians(kinematic.velocity);

    return this.align.calculate(kinematic, orientation);
  }
}
