// @flow
import { initialState, type State } from "./seek/state.js";
import { update } from "./seek/update.js";
import runEffects from "./seek/runEffects.js";

function main(canvas: HTMLCanvasElement, chart: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  const chartCtx = chart.getContext("2d");
  ctx.translate(0.5, 0.5);
  chartCtx.translate(0.5, 0.5);

  function frame(state, prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
      runEffects(ctx, chartCtx, state, t);
      const nextState = update(t, state);
      window.requestAnimationFrame(frame(nextState, time));
    };
  }

  window.requestAnimationFrame(frame(initialState, 0));
}

const c = document.querySelector("#can");
const chart = document.getElementById("chart");

if (c instanceof HTMLCanvasElement && chart instanceof HTMLCanvasElement) {
  main(c, chart);
}
