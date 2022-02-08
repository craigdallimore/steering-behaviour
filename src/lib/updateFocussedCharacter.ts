import { State, Character } from "@domain/types";

export default function (state: State, fn: (a: Character) => Character): State {
  if (!state.ui.focussedCharacterId || !state.scenario) {
    return state;
  }
  const id = state.ui.focussedCharacterId;
  const char = state.scenario.characters.get(state.ui.focussedCharacterId);
  if (!char) {
    return state;
  }
  state.scenario.characters.set(id, fn(char));
  return state;
}
