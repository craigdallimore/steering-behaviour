import {
  length,
  distance,
  subtract,
  multiply,
  normalise,
} from "@lib/vector.js";
import type { ArriveConfig, Kinematic, Steering } from "@domain/types.js";

export function arrive(
  character: Kinematic,
  target: Kinematic,
  config: ArriveConfig
): Steering | null {
  // Config

  const distanceToTarget = distance(character.position, target.position);
  const directionToTarget = subtract(target.position, character.position);

  if (distanceToTarget < config.targetRadius) {
    return null;
  }

  const idealSpeed =
    distanceToTarget > config.slowRadius
      ? config.maxSpeed
      : config.maxSpeed * (distanceToTarget / config.slowRadius);

  // Here we appear to take a vector from the two points, and relate it to
  // the ideal speed
  const idealVelocity = multiply(normalise(directionToTarget), idealSpeed);

  const reduced = subtract(idealVelocity, character.velocity);

  // A higher value will arrive sooner
  const linear = multiply(reduced, 1 / config.timeToTarget);

  const finalLinear =
    length(linear) > config.maxAcceleration
      ? multiply(normalise(linear), config.maxAcceleration)
      : linear;

  return {
    angular: 0,
    linear: finalLinear,
  };
}
