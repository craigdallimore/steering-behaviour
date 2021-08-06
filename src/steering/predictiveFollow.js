// @flow

import { getParam, getPosition, type Path } from "../../lib/path.js";
import { add, multiply } from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";

export function predictiveFollow(character: Kinematic, path: Path): Steering {
  // config
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  const pathOffset = 30;

  // Holds the time in the future to predict the character position
  const predictTime = 0.1;

  // Find the predicted future location
  const futurePos = add(
    character.position,
    multiply(character.velocity, predictTime)
  );

  // Find the predicted position on the path
  const currentParam = getParam(path, futurePos);

  // Offset it
  const targetParam = currentParam + pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const target = {
    orientation: 0,
    rotation: 0,
    position: targetPosition,
    velocity: [0, 0],
  };

  const { angular } = lookWhereYouAreGoing(character);
  const { linear } = seek(character, target);
  return { angular, linear };
}
