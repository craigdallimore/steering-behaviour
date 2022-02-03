import { AbstractBehaviour } from "./abstractBehaviour";
import type { Steering } from "@domain/types";

export default class None extends AbstractBehaviour {
  readonly name = "NONE";
  calculate(): Steering {
    return {
      linear: [0, 0],
      angular: 0,
    };
  }
}
