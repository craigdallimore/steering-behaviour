import drawGrid from "./drawGrid";
import drawPath from "./drawPath";
import drawSelectionBox from "./drawSelectionBox";
import drawShape from "./drawShape";
import drawCircle from "./drawCircle";

import type { State, Character, Path, Shape } from "@domain/types";
import getFocussedCharacter from "@lib/getFocussedCharacter";
import drawDebug from "./drawDebug";
import getFirstTargetId from "@lib/getFirstTargetId";
import drawCharacter from "./drawCharacter";

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

  if (!state.scenario) {
    return;
  }

  state.scenario.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  const focussedCharacter = getFocussedCharacter(state);

  const targetId = focussedCharacter
    ? getFirstTargetId(focussedCharacter.behaviours)
    : null;

  if (state.ui.actionFeedbackCount > -1 && focussedCharacter && targetId) {
    const target = state.scenario.characters.get(targetId);
    if (target) {
      drawCircle(
        ctx,
        target.kinematic.position,
        10,
        `rgba(255, 255, 0, ${Math.max(state.ui.actionFeedbackCount, 1) / 100})`
      );
    }
  }

  state.scenario.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(224, 64, 251, 1)");
  });

  state.scenario.characters.forEach((cha: Character) => {
    drawCharacter(ctx, cha);
    if (state.ui.isDebugMode) {
      cha.behaviours.forEach((behaviour) => {
        drawDebug(ctx, behaviour.debug, cha.kinematic);
      });
    }
  });

  if (focussedCharacter) {
    drawSelectionBox(ctx, focussedCharacter.kinematic.position);
  }
}
