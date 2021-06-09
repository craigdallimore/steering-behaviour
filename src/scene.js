// @flow

import type { Kinematic } from "../lib/kinematic.js";
import { add, multiply, length, type Vector } from "../lib/vector.js";

export type State = {
  character: Kinematic,
  target: Kinematic,
};

type Steering = {
  linear: Vector,
  angular: number,
};

const steering = {
  //     -L +R   -U +D
  linear: [0.1, 0.1],
  angular: 0,
};

const pre = document.getElementById("pre");

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
  const nextX = x < 0 ? 0 : x > 300 ? 300 : x;
  const nextZ = z < 0 ? 0 : z > 300 ? 300 : z;
  return [nextX, nextZ];
};

function getNewOrientation(o: number, velocity: Vector): number {
  if (length(velocity) > 0) {
    return Math.atan2(velocity[0], -velocity[1]);
  }
  return o;
}

export function update(time: number, state: State): State {
  const { velocity, position, orientation, rotation } = state.character;

  const nextPosition = add(position, multiply(velocity, time));
  const nextVelocity = steering.linear;
  const nextOrientation = getNewOrientation(orientation, nextVelocity);
  const nextRotation = steering.angular;

  // $FlowIgnoreError
  pre.textContent = `
Time: ${time}

${length(velocity)}

Curr
----
Pos:  [${position[0]}
      ,${position[1]}]
Vel:  [${velocity.join(",")}]
Ori:  ${orientation}
Rot:  ${rotation}


Next
----
Pos:  [${nextPosition[0]}
      ,${nextPosition[1]}]
Vel:  [${nextVelocity.join(",")}]
Ori:  ${nextOrientation}
Rot:  ${nextRotation}

`;

  const nextChar: Kinematic = {
    ...state.character,
    position: normalisePosition(nextPosition),
    velocity: nextVelocity,
    orientation: normaliseOrientation(nextOrientation),
    rotation: nextRotation,
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
