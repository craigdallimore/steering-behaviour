import { length, vectorToRadians } from "@lib/vector.js";
import type {
  Kinematic,
  LookWhereYouAreGoingConfig,
  Steering,
} from "@domain/types.js";
import { emptySteering } from "./steering.js";
import { align } from "./align.js";

export function lookWhereYouAreGoing(
  character: Kinematic,
  config: LookWhereYouAreGoingConfig
): Steering {
  if (length(character.velocity) === 0) {
    return emptySteering;
  }

  const orientation = vectorToRadians(character.velocity);

  return align(character, orientation, config.alignConfig);
}
