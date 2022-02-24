import { getState } from "@domain/initialState";
import getFocussedCharacter from "../getFocussedCharacter";

describe("getCharacter", () => {
  it("returns null, given no focussed character", () => {
    const state = getState();
    state.ui.focussedCharacterId = null;
    expect(getFocussedCharacter(state)).toBe(null);
  });
  it("returns null, given no character matching the id", () => {
    const state = getState();
    state.ui.focussedCharacterId = "NO_MATCH";
    expect(getFocussedCharacter(state)).toBe(null);
  });
  it("returns the character, given it can be looked up by id", () => {
    const state = getState();
    state.ui.focussedCharacterId = state.scenario?.characters
      .keys()
      .next().value;
    expect(getFocussedCharacter(state)).not.toBe(null);
  });
});
