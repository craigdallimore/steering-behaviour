// @flow

import type { Kinematic } from "../lib/kinematic.js";

export type State = {
  character: Kinematic,
  target: Kinematic,
};

export function update(time: number, state: State): State {
  return {
    ...state,
    character: {
      ...state.character,
      position: [state.character.position[0], 300 - ((time / 10) % 300)],
    },
  };
}

export const initialState: State = {
  target: {
    position: [10, 10],
    orientation: 0,
    velocity: [0, 0],
    rotation: 0,
  },
  character: {
    position: [50, 50],
    orientation: 0,
    velocity: [0, 0],
    rotation: 0,
  },
};
