// @flow
import drawGrid from "./drawGrid.js";

function main(canvas /* :HTMLCanvasElement */) {
  const ctx = canvas.getContext("2d");
  console.log("hello world", ctx);

  drawGrid(ctx);
}

const c = document.querySelector("#can");
if (c instanceof HTMLCanvasElement) {
  main(c);
}
