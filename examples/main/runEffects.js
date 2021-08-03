// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawSelectionBox from "../../lib/drawSelectionBox.js";

import type { State, Character } from "./state.js";

export default function runEffects(
  dom: {
    main: CanvasRenderingContext2D,
  },
  state: State
): void {
  dom.main.clearRect(0, 0, 800, 800);
  drawGrid(dom.main);

  state.characters.forEach((cha: Character) => {
    drawArrow(dom.main, cha.kinematic);
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(dom.main, focussedCharacter.kinematic.position);
    }
  }
}
