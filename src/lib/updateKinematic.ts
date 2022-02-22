import type { Kinematic, Steering } from "@domain/types";
import { add, length, multiply, normalise } from "./vector";
import limitOrientation from "./limitOrientation";

export default function updateKinematic(
  steering: Steering,
  kinematic: Kinematic,
  time: number
): Kinematic {
  const nextPosition = add(
    kinematic.position,
    multiply(kinematic.velocity, time)
  );
  // The velocity is increased by a difference of the maximum acceleration
  // multiplied by time.
  const nextVelocity = add(kinematic.velocity, multiply(steering.linear, time));

  // time is going to be a decimal between 0 and 1 (probably).
  // Here we multiply the rotation speed by time (giving a time-proportional
  // value) and add it to the current orientation.
  const nextOrientation = limitOrientation(
    kinematic.orientation + kinematic.rotation * time
  );

  const nextRotation = steering.angular * time;

  const finalVelocity =
    length(nextVelocity) >= kinematic.maxSpeed
      ? multiply(normalise(nextVelocity), kinematic.maxSpeed)
      : nextVelocity;

  kinematic.position = nextPosition;
  kinematic.velocity = finalVelocity;
  kinematic.orientation = nextOrientation;
  kinematic.rotation = nextRotation;

  return kinematic;
}
