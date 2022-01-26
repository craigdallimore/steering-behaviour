import type { Kinematic, Steering } from "@domain/types.js";
import { add, length, multiply, normalise } from "./lib/vector.js";
import limitOrientation from "./lib/limitOrientation.js";
const maxSpeed = 45;

export default function updateKinematic(
  steering: Steering,
  kinematic: Kinematic,
  time: number
): Kinematic {
  const { velocity, position, orientation, rotation } = kinematic;

  const nextPosition = add(position, multiply(velocity, time));
  // The velocity is increased by a difference of the maximum acceleration
  // multiplied by time.
  const nextVelocity = add(velocity, multiply(steering.linear, time));

  // time is going to be a decimal between 0 and 1 (probably).
  // Here we multiply the rotation speed by time (giving a time-proportional
  // value) and add it to the current orientation.
  const nextOrientation = limitOrientation(orientation + rotation * time);

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
