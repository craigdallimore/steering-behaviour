import { getParam, getPosition, type Path } from "../../lib/path.js";
import { add, multiply } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
import type { AlignConfig } from "./align.js";

type Config = {
  pathOffset: number,
  predictTime: number,
  maxAcceleration: number,
};

export function predictiveFollow(
  character: Kinematic,
  path: Path,
  config: Config,
  alignConfig: AlignConfig
): Steering {
  // Find the predicted future location
  const futurePos = add(
    character.position,
    multiply(character.velocity, config.predictTime)
  );

  // Find the predicted position on the path
  const currentParam = getParam(path, futurePos);

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
