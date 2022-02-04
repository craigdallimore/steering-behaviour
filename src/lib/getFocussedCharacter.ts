import { State, Character } from "@domain/types";
import getCharacter from "./getCharacter";
import getFocussedScenario from "./getFocussedScenario";

export default function getFocussedCharacter(state: State): Character | null {
  const scenario = getFocussedScenario(state);
  return (
    scenario && getCharacter(state.ui.focussedCharacterId, scenario.characters)
  );
}
