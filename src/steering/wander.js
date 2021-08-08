// @flow

import {
  multiply,
  radiansToVector,
  degreesToVector,
  add,
  type Vector,
} from "../../lib/vector.js";
import type { Kinematic } from "../../lib/kinematic.js";
import type { Steering } from "./steering.js";
import { face } from "./face.js";

export function wander(character: Kinematic): Steering {
  // Config

  const wanderOffset = 50;
  const wanderRadius = 20;
  const maxAcceleration = 25;

  const wanderPosition: Vector = add(
    character.position,
    multiply(radiansToVector(character.orientation), wanderOffset)
  );

  const wanderOrientation = Math.random() * 360;

  const nextTargetPosition = add(
    wanderPosition,
    multiply(degreesToVector(wanderOrientation), wanderRadius * 2)
  );

  const { angular } = face(character, nextTargetPosition);

  const linear = multiply(
    radiansToVector(character.orientation),
    maxAcceleration
  );

  return {
    angular,
    linear,
  };
}
