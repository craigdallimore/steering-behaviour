import drawArrow from "./drawArrow";
import drawGrid from "./drawGrid";
import drawPath from "./drawPath";
import drawSelectionBox from "./drawSelectionBox";
import drawShape from "./drawShape";
import drawCircle from "./drawCircle";

import type { State, Character, Path, Shape } from "@domain/types";
import getFocussedCharacter from "@lib/getFocussedCharacter";
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

  if (!state.scenario) {
    return;
  }

  state.scenario.shapes.forEach((s: Shape) => {
    drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
  });

  const focussedCharacter = getFocussedCharacter(state);

  if (
    state.ui.actionFeedbackCount > -1 &&
    focussedCharacter &&
    "targetId" in focussedCharacter.behaviour
  ) {
    const target = state.scenario.characters.get(
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

  state.scenario.characters.forEach((cha: Character) => {
    drawArrow(ctx, cha.kinematic);
    if (state.ui.isDebugMode && "debug" in cha.behaviour) {
      cha.behaviour.debug.points.forEach((point) => {
        drawCircle(ctx, point, 2, "cyan");
      });

      cha.behaviour.debug.vectors.forEach((vector) => {
        drawVector(ctx, cha.kinematic.position, vector, "red");
      });

      cha.behaviour.debug.edges.forEach((edge) => {
        drawPath(
          ctx,
          { position: cha.kinematic.position, points: edge, label: "Debug" },
          "silver"
        );
      });

      cha.behaviour.debug.circles.forEach(({ position, radius, fillStyle }) => {
        drawCircle(ctx, position, radius, fillStyle);
      });
    }
  });

  state.scenario.paths.forEach((p: Path) => {
    drawPath(ctx, p, "rgba(178, 223, 219, 1)");
  });

  if (focussedCharacter) {
    drawSelectionBox(ctx, focussedCharacter.kinematic.position);
  }
}
