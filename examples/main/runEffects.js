// @flow

import type { Kinematic } from "../../lib/kinematic.js";
import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawSelectionBox from "../../lib/drawSelectionBox.js";

import type { State } from "./state.js";

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
  },
  state: State
): void {
  dom.main.clearRect(0, 0, 800, 800);
  drawGrid(dom.main);

  state.characters.forEach((cha: Kinematic) => {
    drawArrow(dom.main, cha);
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(dom.main, focussedCharacter.position);
    }
  }
}
