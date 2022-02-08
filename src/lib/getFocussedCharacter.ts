import { State, Character } from "@domain/types";
import getCharacter from "./getCharacter";

export default function getFocussedCharacter(state: State): Character | null {
  return (
    state.scenario &&
    getCharacter(state.ui.focussedCharacterId, state.scenario.characters)
  );
}
