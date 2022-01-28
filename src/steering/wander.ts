import {
  multiply,
  radiansToVector,
  degreesToVector,
  add,
} from "@lib/vector.js";
import type {
  Kinematic,
  Vector,
  Steering,
  WanderConfig,
} from "@domain/types.js";
import { face } from "./face.js";

export function wander(kinematic: Kinematic, config: WanderConfig): Steering {
  const wanderPosition: Vector = add(
    kinematic.position,
    multiply(radiansToVector(kinematic.orientation), config.wanderOffset)
  );

  const wanderOrientation = Math.random() * 360;

  const nextTargetPosition = add(
    wanderPosition,
    multiply(degreesToVector(wanderOrientation), config.wanderRadius * 2)
  );

  const { angular } = face(kinematic, nextTargetPosition, config.faceConfig);

  const linear = multiply(
    radiansToVector(kinematic.orientation),
    config.maxAcceleration
  );

  return {
    angular,
    linear,
  };
}
