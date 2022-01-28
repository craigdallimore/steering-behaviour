import { getParam, getPosition } from "@lib/path.js";
import type {
  FollowPathChaseRabbitConfig,
  Kinematic,
  Path,
  Steering,
} from "@domain/types.js";
import { seek } from "./seek.js";

export function chaseRabbit(
  kinematic: Kinematic,
  path: Path,
  config: FollowPathChaseRabbitConfig
): Steering {
  // Find the current position on the path
  const currentParam = getParam(path, kinematic.position);

  // Offset it
  const targetParam = currentParam + config.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { linear } = seek(kinematic, targetPosition, config.seekConfig);
  return { angular: 0, linear };
}
