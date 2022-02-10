import type { Scenario, ScenarioId, State } from "@domain/types";
import init01 from "./scenario01";
import init02 from "./scenario02";
import init03 from "./scenario03";
import init04 from "./scenario04";

// The scenarios use stateful class instances to represent various items.
// It is not straightforward to make these immutable; for simplicities sake
// we will reinitialise each scenario when we switch to it.
export function getScenario(id: ScenarioId): Scenario | null {
  switch (id) {
    case "SC_01":
      return init01();
    case "SC_02":
      return init02();
    case "SC_03":
      return init03();
    case "SC_04":
      return init04();
    default:
      return null;
  }
}

const focussedScenarioId = "SC_03";

export const initialState: State = {
  ui: {
    actionFeedbackCount: -1,
    canvasDimensions: [800, 800],
    isDebugMode: true,
    isPaused: true,
    isSettingTarget: false,
    focussedCharacterId: "_1",
    focussedScenarioId,
  },
  scenarioIds: ["SC_01", "SC_02", "SC_03", "SC_04"],
  scenario: getScenario(focussedScenarioId),
};
