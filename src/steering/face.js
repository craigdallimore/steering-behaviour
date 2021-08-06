// @flow

import { length, subtract } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./index.js";
import { align } from "./align.js";
import { emptySteering } from "./index.js";

export function face(character: Kinematic, target: Kinematic): Steering {
  const direction = subtract(target.position, character.position);

  if (length(direction) === 0) {
    return emptySteering;
  }

  const nextOrientation = Math.atan2(direction[0], -direction[1]);

  return align(character, nextOrientation);
}
