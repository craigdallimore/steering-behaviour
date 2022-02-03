import { State, Character } from "@domain/types.js";
import getCharacter from "./getCharacter.js";
import getFocussedScenario from "./getFocussedScenario.js";

export default function getFocussedCharacter(state: State): Character | null {
  const scenario = getFocussedScenario(state);
  return (
    scenario && getCharacter(state.ui.focussedCharacterId, scenario.characters)
  );
}
