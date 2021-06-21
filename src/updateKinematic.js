// @flow

import type { Kinematic } from "../lib/kinematic.js";
import { add, length, multiply, normalise } from "../lib/vector.js";
import type { Steering } from "./steering.js";
const maxSpeed = 55;

export default function updateKinematic(
  steering: Steering,
  character: Kinematic,
  time: number
): Kinematic {
  const { velocity, position, orientation, rotation } = character;

  const nextPosition = add(position, multiply(velocity, time));
  const nextOrientation = orientation + rotation * time;

  // The velocity is increased by a difference of the maximum acceleration
  // multiplied by time.
  const nextVelocity = add(velocity, multiply(steering.linear, time));
  const nextRotation = steering.angular * time;

  const finalVelocity =
    length(nextVelocity) > maxSpeed
      ? multiply(normalise(nextVelocity), maxSpeed)
      : nextVelocity;

  return {
    position: nextPosition,
    velocity: finalVelocity,
    orientation: nextOrientation,
    rotation: nextRotation,
  };
}
