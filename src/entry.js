// @flow
import drawScene from "../lib/drawScene.js";
import drawMeta from "../lib/drawMeta.js";
import { update, initialState, type State } from "./scene.js";

function main(canvas: HTMLCanvasElement, chart: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  const chartCtx = chart.getContext("2d");
  ctx.translate(0.5, 0.5);
  chartCtx.translate(0.5, 0.5);

  function frame(state, prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
      ctx.clearRect(0, 0, 300, 300);
      drawScene(ctx, state);
      drawMeta(chartCtx, state, t);
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
