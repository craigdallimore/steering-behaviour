import type { Scenario, ScenarioId, State } from "@domain/types";
import initBlank from "./scenario_blank";
import initWander from "./scenario_wander";
import initColl from "./scenario_collision";
import initOb1 from "./scenario_many_obstacles";
import initOb2 from "./scenario_obstacle_walls";
import initEvade from "./scenario_evade";
import initPath from "./scenario_path";
import initSeparation from "./scenario_separation";

// The scenarios use stateful class instances to represent various items.
// It is not straightforward to make these immutable; for simplicities sake
// we will reinitialise each scenario when we switch to it.
export function getScenario(id: ScenarioId): Scenario | null {
  switch (id) {
    case "SC_BLANK":
      return initBlank();
    case "SC_WANDER":
      return initWander();
    case "SC_COLL":
      return initColl();
    case "SC_OB_1":
      return initOb1();
    case "SC_OB_2":
      return initOb2();
    case "SC_EVADE":
      return initEvade();
    case "SC_PATH":
      return initPath();
    case "SC_SEPARATION":
      return initSeparation();
    default:
      return null;
  }
}

export function getState(focussedScenarioId: string): State {
  return {
    ui: {
      actionFeedbackCount: -1,
      canvasDimensions: [800, 800],
      isDebugMode: false,
      isPaused: true,
      isSettingTarget: false,
      focussedCharacterId: "_1",
      focussedScenarioId,
    },
    scenarioIds: [
      "SC_BLANK",
      "SC_WANDER",
      "SC_COLL",
      "SC_OB_1",
      "SC_OB_2",
      "SC_EVADE",
      "SC_PATH",
      "SC_SEPARATION",
    ],
    scenario: getScenario(focussedScenarioId),
  };
}
