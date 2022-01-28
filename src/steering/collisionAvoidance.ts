import {
  add,
  dot,
  length,
  subtract,
  multiply,
  normalise,
} from "@lib/vector.js";
import type {
  Kinematic,
  Vector,
  Steering,
  CollisionAvoidanceConfig,
} from "@domain/types.js";

type Final = {
  shortestTime: number;
  firstMinSeparation: number;
  firstDistance: number;
  firstRelativePos: Vector;
  firstRelativeVel: Vector;
  firstTarget: Kinematic | null;
};

export function collisionAvoidance(
  kinematic: Kinematic,
  targets: Array<Kinematic>,
  config: CollisionAvoidanceConfig
): Steering {
  const init: Final = {
    shortestTime: Infinity,
    firstMinSeparation: 0,
    firstDistance: 0,
    firstRelativePos: [0, 0],
    firstRelativeVel: [0, 0],
    firstTarget: null,
  };

  const final = targets.reduce((acc, target) => {
    // Calculate the time to collision
    const relativePos = subtract(target.position, kinematic.position);
    const relativeVel = subtract(target.velocity, kinematic.velocity);
    const relativeSpeed = length(relativeVel);
    const timeToCollision = dot(relativePos, relativeVel) / relativeSpeed ** 2;

    const distance = length(relativePos);
    const minSeparation = distance - relativeSpeed * acc.shortestTime;

    if (minSeparation > 2 * config.radius) {
      return acc;
    }
    if (timeToCollision > 0 && timeToCollision < acc.shortestTime) {
      return {
        shortestTime: timeToCollision,
        firstMinSeparation: minSeparation,
        firstDistance: distance,
        firstRelativePos: relativePos,
        firstRelativeVel: relativeVel,
        firstTarget: target,
      };
    }

    return acc;
  }, init);

  if (!final.firstTarget) {
    return {
      angular: 0,
      linear: [0, 0],
    };
  }

  const relativePos =
    final.firstMinSeparation <= 0 || final.firstDistance < 2 * config.radius
      ? // If we’re going to hit exactly, or if we’re already colliding, then
        // do the steering based on current position.
        subtract(kinematic.position, final.firstTarget.position)
      : // Otherwise calculate the future relative position
        add(
          final.firstRelativePos,
          multiply(final.firstRelativeVel, final.shortestTime)
        );

  // Avoid the target
  return {
    linear: multiply(normalise(relativePos), config.maxAcceleration),
    angular: 0,
  };
}
