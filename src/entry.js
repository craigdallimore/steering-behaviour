// @flow
import drawScene from "../lib/drawScene.js";
import type { Kinematic } from "../lib/kinematic.js";
import type { State } from "../lib/drawScene.js";

function getState(time: number, state: State): State {
  return {
    ...state,
    character: {
      ...state.character,
      position: [state.character.position[0], 300 - ((time / 10) % 300)],
    },
  };
}

const initialState: State = {
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

function main(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  function frame(state) {
    return function (time) {
      ctx.clearRect(0, 0, 300, 300);
      drawScene(ctx, state);
      const nextState = getState(time, state);
      window.requestAnimationFrame(frame(nextState));
    };
  }

  window.requestAnimationFrame(frame(initialState));
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
