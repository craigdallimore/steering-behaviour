import { State, Character } from "@domain/types.js";
import getCharacter from "./getCharacter.js";

export default function getFocussedCharacter(state: State): Character | null {
  return getCharacter(state.ui.focussedCharacterId, state.characters);
}
