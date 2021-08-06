// @flow

import { length } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./index.js";
import { align } from "./align.js";
import { emptySteering } from "./index.js";

export function lookWhereYouAreGoing(
  character: Kinematic,
  target: Kinematic
): Steering {
  if (length(character.velocity) === 0) {
    return emptySteering;
  }

  const orientation = Math.atan2(character.velocity[0], -character.velocity[1]);
  const nextTarget = {
    ...target,
    orientation,
  };

  return align(character, nextTarget);
}
