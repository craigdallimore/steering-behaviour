// @flow

import type { Kinematic } from "../lib/kinematic.js";
import {
  add,
  subtract,
  bearing,
  multiply,
  length,
  normalise,
  type Vector,
} from "../lib/vector.js";

export type State = {
  character: Kinematic,
  target: Kinematic,
};

type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

const pre = document.getElementById("pre");

// HELPERS --------------------------------------------------------------------

const normaliseOrientation = (o: number): number => {
  if (o > 2 * Math.PI) {
    return -2 * Math.PI;
  }
  if (o < -2 * Math.PI) {
    return 2 * Math.PI;
  }
  return o;
};

const normalisePosition = ([x, z]: Vector): Vector => {
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

const maxAcceleration = 10;
const maxSpeed = 25;

function getSeekSteering(character: Kinematic, target: Kinematic): Steering {
  const linear = multiply(
    normalise(subtract(target.position, character.position)),
    maxAcceleration
  );

  return {
    angular: 0,
    linear,
  };
}

export function update(time: number, state: State): State {
  const steering = getSeekSteering(state.character, state.target);
  const { velocity, position, orientation, rotation } = state.character;

  const nextPosition = add(position, multiply(velocity, time));
  const nextOrientation = orientation + rotation * time;

  const nextVelocity = add(velocity, multiply(steering.linear, time));
  const nextRotation = steering.angular * time;

  const finalVelocity =
    length(nextVelocity) > maxSpeed
      ? multiply(normalise(nextVelocity), time)
      : multiply(nextVelocity, maxSpeed);

  const finalPosition = normalisePosition(nextPosition);
  const finalOrientation = normaliseOrientation(nextOrientation);
  const finalRotation = nextRotation;

  // $FlowIgnoreError
  pre.textContent = `
Velocity: ${length(finalVelocity).toFixed()}
Steering: ${length(steering.linear)}
`;

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

//const toRadian = (degree) => (degree * Math.PI) / 180;

export const initialState: State = {
  target: {
    position: [10, 10],
    velocity: [0, 0],
    orientation: 0,
    rotation: 0,
  },
  character: {
    position: [150, 150],
    velocity: [0, 0],
    orientation: 0,
    rotation: 0,
  },
};
