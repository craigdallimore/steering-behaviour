// @flow

import type { Kinematic } from "../../lib/kinematic.js";
import {
  add,
  subtract,
  bearing,
  multiply,
  length,
  normalise,
  type Vector,
} from "../../lib/vector.js";
import { type State } from "./state.js";

type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

// ----------------------------------------------------------------------------

const maxAcceleration = 25;
const maxSpeed = 55;

function getSeekSteering(character: Kinematic, target: Kinematic): Steering {
  const linear = multiply(
    normalise(subtract(target.position, character.position)),
    maxAcceleration
  );

  const angular = 0;

  return {
    angular,
    linear,
  };
}

export default function seek(state: State, time: number): State {
  // Here we expose the current state of the character and the steering.
  // Steering has a linear vector giving maximum velocity towards the
  // target.
  // It is flooring it.
  const steering = getSeekSteering(state.character, state.target);
  const { velocity, position, orientation, rotation } = state.character;

  if (
    position[0] === state.target.position[0] &&
    position[1] === state.target.position[1]
  ) {
    return {
      ...state,
      target: {
        ...state.target,
        position: [
          Math.floor(Math.random() * 280 + 10),
          Math.floor(Math.random() * 280 + 10),
        ],
      },
    };
  }

  // Here we multiply the velocity with time (giving a vector) and add that
  // to the current position vector.
  // Suppose the velocity has a length of 2 pixels, and the time is 2
  // seconds.  This would give us 4 pixels of movement.
  const nextPosition = add(position, multiply(velocity, time));

  // Orientation:
  //  0        = Up
  //  0.5 * PI = ->
  // -0.5 * PI = <-
  // Like velocity, the rotation is multiplied by time to give the
  // difference in radians from the previous orientation.
  const nextOrientation = orientation + rotation * time;

  // The velocity is increased by a difference of the maximum acceleration
  // multiplied by time.
  const nextVelocity = add(velocity, multiply(steering.linear, time));
  const nextRotation = steering.angular * time;

  const finalVelocity =
    length(nextVelocity) > maxSpeed
      ? multiply(normalise(nextVelocity), maxSpeed)
      : nextVelocity;

  const nextChar: Kinematic = {
    ...state.character,
    position: nextPosition,
    velocity: finalVelocity,
    orientation: nextOrientation,
    rotation: nextRotation,
  };

  return {
    ...state,
    character: nextChar,
  };
}
