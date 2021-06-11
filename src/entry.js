// @flow
import drawScene from "../lib/drawScene.js";
import { update, initialState, type State } from "./scene.js";

function main(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  function frame(state, prevtime: number) {
    return function (time) {
      ctx.clearRect(0, 0, 300, 300);
      drawScene(ctx, state);
      const nextState = update((time - prevtime) / 1000, state);
      window.requestAnimationFrame(frame(nextState, time));
    };
  }

  window.requestAnimationFrame(frame(initialState, 0));
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
