// @flow
import drawScene from "../lib/drawScene.js";

function getState(time) {
  return {
    character: {
      x: 100,
      z: 300 - ((time / 10) % 300),
    },
  };
}

function main(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  function frame(time) {
    ctx.clearRect(0, 0, 300, 300);
    const { character } = getState(time);

    drawScene(ctx, character, {
      x: 140,
      z: 140,
    });
    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
