import { getParam, getPosition } from "@lib/path.js";
import {
  Path,
  Kinematic,
  Steering,
  FollowPathPredictConfig,
} from "@domain/types.js";
import { add, multiply } from "@lib/vector.js";
import { seek } from "./seek.js";

export function predictiveFollow(
  kinematic: Kinematic,
  path: Path,
  config: FollowPathPredictConfig
): Steering {
  // Find the predicted future location
  const futurePos = add(
    kinematic.position,
    multiply(kinematic.velocity, config.predictTime)
  );

  // Find the predicted position on the path
  const currentParam = getParam(path, futurePos);

  // Offset it
  const targetParam = currentParam + config.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { linear } = seek(kinematic, targetPosition, config.seekConfig);
  return { angular: 0, linear };
}
