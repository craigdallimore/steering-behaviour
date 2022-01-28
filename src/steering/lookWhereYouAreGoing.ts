import { length, vectorToRadians } from "@lib/vector.js";
import type {
  Kinematic,
  LookWhereYouAreGoingConfig,
  Steering,
} from "@domain/types.js";
import { emptySteering } from "./steering.js";
import { align } from "./align.js";

export function lookWhereYouAreGoing(
  kinematic: Kinematic,
  config: LookWhereYouAreGoingConfig
): Steering {
  if (length(kinematic.velocity) === 0) {
    return emptySteering;
  }

  const orientation = vectorToRadians(kinematic.velocity);

  return align(kinematic, orientation, config.alignConfig);
}
