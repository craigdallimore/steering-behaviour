// @flow
import drawScene from "../lib/drawScene.js";
import { update, initialState, type State } from "./scene.js";

function main(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  function frame(state) {
    return function (time) {
      ctx.clearRect(0, 0, 300, 300);
      drawScene(ctx, state);
      const nextState = update(time, state);
      window.requestAnimationFrame(frame(nextState));
    };
  }

  window.requestAnimationFrame(frame(initialState));
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
