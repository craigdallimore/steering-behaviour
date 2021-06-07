// @flow
import drawScene from "../lib/drawScene.js";

function main(canvas /* :HTMLCanvasElement */) {
  const ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  drawScene(
    ctx,
    {
      x: 100,
      z: 100,
    },
    {
      x: 140,
      z: 140,
    }
  );
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
