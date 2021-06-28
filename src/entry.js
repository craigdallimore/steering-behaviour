// @flow
import * as seekArrive from "../examples/seek-arrive/index.js";
import * as align from "../examples/align/index.js";
import { createStore } from "./events.js";

const seekArriveStore = createStore(seekArrive.update, seekArrive.initialState);
const alignStore = createStore(align.update, align.initialState);

function main() {
  const seekArriveDom = seekArrive.init(seekArriveStore);
  const alignDom = align.init();

  if (!seekArriveDom) {
    return;
  }
  if (!alignDom) {
    return;
  }

  function frame(prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
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

      window.requestAnimationFrame(frame(time));
    };
  }

  window.requestAnimationFrame(frame(0));
}

main();
