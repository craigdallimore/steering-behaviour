// @flow

import drawArrow from "../../lib/drawArrow.js";
import drawGrid from "../../lib/drawGrid.js";
import drawPath from "../../lib/drawPath.js";
import drawShape from "../../lib/drawShape.js";
import drawSelectionBox from "../../lib/drawSelectionBox.js";

import type { State, Character } from "./state.js";
import type { Path } from "../../lib/path.js";
import type { Shape } from "../../lib/shape.js";

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

  state.paths.forEach((p: Path) => {
    drawPath(dom.main, p, "rgba(178, 223, 219, 1)");
  });

  state.shapes.forEach((s: Shape) => {
    drawShape(dom.main, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(dom.main, focussedCharacter.kinematic.position);
    }
  }
}
