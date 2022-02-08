import { getScenario, initialState } from "@domain/initialState";
import updateFocussedCharacter from "@lib/updateFocussedCharacter";
import * as steering from "@steering/index";

describe("updateFocussedCharacter", () => {
  const getState = (changes = {}) => {
    const scenario = initialState.ui.focussedCharacterId
      ? getScenario(initialState.ui.focussedCharacterId)
      : null;
    scenario?.characters.forEach((char) => {
      char.behaviour = new steering.None();
    });
    return {
      ...initialState,
      ...changes,
    };
  };
  test("nothing is changed given no character is focussed", () => {
    const state = getState({
      ui: {
        ...initialState.ui,
        focussedCharacterId: null,
      },
    });
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    nextState.scenario?.characters.forEach((char) => {
      expect(char.behaviour instanceof steering.Wander).toBe(false);
    });
  });
  test("nothing is changed given the id is invalid", () => {
    const state = getState({
      ui: {
        ...initialState.ui,
        focussedCharacterId: "NO_MATCH",
      },
    });
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    nextState.scenario?.characters.forEach((char) => {
      expect(char.behaviour instanceof steering.Wander).toBe(false);
    });
  });
  test("only the focussed character is changed", () => {
    const state = getState({
      ...initialState.ui,
      focussedCharacterId: initialState.scenario?.characters.keys().next()
        .value,
    });
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    for (const key in nextState.scenario?.characters) {
      const char = nextState.scenario?.characters.get(key);
      if (key === state.ui.focussedCharacterId) {
        expect(char?.behaviour instanceof steering.Wander).toBe(true);
      } else {
        expect(char?.behaviour instanceof steering.Wander).toBe(false);
      }
    }
  });
});
