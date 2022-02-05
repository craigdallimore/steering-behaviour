import drawArrow from "./drawArrow";
import drawGrid from "./drawGrid";
import drawPath from "./drawPath";
import drawSelectionBox from "./drawSelectionBox";
import drawShape from "./drawShape";
import drawCircle from "./drawCircle";

import type { State, Character, Path, Shape } from "@domain/types";
import getFocussedCharacter from "@lib/getFocussedCharacter";
import getFocussedScenario from "@lib/getFocussedScenario";
import drawVector from "./drawVector";

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

  const scenario = getFocussedScenario(state);

  if (!scenario) {
    return;
  }

  scenario.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  const focussedCharacter = getFocussedCharacter(state);

  if (
    state.ui.actionFeedbackCount > -1 &&
    focussedCharacter &&
    "targetId" in focussedCharacter.behaviour
  ) {
    const target = scenario.characters.get(
      focussedCharacter.behaviour.targetId
    );
    if (target) {
      drawCircle(
        ctx,
        target.kinematic.position,
        10,
        `rgba(255, 255, 0, ${Math.max(state.ui.actionFeedbackCount, 1) / 100})`
      );
    }
  }

  scenario.characters.forEach((cha: Character) => {
    drawArrow(ctx, cha.kinematic);
    if (state.ui.isDebugMode && "debugPosition" in cha.behaviour) {
      drawVector(
        ctx,
        cha.kinematic.position,
        cha.behaviour.debugPosition,
        "red"
      );
    }
  });

  scenario.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(178, 223, 219, 1)");
  });

  if (focussedCharacter) {
    drawSelectionBox(ctx, focussedCharacter.kinematic.position);
  }
}
