import { initialState } from "@domain/initialState";
import getFocussedScenario from "@lib/getFocussedScenario";
import getFocussedCharacter from "../getFocussedCharacter";

describe("getCharacter", () => {
  it("returns null, given no focussed character", () => {
    const state = { ...initialState };
    state.ui.focussedCharacterId = null;
    expect(getFocussedCharacter(state)).toBe(null);
  });
  it("returns null, given no character matching the id", () => {
    const state = { ...initialState };
    state.ui.focussedCharacterId = "NO_MATCH";
    expect(getFocussedCharacter(state)).toBe(null);
  });
  it("returns the character, given it can be looked up by id", () => {
    const state = { ...initialState };
    const scenario = getFocussedScenario(state);
    state.ui.focussedCharacterId = scenario?.characters.keys().next().value;
    expect(getFocussedCharacter(state)).not.toBe(null);
  });
});
