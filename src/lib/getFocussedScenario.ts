import { State, Scenario } from "@domain/types.js";

export default function getFocussedScenario(state: State): Scenario | null {
  if (!state.ui.focussedScenarioId) {
    return null;
  }
  return state.scenarioMap.get(state.ui.focussedScenarioId) || null;
}
