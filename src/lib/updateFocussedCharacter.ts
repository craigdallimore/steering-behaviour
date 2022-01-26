import { State, Character } from "@domain/types.js";

export default function (state: State, fn: (a: Character) => Character): State {
  if (!state.focussedCharacterId) {
    return state;
  }
  const id = state.focussedCharacterId;
  const char = state.characters.get(state.focussedCharacterId);
  if (!char) {
    return state;
  }
  state.characters.set(id, fn(char));
  return state;
}
