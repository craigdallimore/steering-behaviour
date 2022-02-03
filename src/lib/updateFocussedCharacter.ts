import { State, Character } from "@domain/types.js";
import getFocussedScenario from "./getFocussedScenario";

export default function (state: State, fn: (a: Character) => Character): State {
  const scenario = getFocussedScenario(state);
  if (!state.ui.focussedCharacterId || !scenario) {
    return state;
  }
  const id = state.ui.focussedCharacterId;
  const char = scenario.characters.get(state.ui.focussedCharacterId);
  if (!char) {
    return state;
  }
  scenario.characters.set(id, fn(char));
  return state;
}
