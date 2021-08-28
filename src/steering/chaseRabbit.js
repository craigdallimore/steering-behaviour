// @flow

import { getParam, getPosition, type Path } from "../../lib/path.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

type Config = {
  pathOffset: number,
  maxAcceleration: number,
};

export function chaseRabbit(
  character: Kinematic,
  path: Path,
  config: Config
): Steering {
  // Find the current position on the path
  const currentParam = getParam(path, character.position);

  // Offset it
  const targetParam = currentParam + config.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { angular } = lookWhereYouAreGoing(character);
  const { linear } = seek(character, targetPosition, config.maxAcceleration);
  return { angular, linear };
}
