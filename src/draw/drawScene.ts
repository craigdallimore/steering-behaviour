import drawArrow from "./drawArrow.js";
import drawGrid from "./drawGrid.js";
import drawPath from "./drawPath.js";
import drawSelectionBox from "./drawSelectionBox.js";
import drawShape from "./drawShape.js";

import type { State, Character, Path, Shape } from "@domain/types.js";

export default function drawScene(
  ctx: CanvasRenderingContext2D,
  state: State
): void {
  ctx.clearRect(0, 0, 800, 800);
  drawGrid(ctx);
  state.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  state.characters.forEach((cha: Character) => {
    drawArrow(ctx, cha.kinematic);
  });

  state.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(178, 223, 219, 1)");
  });

  if (state.focussedCharacterId) {
    const focussedCharacter = state.characters.get(state.focussedCharacterId);
    if (focussedCharacter) {
      drawSelectionBox(ctx, focussedCharacter.kinematic.position);
    }
  }
}
