import { length, vectorToRadians } from "../lib/vector.js";
import type { Kinematic } from "../lib/kinematic.js";
import { emptySteering, type Steering } from "./steering.js";
import { align } from "./align.js";
import type { AlignConfig } from "./align.js";

export function lookWhereYouAreGoing(
  character: Kinematic,
  config: AlignConfig
): Steering {
  if (length(character.velocity) === 0) {
    return emptySteering;
  }

  const orientation = vectorToRadians(character.velocity);

  return align(character, orientation, config);
}
