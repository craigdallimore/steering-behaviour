import { getParam, getPosition } from "@lib/path.js";
import type {
  AlignConfig,
  FollowPathChaseRabbitConfig,
  Kinematic,
  Path,
  Steering,
} from "@domain/types.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

export function chaseRabbit(
  character: Kinematic,
  path: Path,
  config: FollowPathChaseRabbitConfig,
  alignConfig: AlignConfig
): Steering {
  // Find the current position on the path
  const currentParam = getParam(path, character.position);

  // Offset it
  const targetParam = currentParam + config.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { angular } = lookWhereYouAreGoing(character, alignConfig);
  const { linear } = seek(character, targetPosition, {
    maxAcceleration: config.maxAcceleration,
  });
  return { angular, linear };
}
