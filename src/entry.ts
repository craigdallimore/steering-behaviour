import * as example from "./main/index.js";
import { createStore } from "./events.js";

const exampleStore = createStore(example.update, example.initialState);

function main(): void {
  const exampleDom = example.init(exampleStore);

  if (!exampleDom) {
    return;
  }
  const ctx: CanvasRenderingContext2D = exampleDom;

  function frame(prevtime: number) {
    return function (time: number) {
      const t = (time - prevtime) / 1000;
      const exampleState = exampleStore.dispatch({
        type: "TICK",
        payload: t,
      });
      example.runEffects(ctx, exampleState);
      window.requestAnimationFrame(frame(time));
    };
  }

  window.requestAnimationFrame(frame(0));
}

main();
