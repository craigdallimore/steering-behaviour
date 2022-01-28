import { length, subtract } from "@lib/vector.js";
import type { FaceConfig, Kinematic, Vector, Steering } from "@domain/types.js";
import { emptySteering } from "./steering.js";
import { align } from "./align.js";

export function face(
  kinematic: Kinematic,
  position: Vector,
  config: FaceConfig
): Steering {
  const direction = subtract(position, kinematic.position);

  if (length(direction) === 0) {
    return emptySteering;
  }

  const nextOrientation = Math.atan2(direction[0], -direction[1]);

  return align(kinematic, nextOrientation, config.alignConfig);
}
