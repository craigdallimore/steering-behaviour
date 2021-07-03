// @flow
import * as seekArrive from "../examples/seek-arrive/index.js";
import * as align from "../examples/align/index.js";
import * as example from "../examples/main/index.js";
import { createStore } from "./events.js";

const seekArriveStore = createStore(seekArrive.update, seekArrive.initialState);
const alignStore = createStore(align.update, align.initialState);
const exampleStore = createStore(example.update, example.initialState);

function main() {
  const seekArriveDom = seekArrive.init(seekArriveStore);
  const alignDom = align.init();
  const exampleDom = example.init(exampleStore);

  if (!exampleDom) {
    return;
  }
  if (!seekArriveDom) {
    return;
  }
  if (!alignDom) {
    return;
  }

  function frame(prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
      const exampleState = exampleStore.dispatch({
        type: "TICK",
        payload: t,
      });
      const seekArriveState = seekArriveStore.dispatch({
        type: "TICK",
        payload: t,
      });
      const alignState = alignStore.dispatch({
        type: "TICK",
        payload: t,
      });
      seekArrive.runEffects(seekArriveDom, seekArriveState, t);
      align.runEffects(alignDom, alignState);
      example.runEffects(exampleDom, exampleState);

      window.requestAnimationFrame(frame(time));
    };
  }

  window.requestAnimationFrame(frame(0));
}

main();
