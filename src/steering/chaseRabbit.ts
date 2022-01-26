import { getParam, getPosition } from "../lib/path.js";
import type { Kinematic, Path, Steering } from "@domain/types.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
import type { AlignConfig } from "./align.js";

type Config = {
  pathOffset: number;
  maxAcceleration: number;
};

export function chaseRabbit(
  character: Kinematic,
  path: Path,
  config: Config,
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
