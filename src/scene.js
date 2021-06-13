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
const chart: CanvasRenderingContext2D = document
  .getElementById("chart")
  //$FlowIgnoreError
  .getContext("2d");

chart.translate(0.5, 0.5);
let cx = 0;
let cy = 0;
let cz = 0;

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

const maxAcceleration = 10;
const maxSpeed = 25;

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

export function update(time: number, state: State): State {
  // Here we expose the current state of the character and the steering.
  // Steering has a linear vector giving maximum velocity towards the target.
  // It is flooring it.
  const steering = getSeekSteering(state.character, state.target);
  const { velocity, position, orientation, rotation } = state.character;

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

  const finalVelocity = nextVelocity;
  //length(nextVelocity) > maxSpeed
  //  ? normalise(nextVelocity)
  //  : multiply(nextVelocity, maxSpeed);

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

  // LOGGING ------------------------------------------------------------------

  cx += time + 0.1;

  // Draw velocity
  cy = 100 - length(finalVelocity);
  chart.save();
  chart.fillStyle = "rgb(240, 8, 6)";
  chart.transform(1, 0, 0, 1, cx, cy);
  chart.fillRect(cx, cy, 1, 1);
  chart.restore();

  // Draw velocity
  cz = position[0] * 0.2 + 50;
  chart.save();
  chart.fillStyle = "rgb(8, 240, 6)";
  chart.transform(1, 0, 0, 1, cx, cy);
  chart.fillRect(cx, cz, 1, 1);
  chart.restore();

  // $FlowIgnoreError
  pre.textContent = `


Velocity: ${length(finalVelocity).toFixed()}
Steering: ${length(steering.linear)}
          ${steering.angular}
Rot:      ${nextRotation}
`;

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
    position: [250, 250],
    velocity: [0, 0],
    orientation: 0.5 * Math.PI,
    rotation: 0,
  },
};
