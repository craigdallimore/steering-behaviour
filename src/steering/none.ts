import { AbstractBehaviour } from "./abstractBehaviour.js";
import type { Steering } from "@domain/types.js";

export default class None extends AbstractBehaviour {
  readonly name = "NONE";
  calculate(): Steering {
    return {
      linear: [0, 0],
      angular: 0,
    };
  }
}
