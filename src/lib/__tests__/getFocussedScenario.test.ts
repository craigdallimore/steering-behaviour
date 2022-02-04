import { initialState } from "@domain/initialState";
import getFocussedScenario from "@lib/getFocussedScenario";

describe("getFocussedScenario", () => {
  it("returns null, given no focussed scenario id", () => {
    const state = { ...initialState };
    state.ui.focussedScenarioId = null;
    expect(getFocussedScenario(state)).toBe(null);
  });
  it("returns null, given no scenario matching the id", () => {
    const state = { ...initialState };
    state.ui.focussedScenarioId = "NO_MATCH";
    expect(getFocussedScenario(state)).toBe(null);
  });
  it("returns the scenario, given it can be looked up by id", () => {
    const state = { ...initialState };
    state.ui.focussedScenarioId = state.scenarioMap.keys().next().value;
    expect(getFocussedScenario(state)).not.toBe(null);
  });
});
