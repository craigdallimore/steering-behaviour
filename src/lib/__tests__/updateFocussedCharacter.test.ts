import { initialState } from "@domain/initialState";
import getFocussedScenario from "@lib/getFocussedScenario";
import updateFocussedCharacter from "@lib/updateFocussedCharacter";
import * as steering from "@steering/index";

describe("updateFocussedCharacter", () => {
  test("nothing is changed given no character is focussed", () => {
    const state = { ...initialState };
    getFocussedScenario(state)?.characters.forEach((char) => {
      char.behaviour = new steering.None();
    });
    state.ui.focussedCharacterId = null;
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    const scenario = getFocussedScenario(nextState);
    scenario?.characters.forEach((char) => {
      expect(char.behaviour instanceof steering.Wander).toBe(false);
    });
  });
  test("nothing is changed given the id is invalid", () => {
    const state = { ...initialState };
    getFocussedScenario(state)?.characters.forEach((char) => {
      char.behaviour = new steering.None();
    });
    state.ui.focussedCharacterId = "NO_MATCH";
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    const scenario = getFocussedScenario(nextState);
    scenario?.characters.forEach((char) => {
      expect(char.behaviour instanceof steering.Wander).toBe(false);
    });
  });
  test("only the focussed character is changed", () => {
    const state = { ...initialState };
    getFocussedScenario(state)?.characters.forEach((char) => {
      char.behaviour = new steering.None();
    });
    state.ui.focussedCharacterId = getFocussedScenario(state)
      ?.characters.keys()
      .next().value;
    const nextState = updateFocussedCharacter(state, (char) => {
      char.behaviour = new steering.Wander();
      return char;
    });

    const scenario = getFocussedScenario(nextState);

    for (let key in scenario?.characters) {
      const char = scenario?.characters.get(key);
      if (key === state.ui.focussedCharacterId) {
        expect(char?.behaviour instanceof steering.Wander).toBe(true);
      } else {
        expect(char?.behaviour instanceof steering.Wander).toBe(false);
      }
    }
  });
});
