import { State, Character } from "@domain/types.js";

export default function (state: State, fn: (a: Character) => Character): State {
  if (!state.ui.focussedCharacterId) {
    return state;
  }
  const id = state.ui.focussedCharacterId;
  const char = state.characters.get(state.ui.focussedCharacterId);
  if (!char) {
    return state;
  }
  state.characters.set(id, fn(char));
  return state;
}
