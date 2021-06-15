// @flow
import {
  init,
  update,
  runEffects,
  initialState,
  type State,
} from "./seek/index.js";

function main() {
  const dom = init();

  if (!dom) {
    return;
  }

  function frame(state, prevtime: number) {
    return function (time) {
      const t = (time - prevtime) / 1000;
      runEffects(dom, state, t);
      const nextState = update(t, state);
      window.requestAnimationFrame(frame(nextState, time));
    };
  }

  window.requestAnimationFrame(frame(initialState, 0));
}

main();
