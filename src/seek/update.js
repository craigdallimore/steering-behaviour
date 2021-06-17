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
import { initialState, type State } from "./state.js";

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";

export type Action =
  | {
      type: typeof TICK,
      payload: number,
    }
  | {
      type: typeof PLAY_BUTTON_CLICKED,
    };

type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

// HELPERS --------------------------------------------------------------------

const limitOrientation = (o: number): number => {
  if (o > 2 * Math.PI) {
    return -2 * Math.PI;
  }
  if (o < -2 * Math.PI) {
    return 2 * Math.PI;
  }
  return o;
};

const limitPosition = ([x, z]: Vector): Vector => {
  const nextX = x < 10 ? 10 : x > 290 ? 290 : x;
  const nextZ = z < 10 ? 10 : z > 290 ? 290 : z;
  return [nextX, nextZ];
};

function getNewOrientation(o: number, velocity: Vector): number {
  if (length(velocity) > 0) {
    return bearing(velocity);
  }
  return o;
}

// ----------------------------------------------------------------------------

const maxAcceleration = 25;
const maxSpeed = 55;

function getSeekSteering(character: Kinematic, target: Kinematic): Steering {
  const linear = multiply(
    normalise(subtract(target.position, character.position)),
    maxAcceleration
  );

  const angular = getNewOrientation(0, linear);

  return {
    angular,
    linear,
  };
}

export function update(state: State, action: Action): State {
  switch (action.type) {
    case "PLAY_BUTTON_CLICKED":
      return {
        ...state,
        isPaused: !state.isPaused,
      };

    case "TICK": {
      if (state.isPaused) {
        return state;
      }
      const time = action.payload;

      // Here we expose the current state of the character and the steering.
      // Steering has a linear vector giving maximum velocity towards the target.
      // It is flooring it.
      const steering = getSeekSteering(state.character, state.target);
      const { velocity, position, orientation, rotation } = state.character;

      if (
        position[0] === state.target.position[0] &&
        position[1] === state.target.position[1]
      ) {
        return initialState;
      }

      // Here we multiply the velocity with time (giving a vector) and add that to
      // the current position vector.
      // Suppose the velocity has a length of 2 pixels, and the time is 2 seconds.
      // This would give us 4 pixels of movement.
      const nextPosition = add(position, multiply(velocity, time));

      // Orientation:
      //  0        = Up
      //  0.5 * PI = ->
      // -0.5 * PI = ->
      // Like velocity, the rotation is multiplied by time to give the difference in
      // radians from the previous orientation.
      const nextOrientation = orientation + rotation * time;

      // The velocity is increased by a difference of the maximum acceleration
      // multiplied by time.
      const nextVelocity = add(velocity, multiply(steering.linear, time));
      const nextRotation = steering.angular * time;

      const finalVelocity =
        length(nextVelocity) > maxSpeed
          ? multiply(normalise(nextVelocity), maxSpeed)
          : nextVelocity;

      const finalPosition = limitPosition(nextPosition);
      const finalOrientation = limitOrientation(nextOrientation);
      const finalRotation = nextRotation;

      const nextChar: Kinematic = {
        ...state.character,
        position: finalPosition,
        velocity: finalVelocity,
        orientation: finalOrientation,
        rotation: finalRotation,
      };

      return {
        ...state,
        character: nextChar,
      };
    }

    default:
      return state;
  }
}
