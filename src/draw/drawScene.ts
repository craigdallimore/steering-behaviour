import drawArrow from "./drawArrow.js";
import drawGrid from "./drawGrid.js";
import drawPath from "./drawPath.js";
import drawSelectionBox from "./drawSelectionBox.js";
import drawShape from "./drawShape.js";
import drawCircle from "./drawCircle";

import type { State, Character, Path, Shape } from "@domain/types.js";
import getFocussedCharacter from "@lib/getFocussedCharacter.js";

export default function drawScene(
  ctx: CanvasRenderingContext2D,
  state: State
): void {
  ctx.clearRect(
    0,
    0,
    state.ui.canvasDimensions[0],
    state.ui.canvasDimensions[1]
  );
  drawGrid(ctx, state.ui.canvasDimensions);
  state.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  const focussedCharacter = getFocussedCharacter(state);

  if (
    state.ui.actionFeedbackCount > -1 &&
    focussedCharacter &&
    "targetId" in focussedCharacter.behaviour
  ) {
    const target = state.characters.get(focussedCharacter.behaviour.targetId);
    if (target) {
      drawCircle(
        ctx,
        target.kinematic.position,
        10,
        `rgba(255, 255, 0, ${Math.max(state.ui.actionFeedbackCount, 1) / 100})`
      );
    }
  }

  state.characters.forEach((cha: Character) => {
    drawArrow(ctx, cha.kinematic);
  });

  state.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(178, 223, 219, 1)");
  });

  if (focussedCharacter) {
    drawSelectionBox(ctx, focussedCharacter.kinematic.position);
  }
}
