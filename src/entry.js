// @flow
import { init, update, runEffects, initialState } from "./seek/index.js";
import type { Action, State } from "./seek/index.js";
import { createStore, type Store } from "./events.js";

const store: Store<State, Action> = createStore(update, initialState);

function main() {
  const dom = init(store);

  if (!dom) {
    return;
  }

  function frame(prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
      const state = store.dispatch({
        type: "TICK",
        payload: t,
      });
      runEffects(dom, state, t);

      window.requestAnimationFrame(frame(time));
    };
  }

  window.requestAnimationFrame(frame(0));
}

main();
