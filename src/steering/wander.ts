import {
  multiply,
  radiansToVector,
  degreesToVector,
  add,
} from "../lib/vector.js";
import type { Kinematic, Vector, Steering } from "@domain/types.js";
import type { AlignConfig } from "./align.js";
import { face } from "./face.js";

type Config = {
  wanderOffset: number;
  wanderRadius: number;
  maxAcceleration: number;
};

export function wander(
  kinematic: Kinematic,
  config: Config,
  alignConfig: AlignConfig
): Steering {
  const wanderPosition: Vector = add(
    kinematic.position,
    multiply(radiansToVector(kinematic.orientation), config.wanderOffset)
  );

  const wanderOrientation = Math.random() * 360;

  const nextTargetPosition = add(
    wanderPosition,
    multiply(degreesToVector(wanderOrientation), config.wanderRadius * 2)
  );

  const { angular } = face(kinematic, nextTargetPosition, alignConfig);

  const linear = multiply(
    radiansToVector(kinematic.orientation),
    config.maxAcceleration
  );

  return {
    angular,
    linear,
  };
}
